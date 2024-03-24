"use client";
// import React from "react";
// import HeroSection from "./HeroSection";
// import Connect from "./Connect";
// import Project from "./Project";
// import About from "./About";
// import Footer from "./Footer";
// import Skills from "./Skills";

// const Navbar = () => {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <>
//       <div className="bg-[#111827] ">
//         <ul className="h-20 flex justify-center items-center  ">
//           <div className="flex flex-1">
//             <h1 className="text-white ml-10 hover:cursor-pointer" onClick={()=>scrollToSection("hero")}>HARSHWEBDEV</h1>
//           </div>

//           <li className="text-white mr-6 text-xl font-semibold">
//             <a href="#" onClick={()=>scrollToSection('skills')}>Skills</a>
//           </li>
//           <li className="text-white mr-6 text-xl font-semibold">
//             <a href="#" onClick={() => scrollToSection("about")}>
//               About Me
//             </a>
//           </li>
//           <li className="text-white mr-6 text-xl font-semibold">
//             <a href="#" onClick={()=>scrollToSection('project')}>Projects</a>
//           </li>
//           <li className="text-white mr-6 text-xl font-semibold">
//             <a href="#" onClick={() => scrollToSection("connect")}>
//               Connect
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div id='hero'>
//         <HeroSection />
//       </div>
//       <div id="about">
//         <About />
//       </div>
//       <div id="skills">
//         <Skills   />
//       </div>
//       <div id="project">
//         <Project />
//       </div>
//       <div id="connect">
//         <Connect />
//       </div>
//       <div id="footer">
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { act } from "react-dom/test-utils";
import { cn } from "../utils/cn";
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Connect from "./Connect";
import Footer from "./Footer";
import { BackgroundBeams } from "./ui/background-beams";


const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href="#" onClick={() => scrollToSection("hero")}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link href="#" onClick={() => scrollToSection("about")}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About Me"
            ></MenuItem>
          </Link>
          <Link href="#" onClick={() => scrollToSection("skills")}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Skills"
            ></MenuItem>
          </Link>
          <Link href="#" onClick={() => scrollToSection("project")}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Projects"
            ></MenuItem>
          </Link>
          <Link href="#" onClick={() => scrollToSection("connect")}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="connect">
          <Connect />
        </div>
        <div>
          <Footer />
        </div>
        <BackgroundBeams />
    </>
  );
};

export default Navbar;
