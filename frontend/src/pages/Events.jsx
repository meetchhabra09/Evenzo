import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import EventCard from '../components/EventCard';
import { Search, Filter, Loader2, SlidersHorizontal } from 'lucide-react';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    { id: '', name: 'All' },
    { id: 'tech', name: 'Tech' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'sports', name: 'Sports' },
    { id: 'workshop', name: 'Workshop' },
    { id: 'seminar', name: 'Seminar' },
    { id: 'hackathon', name: 'Hackathon' }
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        let url = `http://localhost:5000/api/events?limit=20`;
        if (category) url += `&category=${category}`;
        if (search) url += `&search=${search}`;
        
        const res = await axios.get(url);
        setEvents(res.data.events || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchEvents();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, category]);

  return (
    <div className="app-layout">
      <Navbar />
      <Sidebar />
      <main className="main-feed" style={{ padding: '32px' }}>
        <header style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>Explore Campus Events</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Find your next vibe from hundreds of student-led events.</p>
        </header>

        {/* Search and Filter Bar */}
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search by title, description, or tags..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '14px 14px 14px 48px',
                color: 'var(--text-primary)',
                fontSize: '15px',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '14px',
                  fontWeight: '500',
                  background: category === cat.id ? 'var(--text-accent)' : 'var(--bg-card)',
                  color: category === cat.id ? '#fff' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0' }}>
            <Loader2 className="animate-spin" size={40} color="var(--text-accent)" />
          </div>
        ) : events.length > 0 ? (
          <div className="events-grid">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '100px 20px', 
            background: 'var(--bg-card)', 
            borderRadius: 'var(--radius-xl)',
            border: '1px dashed var(--border-medium)'
          }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>No events matches your search</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your filters or search keywords.</p>
            <button 
              onClick={() => { setSearch(''); setCategory(''); }}
              style={{ marginTop: '20px', color: 'var(--text-accent)', fontWeight: '600', textDecoration: 'underline' }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
