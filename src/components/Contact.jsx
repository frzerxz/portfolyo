import React, { useState } from "react";
import { FaXTwitter, FaInstagram, FaGithub, FaSpotify } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="card">
      <h2>İletişim</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
        <input
          type="text"
          name="name"
          placeholder="Ad Soyad"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: '0.7rem 1rem', borderRadius: '0.7rem', border: '1px solid #a084ee', fontSize: '1rem' }}
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: '0.7rem 1rem', borderRadius: '0.7rem', border: '1px solid #a084ee', fontSize: '1rem' }}
        />
        <textarea
          name="message"
          placeholder="Mesajınız"
          value={form.message}
          onChange={handleChange}
          required
          style={{ padding: '0.7rem 1rem', borderRadius: '0.7rem', border: '1px solid #a084ee', fontSize: '1rem', resize: 'none', minHeight: 80 }}
        />
        <button type="submit" style={{ background: 'linear-gradient(90deg, #5e60ce, #a084ee)', color: '#fff', border: 'none', borderRadius: '1rem', padding: '0.7rem 1.5rem', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>Gönder</button>
        {sent && <div style={{ color: '#5e60ce', marginTop: '0.5rem' }}>Mesajınız gönderildi!</div>}
      </form>
      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '2rem', marginTop: '1.5rem', alignItems: 'center' }}>
        <a href="https://twitter.com/Snipsssx" target="_blank" rel="noopener noreferrer" title="Twitter"><FaXTwitter /></a>
        <a href="https://instagram.com/snips_fulcrum" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
        <a href="https://github.com/frzerxz" target="_blank" rel="noopener noreferrer" title="Github"><FaGithub /></a>
        <a href="https://open.spotify.com/user/tamuil0d656fzjpuge49c2nbx" target="_blank" rel="noopener noreferrer" title="Spotify"><FaSpotify /></a>
      </div>
    </div>
  );
};

export default Contact; 