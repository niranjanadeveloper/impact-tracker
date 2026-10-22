import { useState } from 'react';
import { FAQS } from '../data/impactData';
import { IconChevronDown } from './Icons';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section section-padding" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-layout-grid">
          {/* Left Column: Heading & Context */}
          <div className="faq-intro reveal">
            <div className="badge-pill terracotta">
              Got Questions?
            </div>
            <h2 id="faq-heading" className="faq-title">
              Clear answers to complex governance questions.
            </h2>
            <p className="faq-description">
              Learn how our multi-spectral satellite telemetry, milestone-based smart contracts, 
              and community verification work together to guarantee authentic impact.
            </p>
            <div className="faq-contact-box">
              <span className="contact-box-title">Have custom compliance needs?</span>
              <p className="contact-box-p">
                Our carbon & biodiversity methodology team can evaluate your existing portfolio framework.
              </p>
              <a href="#initiatives" className="faq-link">
                Review audit protocols →
              </a>
            </div>
          </div>

          {/* Right Column: Accessible Accordion */}
          <div className="faq-accordion reveal reveal-delay-2" role="region" aria-label="Frequently Asked Questions">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-btn-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div 
                  key={index} 
                  className={`accordion-item card-refined ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="accordion-question">{faq.question}</span>
                    <span className={`accordion-chevron-wrap ${isOpen ? 'is-rotated' : ''}`} aria-hidden="true">
                      <IconChevronDown />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`accordion-panel ${isOpen ? 'is-expanded' : ''}`}
                    hidden={!isOpen}
                  >
                    <div className="accordion-panel-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
