import { TESTIMONIALS } from '../data/impactData';
import { IconShieldCheck } from './Icons';

export function TestimonialsSection() {
  return (
    <section className="testimonials-section section-padding" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="testimonials-header reveal">
          <div className="badge-pill forest">
            Institutional Trust
          </div>
          <h2 id="testimonials-heading" className="testimonials-title">
            Trusted by conservation leaders and conscious capital.
          </h2>
          <p className="testimonials-sub">
            Leading foundations, family offices, and field stewards replace administrative overhead 
            with cryptographic trust.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className={`testimonial-card card-refined reveal reveal-delay-${idx + 1}`}
            >
              <div className="testimonial-quote-mark" aria-hidden="true">“</div>
              <blockquote className="testimonial-quote">
                {t.quote}
              </blockquote>

              <div className="testimonial-author-row">
                <div className="author-avatar-initials">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-details">
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}, <span className="author-org">{t.org}</span></div>
                </div>
              </div>

              <div className="testimonial-verified-badge">
                <IconShieldCheck className="verified-badge-icon" />
                <span>{t.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
