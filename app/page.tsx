import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Project from "./components/Project";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Project />
      <About />
      <Connect />
      <Footer/> */}
    </main>
  );
}
