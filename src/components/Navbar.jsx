import { useState, useEffect } from 'react';
import { IconLeaf, IconArrowRight, IconClose } from './Icons';

export function Navbar({ onOpenDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Determine active section for nav highlight
      const sections = ['hero', 'stats', 'initiatives', 'methodology', 'simulator', 'faq'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Live Initiatives', href: '#initiatives', id: 'initiatives' },
    { label: 'Methodology', href: '#methodology', id: 'methodology' },
    { label: 'Simulator', href: '#simulator', id: 'simulator' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`navbar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}
        role="banner"
      >
        <div className="container-wide">
          <div className="navbar-content">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="navbar-brand"
              aria-label="ImpactTracker Home"
            >
              <div className="brand-icon-wrapper">
                <IconLeaf className="brand-icon" />
              </div>
              <div className="brand-text">
                <span className="brand-name">Impact<span className="brand-highlight">Tracker</span></span>
                <span className="brand-subtext">Verifiable Intelligence</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="navbar-nav" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="navbar-actions">
              <a
                href="#initiatives"
                onClick={(e) => handleLinkClick(e, '#initiatives')}
                className="btn btn-outline nav-btn-secondary"
              >
                Explore Causes
              </a>
              <button
                type="button"
                onClick={onOpenDemo}
                className="btn btn-primary nav-btn-primary"
                aria-haspopup="dialog"
              >
                <span>Book a Demo</span>
                <IconArrowRight />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="mobile-menu-inner">
              <div className="mobile-menu-header">
                <span className="mobile-menu-title">Navigation</span>
                <button
                  type="button"
                  className="mobile-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <IconClose />
                </button>
              </div>

              <div className="mobile-nav-links">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`mobile-nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                  >
                    <span>{link.label}</span>
                    <IconArrowRight />
                  </a>
                ))}
              </div>

              <div className="mobile-menu-actions">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="btn btn-accent w-full"
                >
                  Book a Platform Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
