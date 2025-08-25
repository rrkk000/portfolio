// src/components/Tools/Tools.jsx
import React, { useEffect, useRef } from "react";
import "./Tools.css";

const stack = [
  "HTML5", "CSS3", "Sass", "JavaScript", "React", "Vite",
  "Git/GitHub", "Figma", "npm",
];

function Tools() {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add("active");
        } else {
          titleRef.current.classList.remove("active");
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="tools" className="tools">
      <div className="container">
        <h2 ref={titleRef} className="tools-small">Инструменты</h2>
        <div className="tools-header">Стек технологий</div>

        <ul className="tools-list">
          {stack.map((tech) => (
            <li key={tech} className="tool-card">{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tools;