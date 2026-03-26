export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-card-image">
        <div className={`card-overlay ${event.category}`}></div>
        <div className="card-texture"></div>
        <div className="event-card-badge">
          <span className={`badge-dot ${event.category}`}></span>
          {event.category}
        </div>
      </div>
      <div className="event-card-body">
        <div className="event-card-meta">
          <span>{event.date}</span>
          <span className="meta-separator"></span>
          <span>{event.time}</span>
        </div>
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-venue">{event.venue}</p>
        <div className="event-card-footer">
          <div className="event-card-attendees">
            <div className="attendee-avatars">
              {event.avatars.map((a, i) => (
                <div key={i} className={`attendee-avatar a${(i % 3) + 1}`}>
                  {a}
                </div>
              ))}
            </div>
            <span className="attendee-count">+{event.going} going</span>
          </div>
          <span className={`event-card-price ${event.price === 'free' ? 'free' : ''}`}>
            {event.price === 'free' ? 'free' : `₹${event.price}`}
          </span>
        </div>
      </div>
    </div>
  );
}
