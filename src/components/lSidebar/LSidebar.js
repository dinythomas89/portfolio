import { AiFillGithub } from "react-icons/ai";
import "./lSidebar.scss"
import Logo from "../logo/Logo";

const LSidebar = () => {
  return (
    <div className="lSidebar">
      <Logo/>
      <a
        href="https://github.com/dinythomas89"
        target="_blank"
        className="github-icon"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
    </div>
  );
};

export default LSidebar;
