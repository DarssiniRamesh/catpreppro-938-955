import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="main-bg">
      <div className="header">
        <div className="logo" tabIndex={0}>
          {/* Could import an image, here plain text for demo per design */}
          <span aria-label="CATPrepPro Logo" style={{ fontWeight: 700, fontSize: 26 }}>CATPrepPro</span>
        </div>
        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#menu">Menu</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="main-content">
        <div className="left-col">
          <h1 tabIndex={0}>Bringing Creative Interiors into Life</h1>
          <p className="description">
            Text about custom & modern interior design. Call-to-action copy.
            Details for best-in-class projects and design trends.
          </p>
          <button className="cta-btn" tabIndex={0} aria-label="Book now">
            Book now
          </button>
          <div className="dots-row" aria-hidden="true">
            <span className="dot dot-green"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-blue"></span>
          </div>
        </div>
        <div className="right-col">
          <div className="hero-bg-blob" aria-hidden="true"></div>
          <div className="hero-illustration" aria-label="Sofa with plants and wall art">
            {/* Illustration as simple styled rectangles & circles for demo */}
            <div className="sofa"></div>
            <div className="plant plant-left"></div>
            <div className="plant plant-right"></div>
            <div className="wall-art-row">
              <div className="wall-art"></div>
              <div className="wall-art"></div>
              <div className="wall-art"></div>
              <div className="wall-art"></div>
            </div>
          </div>
          <span className="blob-accent blob-blue" aria-hidden="true"></span>
          <span className="blob-accent blob-yellow" aria-hidden="true"></span>
          <span className="blob-accent blob-green" aria-hidden="true"></span>
          <span className="accent-circle circle-1" aria-hidden="true"></span>
          <span className="accent-circle circle-2" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
