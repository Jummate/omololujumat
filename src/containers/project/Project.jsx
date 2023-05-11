import "./Project.css";
import { BigHeading } from "../../components";
import { projects } from "../../utils/project-data";
import { ProjectItem } from "../../components";

export const Project = () => {
  return (
    <section
      className="Project__container"
      id="projects"
    >
      <BigHeading text="Things I've built" />

      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          project={project}
        />
      ))}
    </section>
  );
};
