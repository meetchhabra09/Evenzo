import { Award, Ticket, Zap, ShieldCheck } from 'lucide-react';

export default function StatHub({ registrations, user }) {
  const xp = registrations.length * 50;
  const level = Math.floor(xp / 200) + 1;
  const progress = (xp % 200) / 2;

  return (
    <div className="stat-bento-grid">
      {/* Welcome Tile */}
      <div className="stat-tile welcome-tile glass-card">
        <div className="tile-glow"></div>
        <div className="status-pill">
          <span className="pulse-dot"></span>
          <span>Active Session</span>
        </div>
        <h1 className="welcome-text">
          Ready for your next<br />
          <span className="accent-text">adventure, {user?.name?.split(' ')[0]}?</span>
        </h1>
      </div>

      {/* Experience Tile */}
      <div className="stat-tile xp-tile glass-card">
        <div className="tile-header">
          <Award size={20} className="tile-icon" />
          <span className="tile-label">Campus Elite</span>
        </div>
        <div className="xp-content">
          <div className="xp-value">{xp}</div>
          <div className="xp-meta">XP Points Earned</div>
          <div className="xp-progress-bar">
            <div className="xp-progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="xp-footer">
            <span>Level {level}</span>
            <span>Next: {Math.ceil(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Tickets Tile */}
      <div className="stat-tile tickets-tile glass-card">
        <div className="tile-header">
          <Ticket size={20} className="tile-icon" />
          <span className="tile-label">Inventory</span>
        </div>
        <div className="tickets-content">
          <div className="tickets-num">{registrations.length}</div>
          <div className="tickets-lbl">Active Tickets</div>
        </div>
        <div className="tickets-deco">
          <div className="deco-dot"></div>
          <div className="deco-dot"></div>
          <div className="deco-dot"></div>
        </div>
      </div>

      {/* Impact Tile / Quick Stat */}
      <div className="stat-tile impact-tile glass-card">
        <div className="tile-header">
          <ShieldCheck size={20} className="tile-icon" />
          <span className="tile-label">Trust Score</span>
        </div>
        <div className="impact-content">
          <div className="impact-value">98%</div>
          <div className="impact-lbl">High participation</div>
        </div>
      </div>
    </div>
  );
}
