import { Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Custom Brand Icons (Since Lucide deprecated them)
  const TwitterIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  return (
    <footer className="section-v3 footer" id="footer">
      <div className="container">
        <div className="footer-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '64px',
          marginBottom: '80px'
        }}>
          <div className="footer-brand" style={{ gridColumn: 'span 1.5' }}>
            <h2 className="hero-title" style={{ fontSize: '32px', marginBottom: '24px', letterSpacing: '-1px' }}>
              Even<span className="serif-italic">zo</span>
            </h2>
            <p className="hero-subtitle" style={{ fontSize: '15px', opacity: 0.6 }}>
              The all-in-one event management platform built exclusively for
              college students and organizers. Because your events deserve better
              than a Google Form.
            </p>
            <div className="footer-socials" style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
              <a href="#" className="icon-circle" style={{ width: '36px', height: '36px', border: '1px solid var(--border-subtle)' }}><TwitterIcon /></a>
              <a href="#" className="icon-circle" style={{ width: '36px', height: '36px', border: '1px solid var(--border-subtle)' }}><InstagramIcon /></a>
              <a href="#" className="icon-circle" style={{ width: '36px', height: '36px', border: '1px solid var(--border-subtle)' }}><LinkedInIcon /></a>
              <a href="#" className="icon-circle" style={{ width: '36px', height: '36px', border: '1px solid var(--border-subtle)' }}><Mail size={16} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-accent)', marginBottom: '24px' }}>Product</h4>
            <div className="action-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#features" className="minimal-action-btn" style={{ padding: '8px 0', background: 'transparent', border: 'none' }}>Features <ArrowUpRight size={14} /></a>
              <a href="/events" className="minimal-action-btn" style={{ padding: '8px 0', background: 'transparent', border: 'none' }}>Browse Events <ArrowUpRight size={14} /></a>
              <a href="/dashboard" className="minimal-action-btn" style={{ padding: '8px 0', background: 'transparent', border: 'none' }}>Dashboard <ArrowUpRight size={14} /></a>
              <a href="#" className="minimal-action-btn" style={{ padding: '8px 0', background: 'transparent', border: 'none' }}>Pricing <ArrowUpRight size={14} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-accent)', marginBottom: '24px' }}>Resources</h4>
            <div className="action-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" className="minimal-action-btn" style={{ padding: '8px 0', background: 'transparent', border: 'none' }}>Documentation <ArrowUpRight size={14} /></a>
              <a href="#" className="minimal-action-btn" style={{ padding: '8px 0', background: 'transparent', border: 'none' }}>API Reference <ArrowUpRight size={14} /></a>
              <a href="#" className="minimal-action-btn" style={{ padding: '8px 0', background: 'transparent', border: 'none' }}>Help Center <ArrowUpRight size={14} /></a>
              <a href="#" className="minimal-action-btn" style={{ padding: '8px 0', background: 'transparent', border: 'none' }}>Blog <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ 
          paddingTop: '40px', 
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ fontSize: '14px', opacity: 0.5 }}>
            © {currentYear} Evenzo. Made with ❤️ for college students.
          </p>
          <div className="footer-legal" style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontSize: '14px', opacity: 0.5 }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: '14px', opacity: 0.5 }}>Terms of Service</a>
            <a href="#" style={{ fontSize: '14px', opacity: 0.5 }}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
