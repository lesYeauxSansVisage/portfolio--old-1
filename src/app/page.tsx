import HeroSection from "../../components/Hero/hero";
import ProjectItem from "../../components/Projects/project-item";
import ProjectsGrid from "../../components/Projects/projects-grid";
import classes from "./page.module.scss";

import { projects } from "../../components/Projects/project-item";

const HomePage = () => {
  const slicedProjects = projects.slice(0, 4);

  return (
    <>
      <HeroSection />
      <section className={classes["about-section"]}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat
          dolor iure sit libero harum atque quo voluptas. Illum beatae aut
          facilis, nobis consequuntur eius id. Optio itaque totam deserunt.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          architecto labore ab magnam necessitatibus numquam incidunt repellat
          voluptatem obcaecati harum?
        </p>
      </section>
      <section className={classes["projects-preview-section"]}>
        <h2>Projetos</h2>

        <ProjectsGrid projects={slicedProjects} />
      </section>
    </>
  );
};

export default HomePage;
