import "./projects.scss";
import { myProjects } from "./myProjects";
import Project from "./Project";
import backgroundUniverse from "../../assests/universe.png"
// import jupiter from "../../assests/jupiter.png"
// import rocket from "../../assests/rocket.png"

const Projects = () => {
  return (
    <div id="projects" className="projects" style={{ backgroundImage: `url(${backgroundUniverse})` }}>
      <div>
        <h2>Some of my works</h2>
        <div>
          {myProjects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
      {/* <div className="jupiter"><img src={jupiter}/></div>
      <div className="rocket"><img src={rocket}/></div> */}
    </div>
  );
};

export default Projects;
