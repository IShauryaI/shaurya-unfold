import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import GitHubStats from "./GitHubStats";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <div className="relative">
      {/* Sections */}
      <div className="relative">
        <section id="home">
          <Home />
        </section>
        
        <section id="github">
          <GitHubStats />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default MainPage;