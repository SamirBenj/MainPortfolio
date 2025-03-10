import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfolio from "./components/portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
