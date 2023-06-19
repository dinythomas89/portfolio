import { BsEmojiWinkFill } from "react-icons/bs";
import "./about.scss";
import AnimatedElement from "../AnimatedElement";
import myImage from "../../assests/myImage.jpeg";
import ClickHere from "../animations/clickHere/ClickHere";

const About = () => {
  return (
    <div className="about" id="about">
      <h3>Get to know me!</h3>
      <div>
        <div className="click-here-wrapper">
          <ClickHere />
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={myImage} alt="" />
          </div>
          <div className="details">
            <AnimatedElement animationClass="para-animation">
              <p>
                I am a Frontend focused Full Stack Web Developer with a
                Bachelor's degree in computer science, living in Denmark for the
                past 9 years. I enjoy finding solutions to problems, taking deep
                dives into the how/why things work, and continuously improving
                my skills.
              </p>
              <p>
                In my free time, I enjoy music (great singer too, if no one is
                around{" "}
                <span>
                  <BsEmojiWinkFill />
                </span>
                ) and novels.
              </p>
              <p>
                I'm open to job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
            </AnimatedElement>
          </div>
        </div>
        {/* <div className="earth"></div> */}
      </div>
    </div>
  );
};

export default About;
