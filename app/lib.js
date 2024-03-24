import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
// import { CIcon } from '@coreui/icons-react';
import Image from "next/image";

export const mapTextToIcons = (str) => {
  switch (str) {
    case "HTML5":
      return (
        <>
          <DiHtml5 className="mr-1" />
          <span>{str}</span>
        </>
      );
    case "CSS3":
      return (
        <>
          <DiCss3 className="mr-1" />
          <span>{str}</span>
        </>
      );
    case "Javascript":
      return (
        <>
          <DiJavascript1 className="mr-1" />
          <span>{str}</span>
        </>
      );
    case "CSS3":
      return (
        <>
          <DiCss3 className="mr-1" />
          <span>{str}</span>
        </>
      );
    case "CSS3":
      return (
        <>
          <DiCss3 className="mr-1" />
          <span>{str}</span>
        </>
      );
    case "ReactJS":
      return (
        <>
          <DiReact className="mr-1" />
          <span>{str}</span>
        </>
      );
    case "Bootstrap":
      return (
        <>
          <DiBootstrap className="mr-1" />
          <span>{str}</span>
        </>
      );
    case "Typescript":
      return (
        <>
          <Image
            src="/images/ts.svg"
            alt="TS"
            width={20}
            height={20}
            className="mr-1"
          />

          <span>{str}</span>
        </>
      );
    case "Tailwind":
      return (
        <>
          <Image
            src="/images/tw.svg"
            alt="TS"
            width={20}
            height={20}
            className="mr-1"
          />

          <span>{str}</span>
        </>
      );
    case "NextJS":
      return (
        <>
          <Image
            src="/images/next.svg"
            alt="TS"
            width={20}
            height={20}
            className="mr-1"
          />

          <span>{str}</span>
        </>
      );
    case "Redux":
      return (
        <>
          <Image
            src="/images/redux.svg"
            alt="TS"
            width={20}
            height={20}
            className="mr-1"
          />

          <span>{str}</span>
        </>
      );
    case "NodeJS":
      return (
        <>
          <Image
            src="/images/node.svg"
            alt="TS"
            width={20}
            height={20}
            className="mr-1"
          />

          <span>{str}</span>
        </>
      );
    case "ExpressJS":
      return (
        <>
          <Image
            src="/images/express.svg"
            alt="TS"
            width={20}
            height={20}
            className="mr-1"
          />

          <span>{str}</span>
        </>
      );
    case "MySQL":
      return (
        <>
          <Image
            src="/images/mysql.svg"
            alt="TS"
            width={20}
            height={20}
            className="mr-1"
          />

          <span>{str}</span>
        </>
      );
    case "Sequelize":
      return (
        <>
           <Image src="/images/sequelize.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "JWT":
      return (
        <>
           <Image src="/images/jwt.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "LoopBack":
      return (
        <>
           <Image src="/images/loopback.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "Mongoose":
      return (
        <>
           <Image src="/images/mongoose.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "NestJS":
      return (
        <>
           <Image src="/images/nest.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "Netlify":
      return (
        <>
           <Image src="/images/netlify.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "Postman":
      return (
        <>
           <Image src="/images/postman.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "Git":
      return (
        <>
           <Image src="/images/git.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "Material UI":
      return (
        <>
           <Image src="/images/material.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "Github":
      return (
        <>
           <Image src="/images/github.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "VSCode":
      return (
        <>
           <Image src="/images/vscode.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    case "MongoDB":
      return (
        <>
           <Image src="/images/mongo.svg" alt="TS" width={20} height={20} className="mr-1"/> 
          <span>{str}</span>
        </>
      );
    default:
      return str;
  }
};
