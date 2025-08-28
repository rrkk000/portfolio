import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";

const items = [
  { id: 1, title: "TastyGo — Доставка еды", img: "tastygo.png", link: "#/tastygo" },
  { id: 2, title: "Mindpath", img: "mindpath.png", link: "#/mindpath" },
  { id: 3, title: "Bookme", img: "bookme.png", link: "#/landing" },
];

function Portfolio() {
  const titleRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="title-block">
          <h2 className={`section-title ${active ? "active" : ""}`} ref={titleRef}>
            Проекты
          </h2>
          <p className="section-subtitle">Мои работы</p>
        </div>

        <div className="grid">
          {items.map(p => (
            <a className="card" key={p.id} href={p.link}>
              <div
                className="thumb"
                style={{ backgroundImage: `url(${p.img})` }}
              ></div>
              <div className="card-footer">{p.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;