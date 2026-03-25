export default function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg"></div>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to <span className="gradient-text">Reimagine</span> Your
            College Events?
          </h2>
          <p className="cta-subtitle">
            Join hundreds of clubs and thousands of students already using
            Evenzo. It's free to get started.
          </p>
          <div className="hero-actions">
            <a href="/signup" className="btn btn-primary btn-lg">
              🎉 Create Your First Event
            </a>
            <a href="/events" className="btn btn-secondary btn-lg">
              Browse Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
