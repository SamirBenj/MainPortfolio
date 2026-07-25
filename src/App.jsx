import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfolio from "./components/portfolio";
import Skills from "./components/Skills";

import myportfolio from './assets/myportfolio.png';
import covidInOne from './assets/covidInOne.jpg';
import chessaicoachwebsite from './assets/chessaicoachwebsite.png';
import ecommerceapp from './assets/ecommerceapp.png';
import ownYourEvent from './assets/ownYourEvent.png';
import movieapp from './assets/movieapp.png';
import NewsAppImg from './assets/NewsAppImg.png';
import DeliveryApp from './assets/DeliveryApp.png';
import chatappifar from './assets/chatappifar.png';
import notesapp from './assets/notesapp.png';

// Optionnel: juste pour éviter les warnings "unused imports"
console.log(
  myportfolio,
  covidInOne,
  chessaicoachwebsite,
  ecommerceapp,
  ownYourEvent,
  movieapp,
  NewsAppImg,
  DeliveryApp,
  chatappifar,
  notesapp
);

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
