import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  let sequence = ["Harsh", 1000, "a Developer", 1000]
  return (
    <section className="bg-[#F3F0EF] flex xl:flex-row lg:flex-row flex-col md:flex-row sm:flex-col ">
      <div className="bg-[#F3F0EF] lg:w-1/2 md:w-full sm:w-full h-[70vh] flex flex-col justify-center items-center mt-6 sm:mt-6">
        <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello, I&apos;m

          </span>
          <br></br>
          <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className="mb-6 sm:mb-6">
          <Link
            href={`mailto:harsh.tiwari1995@gmail.com`} target="_blank" rel="noopener noreferrer"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-300 text-white"
          >
            <span className="block bg-slate-300 hover:bg-slate-300 rounded-full px-5 py-2">
              Hire Me
            </span>
          </Link>
          <Link
            href="/Pdf" target="_blank" rel="noopener noreferrer"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-300 text-white"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>
      </div> 
      <div className="bg-[#F3F0EF] lg:w-1/2 md:w-3/4 sm:w-full h-[83vh] flex lg:flex-row md:flex-col flex-col sm:flex-col justify-center items-center">
        {/* <div className="bg-red-500"> */}
        {/* <h1></h1> */}
        <Image src="/images/Hero.png" alt={"hero"} width={500} height={500} />
        
      </div>
    </section>
  );
};

export default HeroSection;
