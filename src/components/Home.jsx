import React from "react";
import "./Home.css";
// Profil fotoğrafı eklemek için assets klasörüne ekleyebilirsiniz
// import profile from "../assets/profile.jpg";

const Home = () => (
  <div className="card">
    <h1>
      Merhaba!<br />
      Ben Firuze Eroğlu<br />
      <span style={{ color: "#a084ee" }}>Front-End Geliştirici & Tasarımcıyım.</span>
    </h1>
    <p style={{ marginTop: '1.5rem', fontSize: '1.15rem' }}>
      Kullanıcı odaklı, modern ve yalın arayüzler geliştiriyorum.<br />
      Aşağıdan çalışmalarımı keşfedebilirsiniz.
    </p>
  </div>
);

export default Home; 