import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./header.scss";
import Logo from "../logo/Logo";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="header">
      <nav>
        <a href="/">
          <Logo />
        </a>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div onClick={() => setMenu(true)} className="menu">
          <AiOutlineMenu />
        </div>
      </nav>
      {menu ? (
        <div className="sidebar-menu">
          <div onClick={toggleMenu} className="close-button">
            <AiOutlineClose />
          </div>
          <ul>
            <li>
              <a onClick={() => setMenu(false)} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={() => setMenu(false)} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => setMenu(false)} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => setMenu(false)} href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/diny-thomas-a148b716b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/dinythomas89"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:dinythomas89@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail />
            </a>
          </div>
          <div className="resume">Resume</div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Header;
