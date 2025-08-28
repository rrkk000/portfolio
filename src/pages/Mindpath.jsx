import React from "react";
import "./ProjectPage.css";

function Mindpath() {
  return (
    <section className="project" id="mindpath">
      <div className="container">
        <span className="project-tag">Учебный проект</span>
        <h1 className="project-title">Mindpath</h1>

        <p className="project-desc">
          MindPath — это мой второй учебный проект, простой и удобный ToDo-лист. 
          На этом сайте можно создавать задачи, назначать сроки, отмечать приоритеты и отмечать выполненные дела.
        </p>

        <div className="project-meta">
          <span className="pill">React</span>
          <span className="pill">CSS3</span>
          <span className="pill">HTML5</span>
          <span className="pill">LocalStorage</span>
          <span className="pill">JS</span>
        </div>

        <div className="project-gallery two-screens">
          <div className="screen">
            <img src="/mindpath-overview.png" alt="Mindpath — общий вид сайта" />
            <p className="screen-desc">Общий вид сайта</p>
          </div>
          <div className="screen">
            <img src="/mindpath-panel.png" alt="Mindpath — панель создания задач" />
            <p className="screen-desc">Панель создания задач</p>
          </div>
        </div>

  
        <div className="project-features">
          <h3>Фичи проекта:</h3>
          <ul>
            <li>Создание, редактирование и удаление задач</li>
            <li>Сортировка задач по приоритету и дате</li>
            <li>Сохранение данных в localStorage</li>
            <li>Адаптивный дизайн для мобильных устройств</li>
          </ul>
        </div>

        <p className="project-conclusion">
          Второй мой учебный проект, где я закрепила навыки работы с React, состояниями, компонентами и localStorage.
        </p>

        <a className="project-back" href="/#projects">← Вернуться к проектам</a>
      </div>
    </section>
  );
}

export default Mindpath;