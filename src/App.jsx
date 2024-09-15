import ParticlesComponent from "./components/ParticlesComponent";
import Navbar from "./components/Navbar.jsx";
import ContentOne from "./components/ContentOne.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import './App.css';
function App() {
  
  return(
    <>
      <ParticlesComponent id="particlesBG"/>
      <Navbar/><br /><br /><br />
      <ContentOne/><br /><br /><br />
      <About/><br /><br /><br />
      <Skills/><br /><br /><br />
      <Project/><br /><br /><br />
      <Contact/>
    </>
  );
}

export default App
