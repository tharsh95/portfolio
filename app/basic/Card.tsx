import Image from "next/image";
import { DiHtml5 } from "react-icons/di";
import { mapTextToIcons } from "../lib";
import { BackgroundGradient } from "../components/ui/background-gradient";
type Prop = {
  title: string;
  src: string;
  skills: string[];
};

const Card = ({ title, src, skills }: Prop) => {
  return (
    // <div className="lg:w-[28vw] lg:h-[60vh] md:h-[58vh] h-[50vh] sm:h-[50vh] md:w-[85vw] w-[90vw] sm:w-[90vw] lg:m-6 md:m-4 m-3 sm:m-3 ">
    //   <div className=" lg:h-[55vh] md:h-[53vh] h-[45vh] sm:h-[45vh] mt-8 bg-white rounded-xl shadow-md overflow-auto border file:border-black">
    //     <div className="flex  justify-center items-start">
    //       <Image
    //         className="object-cover "
    //         src={src}
    //         alt="Card"
    //         width={100}
    //         height={100}
    //       />
    //     </div>
    //     <div className="">
    //       <div className="font-bold text-xl mb-2 text-center">{title}</div>
    //       <div className="border-t border-gray-300 my-4"></div>
    //     </div>
    //     <div className="px-6 py-4 flex flex-wrap">
    //       {skills.map((el) => (
    //         <span
    //           key={el}
    //           className=" m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 flex items-center"
    //         >
    //           {mapTextToIcons(el)}
    //         </span>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <BackgroundGradient className="rounded-[22px] h-[25rem]  flex flex-col items-center max-w-sm p-4 sm:p-10 bg-zinc-900">
      <Image
        src={src}
        alt="jordans"
        height="100"
        width="100"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        {title}
      </p>

      <div className=" flex flex-wrap">
        {skills.map((el) => (
          <span
            key={el}
            className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 flex items-center"
          >
            {mapTextToIcons(el)}
          </span>
        ))}
      </div>
    </BackgroundGradient>
  );
};

export default Card;
