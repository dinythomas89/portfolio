import { FaGithub } from "react-icons/fa";
import Flip from "react-reveal/Flip";

const Project = ({ project }) => {
  return (
    <Flip right delay={project.delay}>
      <figure className="project-wrapper">
        <img src={project.image} alt={project.name} loading="lazy" />
        <figcaption>
          <h4>Description</h4>
          <p>{project.description}</p>
          <h4>Stacks used:</h4>
          <p>{project.stacks}</p>
          <a href={project.link} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </figcaption>
      </figure>
    </Flip>
  );
};

export default Project;
