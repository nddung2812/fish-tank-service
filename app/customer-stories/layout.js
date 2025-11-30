import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RealAquariumProjectLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
