export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Built for college campuses
          </div>

          <h1 className="hero-title">
            Your College Events
            <br />
            Deserve <span className="gradient-text">Better</span>
          </h1>

          <p className="hero-subtitle">
            Say goodbye to messy Google Forms. Evenzo is the all-in-one platform
            to create, discover, and manage campus events — with smart
            registrations, QR tickets, and real-time insights.
          </p>

          <div className="hero-actions">
            <a href="/signup" className="btn btn-primary btn-lg">
              🚀 Start for Free
            </a>
            <a href="#features" className="btn btn-secondary btn-lg">
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
