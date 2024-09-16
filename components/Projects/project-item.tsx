import classes from "./project-item.module.scss";

import Image from "next/image";

export const projects: project[] = [
  {
    name: "Restaurant Page",
    image: "/images/restaurante-projeto.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat",
    github: "https://www.example.com",
    live: "https://www.example.com",
  },
  {
    name: "Restaurant Page",
    image: "/images/restaurante-projeto.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat",
    github: "https://www.example.com",
    live: "https://www.example.com",
  },
  {
    name: "Restaurant Page",
    image: "/images/restaurante-projeto.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat",
    github: "https://www.example.com",
    live: "https://www.example.com",
  },
  {
    name: "Restaurant Page",
    image: "/images/restaurante-projeto.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat",
    github: "https://www.example.com",
    live: "https://www.example.com",
  },
  {
    name: "Restaurant Page",
    image: "/images/restaurante-projeto.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat",
    github: "https://www.example.com",
    live: "https://www.example.com",
  },
  {
    name: "Restaurant Page",
    image: "/images/restaurante-projeto.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat",
    github: "https://www.example.com",
    live: "https://www.example.com",
  },
];

type Props = {
  project: project;
};

export type project = {
  name: string;
  image: string;
  description: string;
  github: string;
  live: string;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <article className={classes.project}>
      <Image
        className={classes["project-img"]}
        src={project.image}
        alt={project.description}
        width="0"
        height="0"
        sizes="100vw"
      ></Image>
      <h3 className={classes["project-title"]}>{project.name}</h3>
      <p className={`${classes["project-description"]} no-scrollbar`}>
        {project.description}
      </p>
      <div className={classes["project-buttons"]}>
        <a
          href={project.github}
          target="_blank"
          className={classes["project-button"]}
          rel="noreferrer noopener"
        >
          Github
        </a>
        <a
          href={project.live}
          target="_blank"
          className={classes["project-button"]}
          rel="noreferrer noopener"
        >
          Live
        </a>
      </div>
    </article>
  );
};

export default ProjectItem;
