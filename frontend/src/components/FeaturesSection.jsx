import { 
  Calendar, ClipboardCheck, Ticket, BarChart3, Bell, Search 
} from 'lucide-react';

const features = [
  {
    icon: <Calendar />,
    title: "Event Orchestration",
    desc: "Create and manage events with precision. Set up registrations, schedules, and details in minutes.",
  },
  {
    icon: <ClipboardCheck />,
    title: "Smart Registrations",
    desc: "Custom registration architecture with built-in validation. A sleek, integrated experience for students.",
  },
  {
    icon: <Ticket />,
    title: "Digital Ecosystem",
    desc: "Auto-generated QR tickets for paperless entry. High-speed check-in at the venue door.",
  },
  {
    icon: <BarChart3 />,
    title: "Live Analytics",
    desc: "Real-time registration tracking and participant management. Data-driven insights for organizers.",
  },
  {
    icon: <Bell />,
    title: "Pulse Notifications",
    desc: "Automated reminders and instant alerts for event updates. Keeping students in the loop.",
  },
  {
    icon: <Search />,
    title: "Elite Discovery",
    desc: "Browse and filter the campus catalog by category or department. Find your next experience.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-v3 features-section" id="features">
      <div className="container">
        <div className="section-header-clean">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title-v3">
            Everything You Need, <br /> <span>Nothing You Don't</span>
          </h2>
          <p className="hero-subtitle">
            Powerful tools for organizers. Seamless experience for students. All
            in one beautiful platform.
          </p>
        </div>

        <div className="features-grid-v3">
          {features.map((feature, index) => (
            <div className="feature-card-v3" key={index}>
              <div className="feature-icon-v3">
                {feature.icon}
              </div>
              <h3 className="feature-title-v3">{feature.title}</h3>
              <p className="feature-desc-v3">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
