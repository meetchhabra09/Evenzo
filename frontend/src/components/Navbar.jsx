import { Moon, Sun, User, LogOut, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%' }}>
        <Link to="/" className="navbar-brand" style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-1px' }}>
          Even<span className="serif-italic">zo</span>
        </Link>

        <div className="navbar-links" style={{ display: 'flex', gap: '32px' }}>
          <Link to="/" className="nav-link-v3">Discover</Link>
          <Link to="/events" className="nav-link-v3">Campus Hub</Link>
          <a href="#" className="nav-link-v3">The Crew</a>
          <a href="#" className="nav-link-v3" style={{ color: 'var(--text-accent)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} /> Host Event
          </a>
        </div>

        <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={toggleTheme} 
            className="icon-circle" 
            aria-label="Toggle theme"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {!user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link to="/login" className="btn-premium secondary" style={{ padding: '10px 20px', fontSize: '14px', borderRadius: '12px' }}>
                Sign In
              </Link>
              <Link to="/signup" className="btn-premium primary" style={{ padding: '10px 20px', fontSize: '14px', borderRadius: '12px' }}>
                Get Started
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link to="/dashboard" className="navbar-user-tag" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '6px 12px 6px 6px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '50px'
              }}>
                <div style={{ 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '50%', 
                  background: 'var(--text-accent)', 
                  color: '#000',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <User size={14} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>{user.name.split(' ')[0]}</span>
              </Link>
              <button 
                onClick={handleLogout}
                className="icon-circle"
                style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
              >
                <LogOut size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
