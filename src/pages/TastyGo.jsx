import React from "react";
import "./ProjectPage.css";

function TastyGo() {
  return (
    <section className="project" id="tastygo">
      <div className="container">
        <h2 className="project-tag">Учебный проект</h2>
        <h1 className="project-title">TastyGo — доставка еды</h1>

        <p className="project-desc">
          TastyGo — это мой первый полноценный сайт, созданный чтобы попробовать свои силы в веб-разработке.
          На проекте я изучала HTML, CSS и базовый JavaScript, работала с модальными окнами, фильтрацией контента и адаптивной версткой.
        </p>

        <div className="project-meta">
          <span className="pill">HTML5</span>
          <span className="pill">CSS3 (Flex/Grid)</span>
          <span className="pill">JavaScript</span>
        </div>

        <div className="project-gallery">
          <img src="tastygo-mockup.png" alt="TastyGo — макет сайта" />
        </div>

        <div className="project-features">
          <h3>Что реализовано в сайте:</h3>
          <ul>
            <li>Фильтры по категориям для удобного выбора блюд</li>
            <li>Модальные окна с подробной информацией о каждом блюде</li>
            <li>Популярные блюда выделены отдельным блоком</li>
            <li>Интерактивные элементы: карточки блюд и ресторанов с hover-эффектами</li>
          </ul>
          <p className="project-conclusion">
            Этот проект помог мне изучить основы веб-разработки и понять, как строить интерактивный сайт с нуля.
          </p>
        </div>

        <a className="project-back" href="/">← Вернуться к проектам</a>
      </div>
    </section>
  );
}

export default TastyGo;