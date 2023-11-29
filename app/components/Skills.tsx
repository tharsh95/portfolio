import React, { Fragment } from "react";
import Card from "../basic/Card";
import { DiHtml5 } from "react-icons/di";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Front-end",
      src: "/images/html.png",
      skills: [
        "HTML5",
        "CSS3",
        "Javascript",
        "ReactJS",
        "Redux",
        "NextJS",
        "Bootstrap",
        "Tailwind",
        "Typescript",
        "Material UI",
      ],
    },
    {
      id: 2,
      title: "Back-end",
      src: "/images/backend.png",
      skills: [
        "NodeJS",
        "ExpressJS",
        "MySQL",
        "MongoDB",
        "Sequelize",
        "Mongoose",
        "JWT",
        "NestJS",
        "LoopBack",
      ],
    },
    {
      id: 3,
      title: "Tools",
      src: "/images/tool.png",
      skills: ["Git", "Github", "VSCode", "Netlify", "Postman"],
    },
  ];
  return (
    <div className="bg-[#F3F0EF] py-6">
      <h1 className="text-4xl font-bold text-center">My Skills</h1>
      <section className=" flex lg:flex-row justify-center items-center  md:flex-col  flex-col sm:flex-col">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-row">
            <Card
              key={skill.id}
              title={skill.title}
              src={skill.src}
              skills={skill.skills}
            />
          </div>
        ))}
      </section>
       
    </div>
  );
};

export default Skills;
