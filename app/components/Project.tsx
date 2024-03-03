import React from "react";
import ProjectCard from "../basic/ProjectCard";

const Project = () => {
  const projects = [
    {
      name: "Tasky(WIP)",
      image: "/images/Tasky.png",
      alt: "tasky",
      url: "https://nextjs-tm-sepia.vercel.app/",
      description:
        "This is a project management application that allows users to create tasks by providing a title, description, and optional link, and then assign them to specific individuals. Users can also designate a status for each task. Additionally, they have the ability to update and delete tasks as needed. Currently, the project is in its early stages of development. In the future, it will incorporate role-based access control, which will enable certain roles to have the authority to delete tasks",
      tech: ["Nextjs,Postgres,TailwindCSS,Vercel"],
      email: "xyz@gmail.com",
      password: "Wxyz-1234",
    },
    {
      name: "Pricewise(WIP)",
      url: "https://pricewise-lovat.vercel.app/",
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
      image: "/images/imdb.png",
      alt: "imdb",
      description:
        "Experience the ultimate movie database in the palm of your hand with our IMDb app. Instantly access a vast collection of movies, TV shows. Browse through detailed ratings, reviews for your favorite films and TV series. Stay up-to-date with the latest entertainment news and release dates. With personalized recommendations and user-friendly navigation, our IMDb app is your go-to destination for all things cinema. Click now and dive into the world of entertainment!",
      tech: ["React.js,Styled-Components,API Integration,Netlify"],
    },
    {
      name: "Quizup",
      url: "https://jolly-galileo-e5276b.netlify.app/#/",

      image: "/images/quizup.png",
      alt: "quizup",
      description:
        " A Quiz application developed using React Router, seamlessly integrated with the Open Trivia Database API. The app offers a diverse range of categories and three levels of difficulty. Users can select their preferred category and difficulty level to access a curated set of questions. Leveraging the Open Trivia Database API ensures a comprehensive and reliable source of quiz content. With React Router facilitating smooth navigation, users can enjoy an interactive and engaging quiz experience tailored to their preferences.",
      tech: ["React.js,MaterialUI,Netlify"],
    },
    {
      name: "Weather App",
      url: "https://stupefied-wilson-c2ab53.netlify.app/",

      image: "/images/weather.png",
      alt: "sw",
      description:
        "Our streamlined weather app provides instant access to the current temperature, ensuring you're always in the know. With a clean and simple interface, easily check the current temperature wherever you are. Stay informed without any clutter, just the temperature you need at a glance. Click now for quick and easy weather updates on the go.",
      tech: ["React.js,API Integration,Netlify"],
    },
    {
      name: "Project Management App",
      url: "https://www.loom.com/share/b06dca9483ab48089773a0b833da5138/",

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
      className=" bg-[#111827] flex justify-center items-center p-4 "
    >
      <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col overflow-x-auto ">
        {projects.map((card, index) => (
          <ProjectCard
            key={index}
            url={card.url}
            name={card.name}
            description={card.description}
            tech={card.tech}
            image={card.image}
            email={card.email}
            password={card.password}
            alt={card.alt}
          />
        ))}
      </div>
    </section>
  );
};
export default Project;
