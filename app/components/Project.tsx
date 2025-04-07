import React from "react";
import ProjectCard from "../basic/ProjectCard";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      name: "Task Management",
      front_git: "https://github.com/tharsh95/tm_ai_fe",
      back_git: "https://github.com/tharsh95/tm_ai_be",
      image: "/images/Tasky.png",
      alt: "tasky",
      url: "https://tm-ai-fe.vercel.app/",
      description:
        'This Task Management System features user registration and login, followed by a dynamic dashboard with columns for "To Do", "In Progress", "Completed", and "Frozen" tasks. New tasks are created in the "To Do" column by default, where users provide a title and short description. Using OpenAI LLM, the system auto-generates a detailed task description and assigns a priority level (Low, Medium, or High) based on the content. Tasks can be easily moved between columns by selecting the desired status. Users can also edit task details such as the due date and participants, or delete tasks as needed. The backend is built with FastAPI, and the frontend uses React.js for a seamless and responsive experience.',
      tech: ["FastAPI,Mongodb,Reactjs,TailwindCSS,OpenAI LLM,Vercel,DigitalOcean"],
      email: "john@example.com",
      password: "123456",
    },
    {
      name: "Code Editor",
      url: "https://code-editor-fe.tAvercel.app/",
      front_git: "https://github.com/tharsh95/pricewise",
      image: "/images/pricewise.png",
      alt: "pricewise",
      description:
        "The application begins with a job listings page where users can browse roles fetched from a backend API. Upon selecting a job, the system uses the job description to generate two relevant coding questions using OpenAI. When a user chooses a question to solve, they are taken to the code editor screen. This screen displays the question description, sample inputs/outputs, and a Monaco-based JavaScript editor. Users can write and run code using the built-in compiler to test their solutions. After submission, the code is saved to the database and analyzed by an OpenAI LLM, which returns suggestions for improving the submitted code. This end-to-end flow offers a dynamic and intelligent coding environment tailored to job-specific challenges.",
      tech: [
        "React.js,Express.js,MongoDB,OpenAI LLM,Code-compiler,TailwindCSS,DigitalOcean,Vercel",
      ],
    },
    {
      name: "Workflow Management App",
      url: "https://workflow-client-kappa.vercel.app/#/",
      front_git:
        "https://docs.google.com/document/d/1cYnCA7ol5HG6m7U4mqMCL61NTvvJgBAD29lk7KwtgcQ/edit",
      image: "/images/Project.png",
      alt: "pm",
      description:
        "The Workflow Management System offers a visual interface to create and manage linear workflows using React Flow. Each workflow begins with a Start node, followed by an API node where users can configure the HTTP method, URL, headers, and body for POST/PUT requests. An Email node is then added to specify the recipient who will receive the API response. Workflows must be saved before they can be executed, edited, or deleted, ensuring structured management. The platform includes secure authentication, role-based authorization, and a robust backend with database integration for reliable performance and data persistence.",
      tech: ["React.js,Node.js,MongoDB,TailwindCSS,ReactFlow,DigitalOcean,OpenAI LLM"],
      email: "john@example.com",
      password: "123456",
    },
    {
      name: "Weather App",
      url: "https://stupefied-wilson-c2ab53.netlify.app/",
      front_git: "https://github.com/tharsh95/weather",
      image: "/images/weather.png",
      alt: "sw",
      description:
        "Our streamlined weather app provides instant access to the current temperature, ensuring you're always in the know. With a clean and simple interface, easily check the current temperature wherever you are. Stay informed without any clutter, just the temperature you need at a glance. Click now for quick and easy weather updates on the go.",
      tech: ["React.js,API Integration,Netlify"],
    },
    {
      name: " Crypto Tracker",
      url: "https://stocks-fe-gamma.vercel.app/",
      front_git: "https://github.com/tharsh95/HarshTiwari-FrontendDeveloper",
      image: "/images/swiggato.png",
      alt: "sw",
      description:
        "The mini-website was developed using Next.js, Express.js, and Redux to track real-time cryptocurrency prices. The backend continuously polls live price data from an API, storing it in MongoDB, while the frontend retrieves and displays the latest 20 entries in a dynamically updating table. WebSockets facilitate seamless real-time updates, and Redux, along with Redux Persist, efficiently manages state, ensuring user selections are preserved in localStorage. A modal allows users to effortlessly switch between different stocks or cryptocurrencies, providing a smooth and responsive experience.",
      tech: ["Next.js,Express.js,MongoDB,Redux,WebSockets,TypeScript"],
    },
    {
      name: "IMDB",
      url: "https://656c6b994c31017383a811bb--gregarious-cactus-93797e.netlify.app/",
      front_git: "https://github.com/tharsh95/react--movieimdb",
      image: "/images/imdb.png",
      alt: "imdb",
      description:
        "Experience the ultimate movie database in the palm of your hand with our IMDb app. Instantly access a vast collection of movies, TV shows. Browse through detailed ratings, reviews for your favorite films and TV series. Stay up-to-date with the latest entertainment news and release dates. With personalized recommendations and user-friendly navigation, our IMDb app is your go-to destination for all things cinema. Click now and dive into the world of entertainment!",
      tech: ["React.js,Styled-Components,API Integration,Netlify"],
    },
    {
      name: "Quizup",
      url: "https://jolly-galileo-e5276b.netlify.app/#/",
      front_git: "https://github.com/tharsh95/quizup",
      image: "/images/quizup.png",
      alt: "quizup",
      description:
        " A Quiz application developed using React Router, seamlessly integrated with the Open Trivia Database API. The app offers a diverse range of categories and three levels of difficulty. Users can select their preferred category and difficulty level to access a curated set of questions. Leveraging the Open Trivia Database API ensures a comprehensive and reliable source of quiz content. With React Router facilitating smooth navigation, users can enjoy an interactive and engaging quiz experience tailored to their preferences.",
      tech: ["React.js,MaterialUI,Netlify"],
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
            <CardContainer key={el.front_git} className="inter-var">
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
                    href={el.front_git}
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
                    <div className="flex flex-col mt-4">
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
