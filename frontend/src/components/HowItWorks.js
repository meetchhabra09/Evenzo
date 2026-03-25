const steps = [
  {
    number: "01",
    title: "Create Your Event",
    desc: "Fill in the details — title, date, venue, category, and a custom registration form. Publish in seconds.",
    color: "purple",
  },
  {
    number: "02",
    title: "Students Discover & Register",
    desc: "Students browse events, filter by interest, and register with a single click. No Google Forms needed.",
    color: "cyan",
  },
  {
    number: "03",
    title: "Digital Tickets & QR Codes",
    desc: "Registered students get auto-generated digital tickets with unique QR codes for seamless check-in.",
    color: "pink",
  },
  {
    number: "04",
    title: "Track Everything Live",
    desc: "Monitor registrations, attendance, and engagement in real-time from your organizer dashboard.",
    color: "green",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">
            From Idea to Event in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="section-subtitle">
            Whether you're a club president or a first-time organizer, Evenzo
            makes it effortless.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-item" key={index}>
              <div className={`step-number ${step.color}`}>{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
