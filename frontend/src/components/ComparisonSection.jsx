import { XCircle, CheckCircle2 } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section className="section-v3 comparison-section" id="compare">
      <div className="container">
        <div className="section-header-clean">
          <span className="section-label">Parity</span>
          <h2 className="section-title-v3">
            The <span>Old Way</span> vs The <span>Evenzo Way</span>
          </h2>
          <p className="hero-subtitle">
            See how Evenzo transforms the entire event experience for your
            campus.
          </p>
        </div>

        <div className="comparison-grid-v3">
          <div className="comparison-card-v3 old">
            <h3>😩 Traditional Fragmented Flow</h3>
            <div className="comparison-list-v3">
              <div className="comparison-item-v3">
                <XCircle size={20} color="#ff4d4d" />
                <span>Google Forms with manual validation cycles</span>
              </div>
              <div className="comparison-item-v3">
                <XCircle size={20} color="#ff4d4d" />
                <span>WhatsApp spam for broadcast announcements</span>
              </div>
              <div className="comparison-item-v3">
                <XCircle size={20} color="#ff4d4d" />
                <span>Error-prone manual Excel attendance tracking</span>
              </div>
              <div className="comparison-item-v3">
                <XCircle size={20} color="#ff4d4d" />
                <span>Physical posters as the only discovery source</span>
              </div>
              <div className="comparison-item-v3">
                <XCircle size={20} color="#ff4d4d" />
                <span>Lack of a formal ticketing or check-in system</span>
              </div>
              <div className="comparison-item-v3">
                <XCircle size={20} color="#ff4d4d" />
                <span>Post-event data silos with zero analytics</span>
              </div>
            </div>
          </div>

          <div className="comparison-vs-v3">VS</div>

          <div className="comparison-card-v3 new">
            <h3>🚀 The Evenzo Ecosystem</h3>
            <div className="comparison-list-v3">
              <div className="comparison-item-v3">
                <CheckCircle2 size={20} color="var(--text-accent)" />
                <span>Smart in-app registration architecture</span>
              </div>
              <div className="comparison-item-v3">
                <CheckCircle2 size={20} color="var(--text-accent)" />
                <span>Targeted, high-priority push notifications</span>
              </div>
              <div className="comparison-item-v3">
                <CheckCircle2 size={20} color="var(--text-accent)" />
                <span>Real-time dashboard with live data streams</span>
              </div>
              <div className="comparison-item-v3">
                <CheckCircle2 size={20} color="var(--text-accent)" />
                <span>Personalized discovery feed & instant filters</span>
              </div>
              <div className="comparison-item-v3">
                <CheckCircle2 size={20} color="var(--text-accent)" />
                <span>QR-based digital tickets & instant entry</span>
              </div>
              <div className="comparison-item-v3">
                <CheckCircle2 size={20} color="var(--text-accent)" />
                <span>Multi-club management & institutional insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
