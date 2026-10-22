import { METHODOLOGY_STEPS } from '../data/impactData';
import { IconSatellite, IconLock, IconUsers, IconCheck } from './Icons';

export function MethodologySection() {
  const getStepIcon = (idx) => {
    switch (idx) {
      case 0:
        return <IconSatellite className="methodology-icon" />;
      case 1:
        return <IconLock className="methodology-icon" />;
      case 2:
        return <IconUsers className="methodology-icon" />;
      default:
        return <IconCheck className="methodology-icon" />;
    }
  };

  return (
    <section id="methodology" className="methodology-section section-padding" aria-labelledby="methodology-heading">
      <div className="container">
        {/* Section Header */}
        <div className="methodology-header reveal">
          <div className="badge-pill terracotta">
            Verification Protocol
          </div>
          <h2 id="methodology-heading" className="methodology-title">
            How we eliminate impact greenwashing.
          </h2>
          <p className="methodology-sub">
            Traditional philanthropy relies on retrospective annual self-reports. 
            ImpactTracker establishes an infallible three-layer verification standard.
          </p>
        </div>

        {/* 3-Column Editorial Grid with Staggered Delays */}
        <div className="methodology-grid">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div 
              key={step.step}
              className={`methodology-card card-refined reveal reveal-delay-${idx + 1}`}
            >
              {/* Step Number & Icon Accent */}
              <div className="methodology-top-row">
                <span className="step-numeral">{step.step}</span>
                <div className="methodology-icon-badge">
                  {getStepIcon(idx)}
                </div>
              </div>

              {/* Title & Narrative */}
              <h3 className="methodology-card-title">{step.title}</h3>
              <p className="methodology-card-summary">{step.summary}</p>

              {/* Key Verification Points */}
              <div className="methodology-points-list">
                {step.points.map((pt, pIdx) => (
                  <div key={pIdx} className="methodology-point-item">
                    <div className="point-check-wrapper" aria-hidden="true">
                      <IconCheck className="point-check-icon" />
                    </div>
                    <span className="point-text">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
