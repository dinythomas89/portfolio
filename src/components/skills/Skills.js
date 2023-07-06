import { Fade } from "react-reveal";
import AnimatedElement from "../AnimatedElement";
import { mySkills } from "./mySkills";
import "./skills.scss";
import Stars from "../animations/stars/Stars";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div>
        <div className="stars">
          <Stars />
        </div>
        <h2>What I can do!</h2>
        <AnimatedElement animationClass="para-animation">
          <div className="p-container">
            <p>
              The main area of expertise is front end development (client side
              of the web).
            </p>
            <p>
              HTML, CSS, JS, building small and medium web applications with
              React. I have also full-stack developer experience with Nodejs and
              ASP.NET
            </p>
            <p>
              Visit my{" "}
              <a
                className="link-tag"
                href="https://www.linkedin.com/in/diny-thomas-a148b716b/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>{" "}
              for more details.
            </p>
          </div>
        </AnimatedElement>
        <div>
          {mySkills.map((skill) => (
            <Fade left delay={skill.delay}>
              <div className="skills-wrapper" key={skill.name}>
                <div className="logo">{skill.logo}</div>
                <p className="name">{skill.name}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
