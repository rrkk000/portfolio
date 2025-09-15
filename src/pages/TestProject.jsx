import React from "react";
import "./ProjectPage.css";

function TestProject() {
  return (
    <section className="project" id="testproject">
      <div className="container">
        <span className="project-tag">Учебный проект</span>
        <h1 className="project-title">Тестовое-учебное задание</h1>

        <p className="project-desc">
          Этот проект был создан в качестве тестового задания для практики веб-разработки.
          Целью было реализовать интерактивный интерфейс с использованием React, CSS Grid и адаптивной версткой.
        </p>

        <div className="project-meta">
          <span className="pill">React</span>
          <span className="pill">CSS</span>
          <span className="pill">HTML</span>
          <span className="pill">JS</span>
          <span className="pill">localStorage</span>
          <span className="pill">Vite</span>
        </div>

        <div className="project-gallery">
          <div className="screen">
            <img src="testproject_p.png" />
            <p className="screen-desc">Десктопная версия </p>
          </div>
          <div className="screen">
            <img src="testproject_phone.png" />
            <p className="screen-desc">Мобильная версия</p>
          </div>
        </div>

        <div className="project-features">
          <h3>Фичи проекта:</h3>
          <ul>
            <li>Фильтрация по материалу и сортировка по цене </li>
            <li>Адаптивная верстка</li>
            <li>Сохранение состояния при перезагрузке (localStorage)</li>
            <li>Использование компонентного подхода React</li>
          </ul>
        </div>

        <p className="project-conclusion">
          В этом проекте я закрепила навыки работы с компонентами, стилями и
          React, а также поняла важность адаптивной верстки.
        </p>

        <a className="project-back" href="/">← Вернуться к проектам</a>
      </div>
    </section>
  );
}

export default TestProject;