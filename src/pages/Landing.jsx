import React from "react";
import "./ProjectPage.css";

function BookMe() {
  return (
    <section className="project">
      <div className="container">
        <span className="project-tag">Учебный проект</span>
        <h1 className="project-title">BookMe.com</h1>

        <p className="project-desc">
          BookMe — это веб-приложение для бронирования событий, встреч или услуг. 
          На этом проекте я отрабатывала навыки работы с современными интерфейсами и версткой. 
          Сайт полностью создавался по макету в Figma, что помогло
          мне научиться переносить дизайн в код точно и аккуратно.
        </p>

        <div className="project-meta">
          <span className="pill">HTML5</span>
          <span className="pill">CSS3 (Grid/Flex)</span>
          <span className="pill">JS</span>
          <span className="pill">React</span>
          <span className="pill">Figma</span>
        </div>

        <div className="project-gallery">
          <img src="/bookme-maket.png" alt="BookMe — макет Figma" />
        </div>

        <div className="project-features">
          <h3>Основные фичи сайта:</h3>
          <ul>
            <li>Бронирование событий и услуг онлайн</li>
            <li>Календарь для выбора дат</li>
            <li>Интерактивные формы для ввода данных</li>
            <li>Адаптивный дизайн для любых экранов</li>
            <li>Интеграция с макетом из Figma для точного отображения дизайна</li>
          </ul>
          <div className="project-conclusion">
            Это мой третий учебный проект, где я полностью перенесла макет из Figma в работающий веб-сайт с React.
          </div>
        </div>

        <a className="project-back" href="/">← Вернуться к проектам</a>
      </div>
    </section>
  );
}

export default BookMe;