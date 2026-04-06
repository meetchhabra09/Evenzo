import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function EventCard({ event }) {
  const categoryMap = {
    tech: 'tech',
    hackathon: 'tech',
    workshop: 'tech',
    seminar: 'tech',
    cultural: 'music',
    arts: 'music',
    music: 'music',
    sports: 'sports',
    other: 'arts',
    meetup: 'arts'
  };

  const displayCategory = categoryMap[event.category] || 'arts';
  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    if (isToday) return `tonight · ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toLowerCase()}`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toLowerCase();
  };

  return (
    <div className="event-card">
      <div className="event-card-image">
        <div className={`card-overlay ${displayCategory}`}></div>
        <div className="card-texture"></div>
        {event.image && (
          <img 
            src={event.image} 
            alt={event.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'overlay', opacity: 0.6 }} 
          />
        )}
        <div className="event-card-badge">
          <span className={`badge-dot ${displayCategory}`}></span>
          {event.category}
        </div>
      </div>
      <div className="event-card-body">
        <div className="event-card-meta">
          <div className="ticket-detail-item">
            <Calendar size={12} />
            {formatDate(event.date)}
          </div>
          <span className="meta-separator"></span>
          <div className="ticket-detail-item">
            <Clock size={12} />
            {event.time}
          </div>
        </div>
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-venue">
          <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
          {event.venue}
        </p>
        <div className="event-card-footer">
          <div className="event-card-attendees">
            <div className="attendee-avatars">
              {(event.avatars || ['A', 'B', 'C']).slice(0, 3).map((a, i) => (
                <div key={i} className={`attendee-avatar a${(i % 3) + 1}`}>
                  {typeof a === 'string' ? a[0] : 'U'}
                </div>
              ))}
            </div>
            <span className="attendee-count">
              <Users size={12} style={{ display: 'inline', marginRight: '4px' }} />
              {event.registrationCount || 0} going
            </span>
          </div>
          <span className={`event-card-price ${event.ticketPrice === 0 ? 'free' : ''}`}>
            {event.ticketPrice === 0 ? 'free' : `₹${event.ticketPrice}`}
          </span>
        </div>
      </div>
    </div>
  );
}
