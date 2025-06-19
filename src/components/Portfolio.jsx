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
  <div className="card">
    <h2>Portfolyo</h2>
    <div className="portfolio-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
      {projects.map((p, i) => (
        <a href={p.link} target="_blank" rel="noopener noreferrer" className="portfolio-item" key={i} style={{ 
          background: '#f7f6fd', 
          borderRadius: '1rem', 
          boxShadow: '0 2px 8px 0 #a084ee22', 
          textDecoration: 'none', 
          color: '#3a3d7c', 
          padding: '1rem',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 5px 15px 0 #a084ee33'
          }
        }}>
          <img 
            src={p.img} 
            alt={p.title} 
            style={{ 
              width: '100%', 
              height: '160px', 
              objectFit: 'cover', 
              borderRadius: '0.7rem',
              marginBottom: '1rem'
            }} 
          />
          <div>
            <h4 style={{ color: '#5e60ce', margin: '0.5rem 0 0.2rem 0', fontSize: '1.2rem' }}>{p.title}</h4>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.4' }}>{p.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Portfolio; 