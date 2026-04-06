import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FilterBar from "../components/FilterBar";
import EventCard from "../components/EventCard";
import BottomBar from "../components/BottomBar";
import LandingPage from "./LandingPage";
import { Loader2, Calendar as CalendarIcon, Sparkles, MapPin } from "lucide-react";

export default function Home() {
  const { user, loading: authLoading } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (user) {
      const fetchEvents = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/events");
          setEvents(res.data.events || []);
        } catch (error) {
          console.error("Error fetching events:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchEvents();
    } else {
      setLoading(false);
    }
  }, [user]);

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

  if (authLoading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-main)' }}>
        <div className="glass-card" style={{ padding: '40px', borderRadius: '50%' }}>
          <Loader2 className="animate-spin" size={40} color="var(--text-accent)" />
        </div>
      </div>
    );
  }

  if (!user) {
    return <LandingPage />;
  }

  function getCurrentDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const now = new Date();
    return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
  }

  return (
    <div className="app-layout discover-layout" onMouseMove={handleMouseMove} ref={containerRef}>
      <Navbar />
      <Sidebar />
      <main className="main-feed">
        <div className="feed-inner" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* ---- BENTO DISCOVERY SECTION ---- */}
          <section className="discover-bento">
            {/* SEARCH TILE */}
            <div className="bento-tile search">
              <h1>Find your<br /><span>next vibe.</span></h1>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder="Search events, societies, or moods..." 
                  className="bento-search-input"
                />
              </div>
            </div>

            {/* FEATURED TILE */}
            <div className="bento-tile featured">
              <img src="https://images.unsplash.com/photo-1540039155732-d68a1839e4a3?q=80&w=2000&auto=format&fit=crop" className="bento-featured-img" alt="Neon Nights" />
              <div className="bento-featured-content">
                <span className="bento-label">Featured</span>
                <h3 className="bento-title">Neon Nights Showcase</h3>
              </div>
            </div>

            {/* CATEGORIES TILE */}
            <div className="bento-tile categories">
              <span className="bento-label" style={{ color: 'rgba(56, 189, 248, 0.8)' }}>Explore</span>
              <h3 className="bento-title" style={{ fontSize: '18px' }}>Societies & Groups</h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Join 20+ active student communities.</p>
            </div>

            {/* LIVE TILE */}
            <div className="bento-tile live">
              <span className="bento-label" style={{ color: 'rgba(244, 63, 94, 0.8)' }}>Live Now</span>
              <h3 className="bento-title" style={{ fontSize: '18px' }}>Open Mic @ Cafe</h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Happening right now in Sector 7.</p>
            </div>

            {/* VIBES TILE */}
            <div className="bento-tile vibes">
              <span className="bento-label" style={{ color: 'rgba(168, 85, 247, 0.8)' }}>Your Vibe</span>
              <h3 className="bento-title" style={{ fontSize: '18px' }}>Chill & Acoustic</h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Curated for your Sunday evening.</p>
            </div>
          </section>

          <header style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '500', letterSpacing: '-0.5px' }}>
              Explore <span style={{ color: 'var(--text-accent)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>all events</span>
            </h2>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{events.length} results found</div>
          </header>

          <FilterBar className="bento-strip" />

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
              <Loader2 className="animate-spin" size={36} color="var(--text-accent)" />
            </div>
          ) : events.length > 0 ? (
            <div className="events-grid">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <div className="dashboard-empty" style={{ marginTop: '16px' }}>
              <CalendarIcon size={44} style={{ color: 'var(--text-muted)', marginBottom: '16px', display: 'block', margin: '0 auto 16px' }} />
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '18px' }}>No events found</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Check back later or host your own event!</p>
            </div>
          )}
        </div>
      </main>
      <BottomBar />
    </div>
  );
}
