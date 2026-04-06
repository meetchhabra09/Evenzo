import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-v3 cta-section" id="cta">
      <div className="container">
        <div className="utility-card glass-card premium-promo" style={{ textAlign: 'center', padding: '80px 40px' }}>
          <div className="promo-glow"></div>
          
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <Sparkles size={16} style={{ marginRight: '8px' }} /> Get Started
          </div>
          
          <h2 className="section-title-v3">
            Ready to <span>Reimagine</span> <br /> Your College Events?
          </h2>
          
          <p className="hero-subtitle" style={{ margin: '0 auto 40px' }}>
            Join hundreds of clubs and thousands of students already using Evenzo. 
            It's free to get started.
          </p>

          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="/signup" className="btn-premium primary">
              Create Your First Event <ArrowRight size={18} />
            </a>
            <a href="/events" className="btn-premium secondary">
              Browse Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
