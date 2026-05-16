import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef     = useRef(null);
  const hamburgerRef = useRef(null);

  const closeMenu  = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  /* ── Scroll: shadow + auto-close ── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 80) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Click outside BOTH menu AND hamburger → close ── */
  useEffect(() => {
    if (!isMenuOpen) return;

    const onClickOutside = (e) => {
      const clickedMenu      = menuRef.current?.contains(e.target);
      const clickedHamburger = hamburgerRef.current?.contains(e.target);
      if (!clickedMenu && !clickedHamburger) {
        setIsMenuOpen(false);
      }
    };

    // Short delay so this listener doesn't fire on the same click that opened the menu
    const timer = setTimeout(
      () => document.addEventListener("click", onClickOutside),
      50
    );
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", onClickOutside);
    };
  }, [isMenuOpen]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  /* ── ESC key closes menu ── */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {/* Backdrop — tap anywhere outside to close */}
      {isMenuOpen && (
        <div
          className="nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <nav className={`navbar${isScrolled ? " scrolled" : ""}`}>
        <div className="nav-container">

          {/* Logo */}
          <a href="#home" className="logo" onClick={closeMenu}>
            Ashwin S
          </a>

          {/* ── Hamburger / Close button ── */}
          <button
            ref={hamburgerRef}
            className={`hamburger${isMenuOpen ? " open" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* ── Nav drawer ── */}
          <ul
            ref={menuRef}
            className={`nav-menu${isMenuOpen ? " open" : ""}`}
            id="nav-menu"
          >
            {/* Mobile-only header row inside drawer */}
            <li className="nav-menu-header">
              <span className="nav-menu-title">Menu</span>
              <button
                className="nav-close-btn"
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                <svg
                  width="20" height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </li>

            <li><a href="#home"           onClick={closeMenu}>Home</a></li>
            <li><a href="#about"          onClick={closeMenu}>About</a></li>
            <li><a href="#skills"         onClick={closeMenu}>Skills</a></li>
            <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
            <li><a href="#projects"       onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact"        onClick={closeMenu}>Contact</a></li>
          </ul>

        </div>
      </nav>

      <style>{`
        /* ── Nav drawer header row (mobile only) ── */
        .nav-menu-header {
          display: none;
          width: 100%;
          border-bottom: none !important;
          padding: 0 0 1rem 0;
          margin-bottom: 0.25rem;
          align-items: center;
          justify-content: space-between;
        }

        .nav-menu-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted, #888);
        }

        /* The ✕ close button inside the drawer */
        .nav-close-btn {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.25);
          color: var(--accent, #00d4ff);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .nav-close-btn:hover {
          background: rgba(0, 212, 255, 0.18);
          border-color: var(--accent, #00d4ff);
          transform: rotate(90deg);
        }

        /* Show header row only when drawer is open on mobile */
        @media (max-width: 992px) {
          .nav-menu-header {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;