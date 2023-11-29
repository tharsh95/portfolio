"use client";
import React from "react";
import HeroSection from "./HeroSection";
import Connect from "./Connect";
import Project from "./Project";
import About from "./About";
import Footer from "./Footer";
import Skills from "./Skills";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="bg-[#111827] ">
        <ul className="h-20 flex justify-center items-center  ">
          <div className="flex flex-1">
            <h1 className="text-white ml-10 hover:cursor-pointer" onClick={()=>scrollToSection("hero")}>HARSHWEBDEV</h1>
          </div>
          
          <li className="text-white mr-6 text-xl font-semibold">
            <a href="#" onClick={()=>scrollToSection('skills')}>Skills</a>
          </li>
          <li className="text-white mr-6 text-xl font-semibold">
            <a href="#" onClick={() => scrollToSection("project")}>
              Projects
            </a>
          </li>
          <li className="text-white mr-6 text-xl font-semibold">
            <a href="#" onClick={()=>scrollToSection('about')}>About Me</a>
          </li>
          <li className="text-white mr-6 text-xl font-semibold">
            <a href="#" onClick={() => scrollToSection("connect")}>
              Connect
            </a>
          </li>
        </ul>
      </div>
      <div id='hero'>
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills   />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="connect">
        <Connect />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
