export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <a href="/" className="navbar-brand">
        evenzo
      </a>

      <div className="navbar-links">
        <a href="/">discover</a>
        <a href="/events">my campus</a>
        <a href="#">crew</a>
        <a href="#">host an event</a>
      </div>

      <div className="navbar-actions">
        <a href="/login" className="btn-sign-in">
          sign in
        </a>
        <a href="/signup" className="btn-get-started">
          get started
        </a>
      </div>

      <button className="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
