import Link from "next/link";
import classes from "./project-item.module.scss";

import Image from "next/image";

const projects = [
  {
    name: "Restaurant Page",
    image: "/images/restaurante-projeto.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeatLorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat",
    github: "www.example.com",
    live: "www.example.com",
  },
];

const ProjectItem = () => {
  return (
    <article className={classes.project}>
      <Image
        className={classes["project-img"]}
        src={projects[0].image}
        alt={projects[0].description}
        width="0"
        height="0"
        sizes="100vw"
      ></Image>
      <h3 className={classes["project-title"]}>{projects[0].name}</h3>
      <p className={classes["project-description"]}>
        {projects[0].description}
      </p>
      <div className={classes["project-buttons"]}>
        <Link href={projects[0].github} className={classes["project-button"]}>
          Github
        </Link>
        <Link href={projects[0].live} className={classes["project-button"]}>
          Live
        </Link>
      </div>
    </article>
  );
};

export default ProjectItem;
