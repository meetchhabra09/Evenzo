import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <Sparkles size={14} /> Built for college campuses
          </div>

          <h1 className="hero-title">
            Your College Events
            <br />
            Deserve <span className="serif-italic">Better</span>
          </h1>

          <p className="hero-subtitle">
            Say goodbye to messy Google Forms. Evenzo is the all-in-one platform
            to create, discover, and manage campus events — with smart
            registrations, QR tickets, and real-time insights.
          </p>

          <div className="hero-actions">
            <a href="/signup" className="btn-premium primary">
              Start for Free <ArrowRight size={18} />
            </a>
            <a href="#features" className="btn-premium secondary">
              Explore Features
            </a>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat">
              <div className="hero-stat-number">500+</div>
              <div className="hero-stat-label">Events Created</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">10K+</div>
              <div className="hero-stat-label">Students Registered</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">50+</div>
              <div className="hero-stat-label">Colleges</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
