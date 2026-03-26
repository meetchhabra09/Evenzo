export default function ComparisonSection() {
  return (
    <section className="comparison section" id="compare">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Evenzo</span>
          <h2 className="section-title">
            The <span className="gradient-text">Old Way</span> vs The{" "}
            <span className="gradient-text">Evenzo Way</span>
          </h2>
          <p className="section-subtitle">
            See how Evenzo transforms the entire event experience for your
            campus.
          </p>
        </div>

        <div className="comparison-grid">
          <div className="comparison-card glass-card old">
            <div className="comparison-card-title">
              <span>😩</span> Traditional Way
            </div>
            <div className="comparison-list">
              <div className="comparison-item">
                <span className="comparison-item-icon">📄</span>
                <span>Google Forms for registration</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">📱</span>
                <span>WhatsApp spam for announcements</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">🗒️</span>
                <span>Manual Excel tracking</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">📌</span>
                <span>Physical posters for discovery</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">❌</span>
                <span>No ticket system at all</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">😶</span>
                <span>Zero event analytics</span>
              </div>
            </div>
          </div>

          <div className="comparison-vs">VS</div>

          <div className="comparison-card glass-card new">
            <div className="comparison-card-title">
              <span>🚀</span> Evenzo Way
            </div>
            <div className="comparison-list">
              <div className="comparison-item">
                <span className="comparison-item-icon">✅</span>
                <span>Smart in-app registration</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">🔔</span>
                <span>Targeted in-app notifications</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">📊</span>
                <span>Real-time dashboard & analytics</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">🔍</span>
                <span>Browse & filter events instantly</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">🎟️</span>
                <span>QR-based digital tickets</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-item-icon">🏫</span>
                <span>Multi-club support built in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
