import React, { useEffect } from "react";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");

    function randomGlow() {
      const count = Math.floor(Math.random() * 3) + 1; // 1-3 кружка
      circles.forEach(c => c.classList.remove("active"));

      for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * circles.length);
        circles[index].classList.add("active");
      }
    }

    const interval = setInterval(randomGlow, 1200); // каждые 1.2 сек
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-subtitle">Создание цифрового опыта</p>
        <h1 className="hero-title">Web Developer in progress...</h1>
        <div className="hero-buttons">
          <a href="#portfolio" className="hero-btn">Мои работы</a>
          <a href="#contacts" className="hero-btn-secondary">Связаться</a>
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