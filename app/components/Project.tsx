import React from "react";
import ProjectCard from "../basic/ProjectCard";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      name: "Stocks App",
      url: "https://stocks-fe-sw2j.vercel.app/",
      git: "https://github.com/tharsh95/stocks_fe",
      image: "/images/Stocks.png",
      alt: "sw",
      description:"The mini-website was developed using Next.js, TypeScript, and Redux to track real-time stock and cryptocurrency prices. The backend continuously polls live price data from an API, storing it in MongoDB, while the frontend retrieves and displays the latest 20 entries in a dynamically updating table. WebSockets facilitate seamless real-time updates, and Redux, along with Redux Persist, efficiently manages state, ensuring user selections are preserved in localStorage. A modal allows users to effortlessly switch between different stocks or cryptocurrencies, providing a smooth and responsive experience.",
      tech: ["Next.js,Express.js,MongoDB,Redux,Redux Persist,WebSocket,TypeScript"],
    },
    {
      name: "Weather App",
      url: "https://weather-new-chi.vercel.app/",
      git: "https://github.com/tharsh95/weather-new",
      image: "/images/Weather.png",
      alt: "sw",
      description:"The Weather Dashboard is a sleek, modern application that provides comprehensive weather information with an elegant glassmorphic interface. It displays current conditions including temperature, weather description, humidity, wind speed, and sunrise/sunset times for any searched city, while offering a 4-day forecast at a glance. Users can toggle between Celsius and Fahrenheit, access detailed hourly forecasts by clicking on any day card, and benefit from automatic 30-second data refreshes. The app remembers the last searched location, provides clear error notifications, and features a fully responsive design that works beautifully across all devices, combining practical functionality with sophisticated aesthetics.",
      tech: ["React.js,Openweather API Integration,Vercel"],
    },
    {
      name: "Tasky",
      git: "https://github.com/tharsh95/tm_client",
      image: "/images/Tasky.png",
      alt: "tasky",
      url: "https://tm-client-two.vercel.app/#/",
      description:
        "This modern React application provides a comprehensive solution for personal task management and team collaboration. Built with React, Redux Toolkit, and TypeScript, it features a drag-and-drop Kanban board that allows users to organize tasks across three status columns (Pending, In Progress, and Done). The application also includes a social feed component where team members can share updates with images and captions, fostering team communication. User authentication is implemented with a clean login interface and password recovery functionality. The UI is crafted with Tailwind CSS for a responsive, professional design that works across all devices, while Lucide React icons provide consistent visual elements throughout the application.",
      tech: ["Reactjs,Mongodb,TailwindCSS,Redux Toolkit,Cloudinary,Vercel"],
    },
    {
      name: "Swiggato",
      url: "https://swiggato-swart.vercel.app//",
      git: "https://github.com/tharsh95/HarshTiwari-FrontendDeveloper",
      image: "/images/swiggato.png",
      alt: "sw",
      description:
        "Swiggato is a revolutionary culinary exploration platform that brings the world's cuisines to your fingertips. With an intuitive interface, users can effortlessly filter and sort through a vast array of dishes from different countries, curated to perfection. Each dish is presented on visually appealing cards, complete with ratings, ingredients, and step-by-step instructions. Dive deeper into your culinary journey by clicking on a card to reveal immersive modal windows featuring tantalizing images and video tutorials. With customizable pagination options, Swiggato ensures seamless navigation, allowing users to tailor their culinary adventures to their preferences. Whether you're a seasoned chef or a novice cook, Swiggato is your ultimate companion for discovering and mastering global flavors.",
      tech: ["React.js,Tailwindcss,,API Integration"],
    },
    {
      name: "Pricewise",
      url: "https://pricewise-lovat.vercel.app/",
      git: "https://github.com/tharsh95/pricewise",
      image: "/images/pricewise.png",
      alt: "pricewise",
      description:
        "Developed using Next.js and Bright Data's webunlocker, this e-commerce product scraping site is designed to assist users in making informed decisions. It notifies users when a product drops in price and helps competitors by alerting them when the product is out of stock, all managed through cron jobs.",
      tech: [
        "Nextjs, Bright Data, Cheerio, Nodemailer, Mongodb, TailwindCSS, Vercel",
      ],
    },
    {
      name: "IMDB",
      url: "https://656c6b994c31017383a811bb--gregarious-cactus-93797e.netlify.app/",
      git: "https://github.com/tharsh95/react--movieimdb",
      image: "/images/imdb.png",
      alt: "imdb",
      description:
        "Experience the ultimate movie database in the palm of your hand with our IMDb app. Instantly access a vast collection of movies, TV shows. Browse through detailed ratings, reviews for your favorite films and TV series. Stay up-to-date with the latest entertainment news and release dates. With personalized recommendations and user-friendly navigation, our IMDb app is your go-to destination for all things cinema. Click now and dive into the world of entertainment!",
      tech: ["React.js,Styled-Components,API Integration,Netlify"],
    },
    {
      name: "Quizup",
      url: "https://jolly-galileo-e5276b.netlify.app/#/",
      git: "https://github.com/tharsh95/quizup",
      image: "/images/quizup.png",
      alt: "quizup",
      description:
        " A Quiz application developed using React Router, seamlessly integrated with the Open Trivia Database API. The app offers a diverse range of categories and three levels of difficulty. Users can select their preferred category and difficulty level to access a curated set of questions. Leveraging the Open Trivia Database API ensures a comprehensive and reliable source of quiz content. With React Router facilitating smooth navigation, users can enjoy an interactive and engaging quiz experience tailored to their preferences.",
      tech: ["React.js,MaterialUI,Netlify"],
    },
   
    {
      name: "Project Management App",
      url: "https://www.loom.com/share/b06dca9483ab48089773a0b833da5138/",
      git: "https://docs.google.com/document/d/1cYnCA7ol5HG6m7U4mqMCL61NTvvJgBAD29lk7KwtgcQ/edit",
      image: "/images/Project.png",
      alt: "pm",
      description:
        "The project management application features distinct user roles: Manager, Dev (Developer), and Tester. Managers possess comprehensive control, including task creation, user management, and task deletion with a soft delete option. Devs and Testers can create and edit tasks but lack managerial functions. All users access a personal profile for task management and password changes. User authentication is secure, and the interface is designed for ease of use. An audit trail ensures accountability, currently tracking task deletions by managers(Not deployed yet,Learning AWS).",
      tech: ["React.js,Nest.js,MySQL,MaterialUI"],
    },
  ];
  return (
    <section
      id="projectSection"
      className=" bg-black flex justify-center items-center p-4 "
    >
      {" "}
      <div className="h-[60rem] w-full bg-black    bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        </p> */}
        <div className="flex flex-row   overflow-x-auto ">
          {/* {projects.map((card, index) => (
          <ProjectCard
          key={index}
          url={card.url}
          name={card.name}
          description={card.description}
          tech={card.tech}
          image={card.image}
          email={card.email}
          password={card.password}
          git={card.git}
          alt={card.alt}
          />
          ))} */}
          {projects.map((el) => (
            <CardContainer key={el.git} className="inter-var">
              <CardBody className=" bg-black relative hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-100 dark:text-white"
                  >
                    {el.name}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={el.git}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                    >
                      Git
                    </CardItem>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={el.url}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-white  text-black text-xs font-bold"
                    >
                      Live Link
                    </CardItem>
                  </CardItem>
                </div>
                <CardItem translateZ="100" className="w-full mt-4">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={el.url}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <Image
                      src={el.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {el.description}
                </CardItem>
                {el.tech.map((el) => (
                  <CardItem
                    key={el}
                    as="p"
                    translateZ="60"
                    className="text-white font-semibold text-sm max-w-sm mt-2"
                  >
                    {el}
                  </CardItem>
                ))}
                {el.email && (
                  <div className="flex">
                    <div className="flex items-center mt-2 ">
                      <h1 className="text-white font-extrabold">Email:</h1>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white font-semibold text-sm max-w-sm"
                      >
                        {el.email}
                      </CardItem>
                    </div>
                    <div className="flex items-center mt-2 ">
                      <h1 className="text-white font-extrabold">Password:</h1>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white font-semibold text-sm max-w-sm"
                      >
                        {el.password}
                      </CardItem>
                    </div>
                  </div>
                )}
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
