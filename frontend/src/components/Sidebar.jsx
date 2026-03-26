import { useState } from 'react';

const browseItems = [
  { icon: '📋', label: 'All events', active: true },
  { icon: '🔥', label: 'Trending' },
  { icon: '🕐', label: 'This week' },
  { icon: '📍', label: 'Nearby' },
];

const vibeItems = [
  { icon: '🎵', label: 'Music & parties' },
  { icon: '💻', label: 'Tech & hackathons' },
  { icon: '🎨', label: 'Arts & culture' },
  { icon: '⚽', label: 'Sports' },
];

const savedItems = [
  { icon: '❤️', label: 'Wishlist', badge: 3 },
  { icon: '✓', label: 'Going', badge: 2 },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('All events');

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-label">Browse</div>
        <nav className="sidebar-nav">
          {browseItems.map((item) => (
            <button
              key={item.label}
              className={`sidebar-item ${activeItem === item.label ? 'active' : ''}`}
              onClick={() => setActiveItem(item.label)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
              {item.active && <span className="sidebar-dot green"></span>}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Vibe</div>
        <nav className="sidebar-nav">
          {vibeItems.map((item) => (
            <button
              key={item.label}
              className={`sidebar-item ${activeItem === item.label ? 'active' : ''}`}
              onClick={() => setActiveItem(item.label)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Saved</div>
        <nav className="sidebar-nav">
          {savedItems.map((item) => (
            <button
              key={item.label}
              className={`sidebar-item ${activeItem === item.label ? 'active' : ''}`}
              onClick={() => setActiveItem(item.label)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
              {item.badge > 0 && <span className="sidebar-badge">{item.badge}</span>}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
