import { IconShieldCheck, IconArrowRight, IconActivity } from './Icons';

export function HeroSection({ onOpenDemo }) {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left: Editorial Content with Staggered Entrance */}
          <div className="hero-content">
            {/* Pill Badge */}
            <div className="hero-stagger-1">
              <span className="badge-pill forest">
                <span className="live-dot" aria-hidden="true" />
                <span>Verifiable Real-World Outcomes • 2026 Platform</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 id="hero-heading" className="hero-title hero-stagger-2">
              Measure what matters. <br />
              <span className="hero-title-italic">Cultivate lasting change.</span>
            </h1>

            {/* Subtitle / Copy */}
            <p className="hero-description hero-stagger-3">
              The high-integrity intelligence platform connecting conscious capital, 
              philanthropic endowments, and grassroots stewards with continuous 
              satellite verification and cryptographic escrow accountability.
            </p>

            {/* CTA Group */}
            <div className="hero-cta-group hero-stagger-4">
              <a href="#initiatives" className="btn btn-accent hero-btn">
                <span>Explore Live Causes</span>
                <IconArrowRight />
              </a>
              <button 
                type="button" 
                onClick={onOpenDemo}
                className="btn btn-outline hero-btn"
                aria-haspopup="dialog"
              >
                <span>Request Telemetry Demo</span>
              </button>
            </div>

            {/* Micro Social Proof / Trust Indicators */}
            <div className="hero-trust-indicators hero-stagger-4">
              <div className="trust-item">
                <IconShieldCheck className="trust-icon" />
                <span>Sentinel-2 Spectral Ground Truth</span>
              </div>
              <div className="trust-divider" aria-hidden="true" />
              <div className="trust-item">
                <IconActivity className="trust-icon" />
                <span>Zero Intermediary Leakage</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Community Impact Photograph & Layered Shapes */}
          <div className="hero-visual-wrapper hero-stagger-image">
            {/* Subtle Decorative Botanical SVG Shape Behind */}
            <div className="hero-decorative-shape" aria-hidden="true">
              <svg viewBox="0 0 400 400" className="decor-svg" fill="none">
                <circle cx="200" cy="200" r="180" stroke="#D9E8D5" strokeWidth="1.5" strokeDasharray="4 6" />
                <path 
                  d="M 120,40 C 260,20 380,140 360,280 C 340,360 220,380 140,320 C 60,260 40,160 120,40 Z" 
                  fill="#EAF2E8" 
                  opacity="0.6" 
                />
              </svg>
            </div>

            {/* Main Photography Frame */}
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85"
                alt="Community stewards and volunteers planting native saplings in a reforested valley under warm morning sunlight"
                className="hero-main-image"
                loading="eager"
                width="640"
                height="560"
              />

              {/* Floating Verification Badge (Ivory Layered Surface) */}
              <div className="hero-floating-card top-right-card">
                <div className="floating-card-icon-wrap">
                  <IconShieldCheck className="floating-card-icon" />
                </div>
                <div className="floating-card-text">
                  <span className="floating-card-title">99.4% Fund Integrity</span>
                  <span className="floating-card-meta">Independent Escrow Audit</span>
                </div>
              </div>

              {/* Floating Live Telemetry Pill (Bottom Left) */}
              <div className="hero-floating-card bottom-left-card">
                <div className="live-indicator-ring">
                  <span className="live-indicator-core" />
                </div>
                <div className="floating-card-text">
                  <span className="floating-card-title">Live Satellite Telemetry</span>
                  <span className="floating-card-meta">Sentinel-2 • 14,280 Ha Scanned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
