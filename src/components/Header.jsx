import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="#">
            <span className="logo-icon">⚖️</span>
            <span className="logo-text">مَحكم</span>
          </a>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>الرئيسية</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>عن الشركة</a></li>
            <li><a href="#specializations" onClick={() => setIsMenuOpen(false)}>التخصصات القانونية</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>الخدمات والحلول</a></li>
            <li><a href="#objectives" onClick={() => setIsMenuOpen(false)}>أهدافنا</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-outline cta-btn">طلب استشارة</a>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
