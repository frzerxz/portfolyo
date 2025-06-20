import React from "react";
import "./About.css";
import profileImage from "../assets/avatar.jpg";

const About = () => (
  <div className="card about-container">
    <img src={profileImage} alt="Firuze Eroğlu" className="about-profile-img" />
    <h2 className="about-title">Ben Kimim?</h2>
    <p className="about-text">
      Ben Firuze Eroğlu. Balıkesir Üniversitesi Bilgisayar Mühendisliği 3.
      sınıf öğrencisiyim. Fikirleri renk, biçim ve kodla hayata geçirmeyi seven
      tutkulu bir Front-End Geliştirici & Tasarımcıyım.
    </p>
    <p className="about-text">
      Web arayüzlerini sadece işlevsel değil, aynı zamanda estetik ve
      kullanıcı dostu kılmak en büyük önceliğim. Kod yazarken aynı zamanda
      bir şeyler tasarlıyor olmanın verdiği heyecanla çalışıyorum. Öğrenmeye,
      denemeye ve her projede kendimi biraz daha geliştirmeye açık biriyim.
    </p>
    <p className="about-text">
      Yeni teknolojilerle keşfetmeyi, detaylarda kaybolmayı ve sade ama
      etkileyici deneyimler tasarlamayı seviyorum.
    </p>
  </div>
);

export default About; 