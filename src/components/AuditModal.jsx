import { useEffect, useRef } from 'react';
import { IconClose, IconShieldCheck, IconCheck, IconSatellite, IconMapPin } from './Icons';

export function AuditModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // Close on Escape key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div className="modal-content" ref={modalRef}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-badge">
            <span className="badge-pill forest">
              <IconShieldCheck />
              <span>Cryptographic Proof Audit</span>
            </span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close audit details"
          >
            <IconClose />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="audit-project-intro">
            <h2 id="audit-modal-title" className="modal-title">{project.title}</h2>
            <div className="modal-meta-row">
              <span className="modal-location">
                <IconMapPin />
                {project.location}
              </span>
              <span className="modal-auditor">
                Audited by <strong>{project.verifier}</strong>
              </span>
            </div>
          </div>

          {/* Satellite Telemetry Metric Card */}
          <div className="audit-metric-card">
            <div className="audit-metric-head">
              <div className="metric-icon-box">
                <IconSatellite />
              </div>
              <div>
                <h4 className="metric-box-title">Multispectral Satellite Telemetry</h4>
                <p className="metric-box-sub">Spectral band validation via ESA Sentinel-2</p>
              </div>
            </div>
            <div className="audit-metric-callout">
              <span className="metric-callout-value">{project.auditDetails.ndviIndex}</span>
              <span className="metric-callout-label">Vegetation Health Index (NDVI)</span>
            </div>
          </div>

          {/* Milestone Checklist */}
          <div className="audit-milestones-section">
            <h4 className="milestones-heading">Verified Milestone Releases</h4>
            <div className="milestones-list">
              {project.auditDetails.milestones.map((ms, idx) => (
                <div key={idx} className="milestone-item">
                  <div className="milestone-check" aria-hidden="true">
                    <IconCheck />
                  </div>
                  <span className="milestone-text">{ms}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cryptographic Hash Verification Box */}
          <div className="audit-hash-box">
            <div className="hash-header">
              <span className="hash-label">Public Escrow Proof Hash</span>
              <span className="hash-status">Verified on Chain</span>
            </div>
            <code className="hash-code">{project.auditDetails.ipfsProofHash}</code>
            <p className="hash-footnote">
              Every satellite snapshot, sensor reading, and fund release is hashed immutably for open auditing.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-outline" 
            onClick={onClose}
          >
            Close Audit
          </button>
          <a 
            href="#simulator" 
            className="btn btn-accent" 
            onClick={onClose}
          >
            Simulate Allocation
          </a>
        </div>
      </div>
    </div>
  );
}
