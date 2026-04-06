import { 
  Calendar, 
  Compass, 
  TrendingUp, 
  Clock, 
  MapPin, 
  Music, 
  Cpu, 
  Palette, 
  Trophy, 
  Heart, 
  CheckCircle2,
  LayoutDashboard
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-label">Main</div>
        <nav className="sidebar-nav">
          <Link to="/" className={`sidebar-item ${isActive('/') ? 'active' : ''}`}>
            <Compass size={18} className="sidebar-icon" />
            <span>Discover</span>
          </Link>
          {user && (
            <Link to="/dashboard" className={`sidebar-item ${isActive('/dashboard') ? 'active' : ''}`}>
              <LayoutDashboard size={18} className="sidebar-icon" />
              <span>Dashboard</span>
            </Link>
          )}
          <Link to="/events" className={`sidebar-item ${isActive('/events') ? 'active' : ''}`}>
            <Calendar size={18} className="sidebar-icon" />
            <span>All Events</span>
          </Link>
          <Link to="/events?filter=trending" className="sidebar-item">
            <TrendingUp size={18} className="sidebar-icon" />
            <span>Trending</span>
          </Link>
        </nav>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Categories</div>
        <nav className="sidebar-nav">
          <Link to="/events?category=cultural" className="sidebar-item">
            <Music size={18} className="sidebar-icon" />
            <span>Music & Parties</span>
          </Link>
          <Link to="/events?category=tech" className="sidebar-item">
            <Cpu size={18} className="sidebar-icon" />
            <span>Tech & Hackathons</span>
          </Link>
          <Link to="/events?category=arts" className="sidebar-item">
            <Palette size={18} className="sidebar-icon" />
            <span>Arts & Culture</span>
          </Link>
          <Link to="/events?category=sports" className="sidebar-item">
            <Trophy size={18} className="sidebar-icon" />
            <span>Sports</span>
          </Link>
        </nav>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Your Activity</div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-item">
            <Heart size={18} className="sidebar-icon" />
            <span>Wishlist</span>
          </Link>
          <Link to="/dashboard" className="sidebar-item">
            <CheckCircle2 size={18} className="sidebar-icon" />
            <span>Going</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
