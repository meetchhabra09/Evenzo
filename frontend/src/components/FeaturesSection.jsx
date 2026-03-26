const features = [
  {
    icon: "🗓️",
    title: "Event Creation & Management",
    desc: "Create, edit, and manage events with ease — no tech expertise required. Set up in minutes, not hours.",
    color: "purple",
  },
  {
    icon: "📋",
    title: "Smart Registrations",
    desc: "Custom registration forms with built-in validation. Replace Google Forms with a sleek, integrated experience.",
    color: "cyan",
  },
  {
    icon: "🎟️",
    title: "Digital Tickets & QR Check-in",
    desc: "Auto-generated tickets with QR codes for fast, paperless entry. No more manual attendance sheets.",
    color: "pink",
  },
  {
    icon: "📊",
    title: "Real-time Dashboard",
    desc: "Live attendance tracking, registration stats, and participant management for organizers at a glance.",
    color: "orange",
  },
  {
    icon: "🔔",
    title: "Instant Notifications",
    desc: "Email and in-app alerts for event updates, reminders, and announcements. Never miss a beat.",
    color: "green",
  },
  {
    icon: "🔍",
    title: "Event Discovery",
    desc: "Browse and filter upcoming college events by category, date, or department. Discover what's happening on campus.",
    color: "yellow",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">
            Everything You Need, <span className="gradient-text">Nothing You Don't</span>
          </h2>
          <p className="section-subtitle">
            Powerful tools for organizers. Seamless experience for students. All
            in one beautiful platform.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card glass-card" key={index}>
              <div className={`feature-icon ${feature.color}`}>
                <div className="feature-icon-bg"></div>
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
