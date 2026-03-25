"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <span className="brand-icon">🎉</span>
          <span className="gradient-text">Evenzo</span>
        </a>

        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#compare">Why Evenzo</a>
          <a href="/events">Events</a>
        </div>

        <div className="navbar-actions">
          <a href="/login" className="btn btn-secondary">
            Log In
          </a>
          <a href="/signup" className="btn btn-primary">
            Get Started
          </a>
        </div>

        <button className="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
