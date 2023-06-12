import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ol class="progress-bar">
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>About</span>
        </li>
        <li>
          <span>Skills</span>
        </li>
        <li class="is-active">
          <span>Projects</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
