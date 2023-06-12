import "./header.scss";
import Logo from "../logo/Logo";

const Header = () => {
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
      </nav>
    </div>
  );
};

export default Header;
