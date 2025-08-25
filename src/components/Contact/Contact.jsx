import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { FaTelegramPlane, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contacts() {
  const titleRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="contacts" className="section contacts">
      <div className="container">
        <div className="title-block">
          <h2
            className={`section-title ${active ? "active" : ""}`}
            ref={titleRef}
          >
            Контакты
            <span className="glow-circle"></span>
          </h2>
          <p className="section-subtitle">Свяжитесь со мной !</p>
        </div>

        <div className="contact-icons">
          <a href="https://t.me/yourusername" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://github.com/rrkk000" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="mailto:krk188@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;