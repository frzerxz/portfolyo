import React from "react";
import "./Portfolio.css";
// Proje görselleri eklemek için assets klasörüne ekleyebilirsiniz
// import project1 from "../assets/project1.jpg";
// import project2 from "../assets/project2.jpg";

const projects = [
  {
    title: "Portfolyo Projesi",
    desc: "Kişisel portfolyo web sitesi. React ile geliştirilmiş modern ve responsive tasarım.",
    img: "https://placehold.co/600x400/5e60ce/ffffff?text=Portfolio+Project",
    link: "https://github.com/frzerxz/portfolyo.git"
  },
  {
    title: "Music Sound Projesi",
    desc: "Müzik çalma uygulaması. React kullanılarak geliştirilmiş interaktif bir web uygulaması.",
    img: "https://placehold.co/600x400/5e60ce/ffffff?text=Music+Sound+App",
    link: "https://github.com/frzerxz/music_sound.git"
  }
];

const Portfolio = () => (
  <div className="card portfolio-container">
    <h2 className="portfolio-title">Portfolyo</h2>
    <div className="portfolio-list">
      {projects.map((p, i) => (
        <a href={p.link} target="_blank" rel="noopener noreferrer" className="portfolio-item" key={i}>
          <img src={p.img} alt={p.title} className="portfolio-img" />
          <div className="portfolio-info">
            <h4 className="portfolio-item-title">{p.title}</h4>
            <p className="portfolio-item-desc">{p.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Portfolio; 