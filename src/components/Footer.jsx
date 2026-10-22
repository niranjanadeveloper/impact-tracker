import { useState } from 'react';
import { IconLeaf, IconArrowRight, IconCheck, IconShieldCheck } from './Icons';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
    }, 500);
  };

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="container">
        {/* Top Newsletter / Dispatch Banner */}
        <div className="footer-newsletter-card">
          <div className="newsletter-text-col">
            <span className="badge-pill light">The 2026 Planetary Dispatch</span>
            <h3 className="newsletter-title">Stay grounded in verifiable ecological truth.</h3>
            <p className="newsletter-desc">
              Bi-weekly briefings on satellite remote sensing, sovereign escrow standards, 
              and verified grassroots breakthroughs. No greenwashing.
            </p>
          </div>

          <div className="newsletter-form-col">
            {subscribed ? (
              <div className="newsletter-success-box" role="status">
                <IconCheck className="newsletter-check-icon" />
                <span>You are subscribed to the Dispatch. Check your inbox for the welcome intelligence memo.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
                <div className="newsletter-input-group">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn btn-accent newsletter-submit-btn"
                  >
                    <span>{isSubmitting ? 'Joining...' : 'Subscribe'}</span>
                    <IconArrowRight />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="footer-columns-grid">
          {/* Brand Info */}
          <div className="footer-col-brand">
            <div className="footer-brand-logo">
              <IconLeaf className="footer-leaf-icon" />
              <span className="footer-brand-title">Impact<span>Tracker</span></span>
            </div>
            <p className="footer-brand-bio">
              The high-integrity platform engineering verifiable proof for global conservation, 
              community equity, and institutional philanthropic capital.
            </p>
            <div className="footer-seal">
              <IconShieldCheck className="seal-icon" />
              <span>Certified Carbon Negative Infrastructure</span>
            </div>
          </div>

          {/* Links 1 */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Platform</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Overview</a></li>
              <li><a href="#initiatives">Live Causes</a></li>
              <li><a href="#methodology">Verification Protocol</a></li>
              <li><a href="#simulator">Impact Simulator</a></li>
              <li><a href="#stats">Network Telemetry</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Methodology</h4>
            <ul className="footer-links-list">
              <li><a href="#methodology">Sentinel-2 Satellite Telemetry</a></li>
              <li><a href="#methodology">IoT Flow & Soil Meters</a></li>
              <li><a href="#methodology">Milestone Smart Escrow</a></li>
              <li><a href="#methodology">Fair Wage Verification</a></li>
              <li><a href="#faq">CSRD & ISSB Alignment</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Governance & Ethics</h4>
            <ul className="footer-links-list">
              <li><a href="#faq">Indigenous Co-Ownership</a></li>
              <li><a href="#faq">Zero-Leakage Guarantee</a></li>
              <li><a href="#faq">Public Ledger Audits</a></li>
              <li><a href="#faq">Open Data Commons</a></li>
              <li><a href="#faq">Security Whitepaper</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 ImpactTracker Technologies Inc. Built with reverence for living Earth systems.
          </p>
          <div className="footer-bottom-links">
            <a href="#hero">Privacy Covenant</a>
            <span className="divider-dot">•</span>
            <a href="#hero">Terms of Verification</a>
            <span className="divider-dot">•</span>
            <a href="#hero">Security Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
