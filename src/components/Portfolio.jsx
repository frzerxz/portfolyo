import React from "react";
import "./Portfolio.css";
// Proje görselleri eklemek için assets klasörüne ekleyebilirsiniz
// import project1 from "../assets/project1.jpg";
// import project2 from "../assets/project2.jpg";

const projects = [
  {
    title: "Web Tasarım Projesi",
    desc: "Modern ve responsive bir web sitesi.",
    img: "https://placehold.co/220x120",
    link: "#"
  },
  {
    title: "UI/UX Çalışması",
    desc: "Kullanıcı deneyimi iyileştirme projesi.",
    img: "https://placehold.co/220x120",
    link: "#"
  },
  {
    title: "E-Ticaret Uygulaması",
    desc: "Online alışveriş platformu.",
    img: "https://placehold.co/220x120",
    link: "#"
  },
  {
    title: "Kişisel Blog",
    desc: "Fikirlerin paylaşıldığı blog platformu.",
    img: "https://placehold.co/220x120",
    link: "#"
  }
];

const Portfolio = () => (
  <div className="card">
    <h2>Portfolyo</h2>
    <div className="portfolio-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
      {projects.map((p, i) => (
        <a href={p.link} target="_blank" rel="noopener noreferrer" className="portfolio-item" key={i} style={{ background: '#f7f6fd', borderRadius: '1rem', boxShadow: '0 2px 8px 0 #a084ee22', textDecoration: 'none', color: '#3a3d7c', padding: '1rem' }}>
          <img src={p.img} alt={p.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '0.7rem' }} />
          <div>
            <h4 style={{ color: '#5e60ce', margin: '0.5rem 0 0.2rem 0' }}>{p.title}</h4>
            <p style={{ color: '#888', fontSize: '0.95rem' }}>{p.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Portfolio; 