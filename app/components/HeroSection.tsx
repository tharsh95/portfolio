// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { Spotlight } from "./ui/Spotlight";

// const HeroSection = () => {
//   let sequence = ["Harsh", 1000, "a Developer", 1000];
//   return (
//     <section className="bg-black flex xl:flex-row lg:flex-row flex-col md:flex-row sm:flex-col ">
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className="bg-black lg:w-1/2 md:w-full sm:w-full h-[70vh] flex flex-col justify-center items-center mt-6 sm:mt-6">
//         <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//           <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//             Hello, I&apos;m
//           </span>
//           <br></br>
//           <div className="text-white">
//             <TypeAnimation
//               sequence={sequence}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </div>
//         </h1>
//         <div className="mb-6 sm:mb-6">
//           <Link
//             href={`mailto:harsh.tiwari1995@gmail.com`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-300 text-white"
//           >
//             <span className="block bg-slate-300 hover:bg-slate-300 rounded-full px-5 py-2">
//               Hire Me
//             </span>
//           </Link>
//           <Link
//             href="/Pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-300 text-white"
//           >
//             <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//               Download CV
//             </span>
//           </Link>
//         </div>
//       </div>
//       <div className="bg-black lg:w-1/2 md:w-3/4 sm:w-full h-[83vh] flex lg:flex-row md:flex-col flex-col sm:flex-col justify-center items-center">
//         <Image
//           src="/images/Hero.png"
//           alt={"hero"}
//           className="rounded-lg"
//           width={500}
//           height={500}
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


const HeroSection = () => {
  return (
    <section className="bg-black">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
      <div className=" w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"></div>
      <div className="text-white h-auto md:h-[40rem] w-full flex rounded-md flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 z-10 relative w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            I am Harsh
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            
Experienced MERN stack developer proficient in Next.js and Nest.js, hailing from Bengaluru, India. Crafting seamless digital experiences to enhance your web presence. Dive into my portfolio and let&apos;s collaborate on your project!
          </p>
          <div className="mt-4">
      
            <Link href={"/Pdf"} target="_blank">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-white dark:border-slate-800"
              >
                Download CV
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
