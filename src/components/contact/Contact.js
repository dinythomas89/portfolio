import { FaLinkedinIn } from "react-icons/fa";
import "./contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import AnimatedElement from "../AnimatedElement";
import { Rotate } from "react-reveal";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div>
        <h2>Contact me</h2>
        <div className="contact-wrapper">
          <Rotate left duration={2000}>
            <div>
              <div className="map"></div>
            </div>
          </Rotate>
          <div className="contact-details">
            <AnimatedElement animationClass="para-animation">
              <p>
                I will love to hear from you, whether it's a project, job
                opportunity or just a chat.
              </p>
              <p>Feel free to contact me.</p>
            </AnimatedElement>
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
                href="mailto:dinythomas89@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
