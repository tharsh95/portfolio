import Image from "next/image";
import "./Connect.css"; // Make sure to import the CSS file
import { HoverEffect } from "./ui/card-hover-effect";
const contact=[
  {
    title:"Email",
    description:"Lets get in touch!",
    link:"mailto:harsh.tiwari1995@gmail.com",
    src:"/images/email.svg"
  },
  {
    title:"LinkedIn",
    description:"Lets connect!",
    link:"https://www.linkedin.com/in/harsh-tiwari-a5531815a",
    src:"/images/link.svg"
  },
  {
    title:"Github",
    description:"Check out my repos!",
    link:"https://github.com/tharsh95",
    src:"/images/githubc.svg"
  }
]
const Connect = () => {
  return (
    <section className="flex justify-around items-center bg-black ">

      <div>
        <h1 className="text-4xl font-bold text-center p-8">Contact me</h1>
        <div className="flex lg:flex-row md:flex-col flex-col  lg:w-full md:w-full sm:flex-col w-full sm:w-full   justify-center items-center py-8">
            <HoverEffect items={contact} />
        </div>
      </div>
    </section>
  );
};

export default Connect;
