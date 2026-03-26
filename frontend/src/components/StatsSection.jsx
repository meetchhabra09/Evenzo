export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number purple">500+</div>
            <div className="stat-label">Events Hosted</div>
          </div>
          <div className="stat-item">
            <div className="stat-number cyan">10,000+</div>
            <div className="stat-label">Registrations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number pink">50+</div>
            <div className="stat-label">College Clubs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number green">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
