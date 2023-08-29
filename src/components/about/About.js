import { BsEmojiWinkFill } from "react-icons/bs";
import { Slide } from "react-reveal";
import "./about.scss";
import AnimatedElement from "../AnimatedElement";
import backgroundEarth from "../../assests/earth2.png";
import myImage from "../../assests/Diny.png";

const About = () => {
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundImage: `url(${backgroundEarth})` }}
    >
      <div>
        <div className="left">
          <h2>A little about me!</h2>
          <div>
            <AnimatedElement animationClass="para-animation">
              <p>
                Greetings! I'm a Frontend-focused Full Stack Web Developer with
                a Computer Science degree, and Denmark has been my home for the
                past 9 years.
              </p>
              <p>
                I love solving problems and digging into how things work. My
                journey is all about continuously improving my skills and
                finding creative solutions.
              </p>
              <p>
                When I'm not coding, you'll catch me enjoying music (I might
                even sing a bit when no one's around <BsEmojiWinkFill />) and
                diving into novels.
              </p>
              <p>
                I'm on the lookout for job opportunities that let me learn,
                grow, and contribute. If you've got an exciting opportunity that
                matches my skills, feel free to get in touch. Let's make
                something great together!
              </p>
            </AnimatedElement>
          </div>
        </div>
        <div className="right">
          <Slide top>
            <img src={myImage} alt="" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
