import React from "react";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CursorGlow/>
      <Header/>
      <Hero/>
      <SocialSidebar/>
      <About/>
      <Tools/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

