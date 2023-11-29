import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className=" relative flex justify-around items-center bg-[#111827] lg:p-10 md:p-10 p-12 sm:p-12 lg:h-[70vh] md:h-[60vh] h-[85vh] sm:h-[85vh]">
      <div className="lg:w-1/2 md:w-3/4 sm:w-full">
        <h1 className="text-white text-4xl font-bold text-center ">
          About me
        </h1>
        <p className="mt-5 mb-3 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
          beatae. Ipsum tempora commodi, quos aperiam sunt quam quas delectus
          fuga iusto aliquid dolores unde maxime voluptatem ea et voluptatibus
        </p>
        <p className="mt-5 mb-3 text-gray-300">
          suscipit. Dolor minus delectus consequuntur impedit deleniti culpa est
          cupiditate asperiores, doloremque vel, expedita fugiat reprehenderit
          ratione officiis, veniam amet. Fuga ipsum dolore alias fugit, ducimus
          soluta harum architecto aliquid nostrum.
        </p>
      </div>
    </section>
  );
};

export default About;
