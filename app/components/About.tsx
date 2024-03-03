import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className=" relative flex justify-around items-center bg-[#111827] lg:p-10 md:p-10 p-12 sm:p-12">
      <div className="lg:w-1/2 md:w-3/4 sm:w-full">
        <h1 className="text-white text-4xl font-bold text-center ">About me</h1>
        <p className="mt-5 mb-3 text-gray-300 text-2xl">
          With two years of hands-on experience in fintech startups, I have
          cultivated a robust skill set as a MERN Stack Developer, proficient in
          React, Node.js, Nest.js, Next.js, MongoDB, and MySQL. Thriving in
          dynamic environments, I excel in delivering scalable solutions that
          adhere to industry standards. My current focus on AWS and
          containerization underscores my commitment to staying ahead in modern
          development, ensuring I remain innovative and well-equipped to tackle
          emerging challenges.
        </p>
        <p className="mt-5 mb-3 text-2xl text-gray-300">
          Driven by a fervent dedication to excellence, I approach every project
          with enthusiasm, whether it involves system architecture, database
          optimization, or UI design. My journey reflects adaptability and an
          unwavering pursuit of excellence, qualities I am eager to leverage in
          contributing to transformative projects within the fintech industry
          and beyond.
        </p>
      </div>
    </section>
    // <section className=" relative flex justify-around items-center bg-[#111827] lg:p-10 md:p-10 p-12 sm:p-12 lg:h-[70vh] md:h-[60vh] h-[85vh] sm:h-[85vh]">
    //   <div className="lg:w-1/2 md:w-3/4 sm:w-full">
    //     <h1 className="text-white text-4xl font-bold text-center ">About me</h1>
    //     <p className="mt-5 mb-3 text-gray-300">
    //       With two years of hands-on experience in fintech startups, I've
    //       cultivated a robust skill set as a MERN Stack Developer, proficient in
    //       React, Node.js, Nest.js, Next.js, MongoDB, and MySQL. Thriving in
    //       dynamic environments, I excel in delivering scalable solutions that
    //       adhere to industry standards. My current focus on AWS and
    //       containerization underscores my commitment to staying ahead in modern
    //       development, ensuring I remain innovative and well-equipped to tackle
    //       emerging challenges.
    //     </p>
    //     <p className="mt-5 mb-3 text-gray-300">
    //       Driven by a fervent dedication to excellence, I approach every project
    //       with enthusiasm, whether it involves system architecture, database
    //       optimization, or UI design. My journey reflects adaptability and an
    //       unwavering pursuit of excellence, qualities I'm eager to leverage in
    //       contributing to transformative projects within the fintech industry
    //       and beyond.
    //     </p>
    //   </div>
    // </section>
  );
};

export default About;
