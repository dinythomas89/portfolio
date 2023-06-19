import { Fade } from "react-reveal";
import "./app.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Fade left>
        <About />
      </Fade>
      <Fade right>
        <Skills />
      </Fade>
      <Fade left>
        <Projects />
      </Fade>
      <Contact />
    </div>
  );
};

export default App;
