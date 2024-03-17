import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  name,
  image,
  alt,
  description,
  tech,
  email,
  password,
  url,
}: any) => {
  return (
    <div className="overflow-y-auto flex-none lg:w-1/3 md:w-screen  w-screen sm:w-full lg:h-[84vh]  bg-white shadow-md lg:m-4 md:m-4 sm:m-4 m-4 sm:p-4 rounded-lg">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <Link href={url} target="_blank">
        <Image src={image} alt={alt} width={1200} height={1200} />
      </Link>
      <h1 className="text-2xl">Description</h1>
      <h3 className="text-gray-600 mt-2 mb-4">{description}</h3>
      <div>
        <strong> Tech Stack:</strong>
        <div>{tech.map((el: any) => el)}</div>
      </div>
      {email && (
        <h1>
          <strong>Username:</strong>
          {email} <strong>Password:</strong>
          {password}
        </h1>
      )}
    </div>
  );
};

export default ProjectCard;
