import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className=" relative flex justify-around items-center bg-[#111827] lg:p-10 md:p-10 p-12 sm:p-12 lg:h-[70vh] md:h-[60vh] h-[85vh] sm:h-[85vh]">
      <div className="lg:w-1/2 md:w-3/4 sm:w-full">
        <h1 className="text-white text-4xl font-bold text-center ">About me</h1>
        <p className="mt-5 mb-3 text-gray-300">
          As an experienced MERN Stack Developer with two years in the fintech
          startup arena, I possess a comprehensive skill set spanning React,
          Node.js, Nest.js, Next.js, MongoDB, and MySQL. Thriving in fast-paced
          environments, I have honed my abilities to deliver robust, scalable
          solutions that meet industry standards.
        </p>
        <p className="mt-5 mb-3 text-gray-300">
          My commitment to growth sees me currently delving into AWS and
          containerization, recognizing their pivotal roles in modern
          development. This pursuit of knowledge ensures I remain at the
          forefront of innovation, ready to tackle new challenges head-on.
        </p>
        <p className="mt-5 mb-3 text-gray-300">
          Driven by a passion for excellence, I approach each project with
          enthusiasm, whether it is architecting systems, optimizing databases,
          or crafting user interfaces. My journey epitomizes adaptability and a
          relentless pursuit of excellence, and I eagerly anticipate leveraging
          my skills to contribute to transformative projects in fintech and
          beyond.
        </p>
      </div>
    </section>
  );
};

export default About;
