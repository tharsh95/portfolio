import Image from "next/image";
import "./Connect.css"; // Make sure to import the CSS file

const Connect = () => {
  return (
    <section className="flex justify-around items-center bg-white ">
      <div>
        <h1 className="text-4xl font-bold text-center p-8">Contact me</h1>
        <div className="flex lg:flex-row md:flex-col flex-col  lg:w-full md:w-full sm:flex-col w-full sm:w-full   justify-center items-center py-8">
          <div className="lg:w-80 md:w-[80vw] w-[70vw] sm:w-[70vw] h-40 m-4  bg-white border file:border-black shadow-md transition-transform transform hover:scale-105 hover:border-animation">
            <a href={`mailto:harsh.tiwari1995@gmail.com`} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <Image
                  src="/images/email.svg"
                  alt="Email"
                  width={100}
                  height={70}
                  className="mr-2"
                />
                <h1 className="text-xl">Email</h1>
              </div>
              <h1 className=" text-xl font-bold ml-6">Lets get in touch!</h1>
            </a>
          </div>
          <div className="lg:w-80 md:w-[80vw] w-[70vw] sm:w-[70vw] h-40 m-4 bg-white border file:border-black shadow-md transition-transform transform hover:scale-105 hover:border-animation">
            <a href="https://www.linkedin.com/in/harsh-tiwari-a5531815a/" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <Image
                  src="/images/link.svg"
                  alt="Email"
                  width={100}
                  height={70}
                  className="mr-2"
                />
                <h1 className="text-xl">LinkedIn</h1>
              </div>
              <h1 className="text-xl font-bold ml-6">Lets connect!</h1>
            </a>
          </div>
          <div className="lg:w-80 md:w-[80vw] w-[70vw] sm:w-[70vw] h-40 m-4 bg-white border file:border-black shadow-md transition-transform transform hover:scale-105 hover:border-animation">
            <a href="https://github.com/tharsh95" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <Image
                  src="/images/githubc.svg"
                  alt="git"
                  width={100}
                  height={70}
                  className="mr-2"
                />
                <h1 className="text-xl">Github</h1>
              </div>
              <h1 className="text-xl font-bold ml-6">Check out my repos!</h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
