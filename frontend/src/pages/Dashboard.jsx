import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import StatHub from '../components/dashboard/StatHub';
import TicketItem from '../components/dashboard/TicketItem';
import { 
  Ticket, Loader2, Sparkles, ChevronRight, Plus, ArrowRight
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchMyRegistrations = async () => {
      try {
        const token = localStorage.getItem('evenzo-token');
        const res = await axios.get('http://localhost:5000/api/registrations/my', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRegistrations(res.data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyRegistrations();
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.getElementsByClassName('glass-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div className="app-layout" onMouseMove={handleMouseMove} ref={containerRef}>
      <Navbar />
      <Sidebar />
      <main className="main-feed">
        <div className="dashboard-container-simple">
          
          {/* Bento Stats Hub */}
          <StatHub registrations={registrations} user={user} />

          <div className="dash-main-grid">
            {/* Tickets Column */}
            <section className="dash-events-section">
              <div className="section-header-clean">
                <h2>Upcoming Experience</h2>
                <div className="header-line"></div>
              </div>

              {loading ? (
                <div className="dash-loader-container">
                  <Loader2 className="animate-spin" size={32} color="var(--text-accent)" />
                </div>
              ) : registrations.length > 0 ? (
                <div className="premium-ticket-stack">
                  {registrations.map((reg) => (
                    <TicketItem key={reg._id} registration={reg} />
                  ))}
                </div>
              ) : (
                <div className="simple-empty-state">
                  <div className="empty-icon-box glass-card"><Ticket size={32} /></div>
                  <h3>No active tickets</h3>
                  <p>Your calendar is empty for this month.</p>
                  <a href="/" className="explore-btn-premium">Explore Events <ArrowRight size={14} /></a>
                </div>
              )}
            </section>

            {/* Actions/Utils Column */}
            <aside className="dash-side-utils">
              <div className="utility-card glass-card">
                <div className="card-header-iconic">
                  <div className="icon-circle"><Plus size={18}/></div>
                  <h3>Quick Actions</h3>
                </div>
                <div className="action-links">
                  <button className="minimal-action-btn">Host Event <ChevronRight size={14}/></button>
                  <button className="minimal-action-btn">Browse Societies <ChevronRight size={14}/></button>
                  <button className="minimal-action-btn">Update Profile <ChevronRight size={14}/></button>
                </div>
              </div>

              <div className="utility-card glass-card premium-promo">
                <div className="promo-glow"></div>
                <Sparkles size={24} className="promo-icon" />
                <h3>Evenzo Elite</h3>
                <p>Unlock early access and premium seating at campus events.</p>
                <button className="upgrade-btn">Join Now</button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
