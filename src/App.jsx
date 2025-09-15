import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import CursorGlow from "./components/CursorGlow/CursorGlow";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import TastyGo from "./pages/TastyGo";
import Mindpath from "./pages/Mindpath";
import Landing from "./pages/Landing";
import TestProject from "./pages/TestProject";

function App() {
  return (
    <Router>
      <div className="App">
        <CursorGlow />
        <Header />
        <SocialSidebar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Tools />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route path="/tastygo" element={<TastyGo />} />
          <Route path="/mindpath" element={<Mindpath />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/testproject" element={<TestProject />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;