import React, { useState, useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const texts = [
    "Меня зовут Кристина ^ω~",
    "Я начинающий веб-разработчик"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const titleRef = useRef(null); 

  useEffect(() => {
    if (index === texts.length) return;

    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add("active");
        } else {
          titleRef.current.classList.remove("active");
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 ref={titleRef} className="about-title">Обо мне</h2>

        <div className="about-typing">
          <h3>
            {texts[index].substring(0, subIndex)}
            <span style={{ borderRight: blink ? "3px solid #63e3ff" : "none" }}></span>
          </h3>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Учусь создавать сайты с нуля. Сейчас пробую себя в React и других современных
              технологиях.
            </p>
            <p>
              Моя цель — стать фулстек-разработчиком и работать над интересными
              проектами, развиваясь каждый день.
            </p>
            <p>
              У меня уже есть первые проекты, и я стараюсь делать каждый из них
              лучше предыдущего. Люблю учиться новому и пробовать разные
              подходы, чтобы находить свои сильные стороны !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;