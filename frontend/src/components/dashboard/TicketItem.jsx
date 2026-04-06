import { Clock, MapPin, ChevronRight, QrCode, Calendar } from 'lucide-react';

export default function TicketItem({ registration }) {
  const { event, status } = registration;
  const date = new Date(event.date);
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();

  return (
    <div className="premium-ticket-item glass-card">
      {/* Decorative Ticket Edge (Left) */}
      <div className="ticket-perforation left"></div>
      
      {/* Date Section */}
      <div className="ticket-date-box">
        <span className="month">{month}</span>
        <span className="day">{day}</span>
        <div className="date-accent"></div>
      </div>

      {/* Main Content */}
      <div className="ticket-main-content">
        <div className="ticket-header-row">
          <h3 className="ticket-title">{event.title}</h3>
          <span className={`status-pill-small ${status}`}>{status}</span>
        </div>
        
        <div className="ticket-info-grid">
          <div className="info-item">
            <Clock size={14} className="info-icon" />
            <span>{event.time}</span>
          </div>
          <div className="info-item">
            <MapPin size={14} className="info-icon" />
            <span>{event.venue}</span>
          </div>
        </div>
      </div>

      {/* Right Section (QR/Action) */}
      <div className="ticket-action-box">
        <div className="qr-container">
          <QrCode size={24} className="qr-icon" />
          <span className="qr-label">VIP PASS</span>
        </div>
        <button className="ticket-detail-btn">
          <span>Details</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Decorative Ticket Edge (Right) */}
      <div className="ticket-perforation right"></div>
    </div>
  );
}
