export default function RightPanel() {
  return (
    <aside className="right-panel">
      {/* Tonight's Pick */}
      <div className="right-section">
        <div className="right-section-label">Tonight's Pick</div>
        <div className="tonights-pick">
          <div className="pick-header">
            <span className="pick-badge">
              <span className="badge-dot"></span>
              music
            </span>
            <span className="pick-tonight-label">Tonight</span>
          </div>
          <h3 className="pick-title">Bass Drop Night</h3>
          <p className="pick-details">8:00 pm · Main Auditorium · ₹149</p>
          <div className="pick-progress">
            <div className="pick-progress-bar">
              <div className="pick-progress-fill" style={{ width: '68%' }}></div>
            </div>
            <div className="pick-progress-info">
              <span>68% full</span>
              <span>200 seats</span>
            </div>
          </div>
          <div className="pick-cta">
            grab a spot →
          </div>
        </div>
      </div>

      {/* Crew Activity */}
      <div className="right-section">
        <div className="right-section-label">Crew Activity</div>
        <div className="crew-list">
          <div className="crew-item">
            <div className="crew-avatar c1">AR</div>
            <div className="crew-info">
              <div className="crew-name">Aryan R.</div>
              <div className="crew-action">going to Bass Drop Night</div>
            </div>
            <button className="crew-btn">+ join</button>
          </div>
          <div className="crew-item">
            <div className="crew-avatar c2">KS</div>
            <div className="crew-info">
              <div className="crew-name">Kriti S.</div>
              <div className="crew-action">registered for 48hr Hack</div>
            </div>
            <button className="crew-btn going">going ✓</button>
          </div>
          <div className="crew-item">
            <div className="crew-avatar c3">MP</div>
            <div className="crew-info">
              <div className="crew-name">Meera P.</div>
              <div className="crew-action">interested in Art Exhibition</div>
            </div>
            <button className="crew-btn">+ join</button>
          </div>
          <div className="crew-item">
            <div className="crew-avatar c4">VT</div>
            <div className="crew-info">
              <div className="crew-name">Varun T.</div>
              <div className="crew-action">going to Open Mic Night</div>
            </div>
            <button className="crew-btn">+ join</button>
          </div>
        </div>
      </div>

      {/* Your Vibe Right Now */}
      <div className="right-section">
        <div className="right-section-label">Your Vibe Right Now</div>
        <div className="vibe-tags">
          <button className="vibe-tag active">chill</button>
          <button className="vibe-tag">hype</button>
          <button className="vibe-tag">nerdy</button>
          <button className="vibe-tag">social</button>
          <button className="vibe-tag">artsy</button>
          <button className="vibe-tag">broke</button>
        </div>
      </div>
    </aside>
  );
}
