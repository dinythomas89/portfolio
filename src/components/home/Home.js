import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./home.scss";
import Stars from "../animations/stars/Stars";
import ShootingStars from "../animations/shootingStars/ShootingStars";

const Home = () => {
  return (
    <div className="home">
      <div className="stars">
        <Stars />
        <ShootingStars />
      </div>

      <h1>Hey, I'm Diny Thomas</h1>
      <p className="para-animation">
        A Frontend focused Web Developer specializing in creating engaging user
        experiences through clean and efficient code.
      </p>
      <div className="contact-icons">
        <a
          className="icons"
          href="https://www.linkedin.com/in/diny-thomas-a148b716b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="icons"
          href="https://github.com/dinythomas89"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="icons"
          href="mailto:dinythomas89@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail />
        </a>
      </div>
      <a className="link-tag" href="#projects">
        View my works
      </a>
    </div>
  );
};

export default Home;
