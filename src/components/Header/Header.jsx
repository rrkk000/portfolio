import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#about">Обо мне</a></li>
            <li><a href="#tools">Инструменты</a></li>
            <li><a href="#portfolio">Проекты</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
