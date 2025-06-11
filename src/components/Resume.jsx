import React from "react";

const Resume = () => (
  <div className="card">
    <h2>Özgeçmiş</h2>
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div>
        <h4 style={{ color: '#5e60ce' }}>Eğitim</h4>
        <ul style={{ color: '#3a3d7c', fontSize: '1rem', paddingLeft: '1.2rem' }}>
          <li><b>Balıkesir Üniversitesi<br />Bilgisayar Mühendisliği</b></li>
        </ul>
      </div>
      <div>
        <h4 style={{ color: '#5e60ce' }}>Deneyim</h4>
        <ul style={{ color: '#3a3d7c', fontSize: '1rem', paddingLeft: '1.2rem' }}>
          <li><b>Stajyer</b></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Resume; 