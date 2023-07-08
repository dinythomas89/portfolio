import "./projects.scss";
import { myProjects } from "./myProjects";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div>
        <h2>Some of my works</h2>
        <div>
          {myProjects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
