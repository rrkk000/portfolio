import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // если мы уже на главной → плавно скроллим
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // если мы НЕ на главной → возвращаемся на главную
      navigate("/");

      // ждём немного, чтобы прогрузилась главная, и скроллим
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                Обо мне
              </a>
            </li>
            <li>
              <a href="#tools" onClick={(e) => handleNavClick(e, "#tools")}>
                Инструменты
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, "#portfolio")}>
                Проекты
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={(e) => handleNavClick(e, "#contacts")}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;