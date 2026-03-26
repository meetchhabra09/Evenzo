export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="navbar-brand">
              <span className="brand-icon">🎉</span>
              <span className="gradient-text">Evenzo</span>
            </a>
            <p className="footer-brand-desc">
              The all-in-one event management platform built exclusively for
              college students and organizers. Because your events deserve better
              than a Google Form.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="footer-social-link" aria-label="GitHub">
                ⌨
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Product</h4>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="/events">Browse Events</a>
              <a href="/dashboard">Dashboard</a>
              <a href="#">Pricing</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Resources</h4>
            <div className="footer-links">
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Help Center</a>
              <a href="#">Blog</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Company</h4>
            <div className="footer-links">
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
              <a href="#">Partners</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © {new Date().getFullYear()} Evenzo. Made with ❤️ for college
            students.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
