import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");

    function randomGlow() {
      const count = Math.floor(Math.random() * 3) + 1;
      circles.forEach(c => c.classList.remove("active"));
      for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * circles.length);
        circles[index].classList.add("active");
      }
    }

    const interval = setInterval(randomGlow, 1200);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-subtitle">Создание цифрового опыта</p>
        <h1 className="hero-title">Web Developer in progress...</h1>
        <div className="hero-buttons">
          <button className="hero-btn" onClick={() => handleScroll("portfolio")}>
            Мои работы
          </button>
          <button className="hero-btn-secondary" onClick={() => handleScroll("contacts")}>
            Связаться
          </button>
        </div>
      </div>
      <div className="hero-right">
        <div className="circle big-circle"></div>
        <div className="circle small-circle"></div>
        <div className="circle small-circle2"></div>
        <div className="circle top-circle"></div>
      </div>

      <div className="scroll-down">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;