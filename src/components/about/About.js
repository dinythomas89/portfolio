import { BsEmojiWinkFill } from "react-icons/bs";
import { Zoom } from "react-reveal";
import "./about.scss";
import myImage from "../../assests/myImage.jpeg";
import AnimatedElement from "../AnimatedElement";
import Star from "../animations/star/Star";

const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <h2>Get to know me!</h2>
        <div className="about-content">
          <div>
            <AnimatedElement animationClass="para-animation">
              <p>
                I am a Frontend focused Full Stack Web Developer with a
                Bachelor's degree in computer science, living in Denmark for the
                past 9 years. With a passion for exploring, building, testing
                and maintaining simple and accessible user experiences, I look
                for ways to create tangible impact while learning throughout the
                process.
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
            <a className="link-tag" href="#contact">
              Contact
            </a>
          </div>
          <Zoom delay={1000}>
            <img src={myImage} alt="/" loading="lazy" />
          </Zoom>
        </div>
        {/* <div className="single-star1">
          <Star font=".5em" />
        </div>
        <div className="single-star2">
          <Star font=".8em" />
        </div>
        <div className="single-star3">
          <Star font="1.6em" />
        </div>
        <div className="single-star4">
          <Star font=".7em" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
