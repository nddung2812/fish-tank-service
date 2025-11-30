"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Star,
  Fish,
  Droplets,
  Leaf,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./clientdata";

export default function AquariumProjectsClient() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videoRef = useRef(null);

  const openLightbox = (project, mediaIndex) => {
    setSelectedMedia(project);
    setCurrentMediaIndex(mediaIndex);
  };

  const closeLightbox = useCallback(() => {
    setSelectedMedia(null);
    setCurrentMediaIndex(0);
  }, []);

  const nextMedia = useCallback(() => {
    if (selectedMedia && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMediaIndex((prev) =>
          prev === selectedMedia.media.length - 1 ? 0 : prev + 1
        );
        setTimeout(() => setIsTransitioning(false), 150);
      }, 75);
    }
  }, [selectedMedia, isTransitioning]);

  const prevMedia = useCallback(() => {
    if (selectedMedia && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMediaIndex((prev) =>
          prev === 0 ? selectedMedia.media.length - 1 : prev - 1
        );
        setTimeout(() => setIsTransitioning(false), 150);
      }, 75);
    }
  }, [selectedMedia, isTransitioning]);

  // Optimized touch event handlers for swipe functionality
  const onTouchStart = useCallback(
    (e) => {
      if (!selectedMedia) return;
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    },
    [selectedMedia]
  );

  const onTouchMove = useCallback(
    (e) => {
      if (!selectedMedia || !touchStart) return;
      // Throttle touch move events for performance
      if (e.timeStamp - (onTouchMove.lastUpdate || 0) < 16) return; // ~60fps
      onTouchMove.lastUpdate = e.timeStamp;
      setTouchEnd(e.targetTouches[0].clientX);
    },
    [selectedMedia, touchStart]
  );

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || !selectedMedia) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextMedia();
    } else if (isRightSwipe) {
      prevMedia();
    }

    // Clean up
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, selectedMedia, nextMedia, prevMedia]);

  // Optimized mouse event handlers for drag functionality
  const onMouseDown = useCallback(
    (e) => {
      if (!selectedMedia) return;
      setMouseEnd(null);
      setMouseStart(e.clientX);
      setIsDragging(true);
      e.preventDefault(); // Prevent text selection
    },
    [selectedMedia]
  );

  const onMouseMove = useCallback(
    (e) => {
      if (!isDragging || !selectedMedia || !mouseStart) return;
      // Throttle mouse move events for performance
      if (e.timeStamp - (onMouseMove.lastUpdate || 0) < 16) return; // ~60fps
      onMouseMove.lastUpdate = e.timeStamp;
      setMouseEnd(e.clientX);
    },
    [isDragging, selectedMedia, mouseStart]
  );

  const onMouseUp = useCallback(() => {
    if (!isDragging || !selectedMedia) return;

    if (mouseStart !== null && mouseEnd !== null) {
      const distance = mouseStart - mouseEnd;
      const isLeftDrag = distance > 50;
      const isRightDrag = distance < -50;

      if (isLeftDrag) {
        nextMedia();
      } else if (isRightDrag) {
        prevMedia();
      }
    }

    // Clean up
    setIsDragging(false);
    setMouseStart(null);
    setMouseEnd(null);
  }, [isDragging, selectedMedia, mouseStart, mouseEnd, nextMedia, prevMedia]);

  const onMouseLeave = useCallback(() => {
    setIsDragging(false);
    setMouseStart(null);
    setMouseEnd(null);
  }, []);

  const MediaItem = ({
    media,
    className = "",
    onClick,
    showPlayIcon = false,
    badge = null,
  }) => {
    const isVideo = media.type === "video";
    const mediaUrl = isVideo ? media.thumbnail || media.url : media.url;

    return (
      <div
        className={`relative group cursor-pointer overflow-hidden rounded-lg ${className}`}
        onClick={onClick}
      >
        <div className="relative w-full h-full">
          <Image
            src={mediaUrl}
            alt={`Media content`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Video Play Button Overlay */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 backdrop-blur-sm rounded-full p-3 group-hover:bg-black/80 transition-all duration-300">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          )}

          {/* General hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <Eye
              className={`${
                isVideo ? "w-5 h-5" : "w-6 h-6"
              } text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </div>

          {/* Badge overlay */}
          {badge && <div className="absolute bottom-2 right-2">{badge}</div>}
        </div>
      </div>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setShowPlayButton(false);
        })
        .catch(() => {
          setShowPlayButton(true);
        });
    }
  };

  useEffect(() => {
    // Try to play video immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setShowPlayButton(true);
      });
    }
  }, []);

  // Keyboard navigation for lightbox - optimized
  useEffect(() => {
    if (!selectedMedia) return;

    const handleKeyPress = (e) => {
      // Only handle specific keys to avoid unnecessary processing
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevMedia();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextMedia();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyPress, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedMedia, nextMedia, prevMedia, closeLightbox]);

  return (
    <>
      {/* Fallback Dark Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-30"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      />

      {/* Background Video - Desktop Only for Performance */}
      <div className="hidden md:block">
        <video
          ref={videoRef}
          className="fixed top-0 left-0 w-full h-full object-cover -z-20"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setShowPlayButton(true)}
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => setShowPlayButton(true));
            }
          }}
        >
          <source
            src="https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto:good,w_1280,h_720/v1739712678/koifish_feh63y.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Mobile Static Background - Blue Ocean Theme */}
      <div
        className="md:hidden fixed top-0 left-0 w-full h-full -z-20"
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #0a1628 0%, #0c1f4a 25%, #1e3a8a 50%, #1e40af 75%, #1d4ed8 100%)",
        }}
      />

      {/* Video Play Button Overlay - Shows if autoplay fails */}
      {showPlayButton && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black/50 backdrop-blur-sm">
          <Button
            onClick={handleVideoPlay}
            size="lg"
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 text-white shadow-2xl"
          >
            <Play className="h-8 w-8 ml-1" />
          </Button>
        </div>
      )}

      {/* Dark overlay for better text readability */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/30 -z-10"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      />

      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-500/30 border-emerald-400 text-emerald-100">
              Real Results From Brisbane & Gold Coast&apos;s #1 Fish Tank
              Service
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Customer Success Stories
            </h1>

            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              See the stunning transformations and professional results from our
              expert
              <strong className="text-emerald-300">
                {" "}
                fish tank cleaning service
              </strong>{" "}
              across Brisbane. From emergency rescues to luxury installations,
              discover why customers trust
              <strong className="text-emerald-300">
                {" "}
                Duckaroo&apos;s professional aquarium maintenance
              </strong>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3"
              >
                <Link href="/service">Get Your Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
              >
                <Link href="/contact">Contact Our Experts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Success Stories
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Browse our portfolio of successful aquarium projects across
                Brisbane. Each project showcases our commitment to excellence in
                fish tank cleaning and maintenance.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Project Header */}
                    <div className="p-6 pb-4">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                            {project.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-white/70 mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(project.date)}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {project.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(project.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                            <span className="text-white/70 text-sm ml-2">
                              {project.client}
                            </span>
                          </div>
                        </div>

                        <Badge className="bg-blue-500/20 border-blue-400 text-blue-200">
                          {project.type}
                        </Badge>
                      </div>

                      <p className="text-white/80 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-white/20 text-white/70 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Image Gallery - Dynamic Grid Layout */}
                    <div className="p-6 pt-0">
                      {/* Hero Image - Full Width Landscape */}
                      <div className="mb-3">
                        <div
                          className="relative group cursor-pointer overflow-hidden rounded-lg"
                          onClick={() => openLightbox(project, 0)}
                        >
                          <div className="relative aspect-[16/9] w-full">
                            <Image
                              src={
                                project.media[0].type === "video"
                                  ? project.media[0].thumbnail ||
                                    project.media[0].url
                                  : project.media[0].url
                              }
                              alt={`${project.name} - Main Image`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            />
                            {/* Video Play Button Overlay */}
                            {project.media[0].type === "video" && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-black/60 backdrop-blur-sm rounded-full p-4 group-hover:bg-black/80 transition-all duration-300">
                                  <Play className="w-12 h-12 text-white fill-white" />
                                </div>
                              </div>
                            )}

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                              <Eye
                                className={`${
                                  project.media[0].type === "video"
                                    ? "w-5 h-5"
                                    : "w-6 h-6"
                                } text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                              />
                            </div>
                            {/* Main Image Badge */}
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-black/50 backdrop-blur-sm border-white/20 text-white text-xs">
                                Featured
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Secondary Media Grid - Consistent sizing for up to 8 images */}
                      {project.media.length > 1 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                          {project.media.slice(1).map((media, mediaIndex) => (
                            <div key={mediaIndex + 1} className="relative">
                              <div
                                className="relative aspect-square w-full group cursor-pointer overflow-hidden rounded-lg"
                                onClick={() =>
                                  openLightbox(project, mediaIndex + 1)
                                }
                              >
                                <Image
                                  src={
                                    media.type === "video"
                                      ? media.thumbnail || media.url
                                      : media.url
                                  }
                                  alt={`${project.name} - Media ${
                                    mediaIndex + 2
                                  }`}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />

                                {/* Video Play Button Overlay */}
                                {media.type === "video" && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-black/60 backdrop-blur-sm rounded-full p-2 group-hover:bg-black/80 transition-all duration-300">
                                      <Play className="w-6 h-6 text-white fill-white" />
                                    </div>
                                  </div>
                                )}

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                  <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Media Counter */}
                                <div className="absolute bottom-2 right-2">
                                  <Badge className="bg-black/70 backdrop-blur-sm border-none text-white text-xs">
                                    {media.type === "video" ? "📹" : "📸"}{" "}
                                    {mediaIndex + 2}/{project.media.length}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* View All Media Button */}
                      {project.media.length > 4 && (
                        <div className="mt-3 text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openLightbox(project, 0)}
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            View All {project.media.length} Media
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Aquarium?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join hundreds of satisfied Brisbane & Gold Coast customers who
              trust our professional fish tank cleaning and maintenance
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3"
              >
                <Link href="/service">Book Your Service</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
              >
                <Link href="/contact">Call (04) 5766 3939</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div
              className={`relative max-w-4xl w-full cursor-grab ${
                isDragging ? "cursor-grabbing" : ""
              }`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {selectedMedia.media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Media Content - Swipe enabled for mobile navigation */}
              <div
                className={`relative aspect-video w-full select-none transition-all duration-300 ${
                  isTransitioning
                    ? "opacity-50 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                {selectedMedia.media[currentMediaIndex].type === "video" ? (
                  <video
                    src={selectedMedia.media[currentMediaIndex].url}
                    controls
                    autoPlay
                    muted
                    className="w-full h-full object-contain rounded-lg"
                    poster={selectedMedia.media[currentMediaIndex].thumbnail}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={selectedMedia.media[currentMediaIndex].url}
                    alt={`${selectedMedia.name} - Media ${
                      currentMediaIndex + 1
                    }`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                )}
              </div>

              {/* Media Info */}
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-b-lg">
                <h3 className="text-white font-semibold text-lg">
                  {selectedMedia.name}
                </h3>
                <p className="text-white/70">
                  {selectedMedia.media[currentMediaIndex].type === "video"
                    ? "📹 Video"
                    : "📸 Image"}{" "}
                  {currentMediaIndex + 1} of {selectedMedia.media.length}
                </p>
                {selectedMedia.media.length > 1 && (
                  <p className="text-white/50 text-xs mt-2">
                    Swipe, drag, or use arrow keys to navigate
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
