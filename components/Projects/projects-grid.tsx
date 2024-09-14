import ProjectItem from "./project-item";
import classes from "./projects-grid.module.scss";
import { project } from "./project-item";

type Props = {
  projects: project[];
};

const ProjectsGrid = ({ projects }: Props) => {
  return (
    <div className={classes.grid}>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.github} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
