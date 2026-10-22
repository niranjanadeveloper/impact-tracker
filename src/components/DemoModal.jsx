import { useState, useEffect, useRef, useCallback } from 'react';
import { IconClose, IconCheck, IconShieldCheck, IconArrowRight } from './Icons';

export function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orgType: 'foundation',
    portfolioSize: '$1M - $10M',
    notes: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [errorMessage, setErrorMessage] = useState('');
  const firstInputRef = useRef(null);

  const handleClose = useCallback(() => {
    setStatus('idle');
    setErrorMessage('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage('Please provide your name and work email address.');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    // Simulate reliable API request with feedback
    setTimeout(() => {
      setStatus('success');
    }, 750);
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="modal-content demo-modal-box">
        {/* Header */}
        <div className="modal-header">
          <div className="badge-pill terracotta">
            <IconShieldCheck />
            <span>Platform Access</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Close demo booking dialog"
          >
            <IconClose />
          </button>
        </div>

        {/* Content */}
        {status === 'success' ? (
          <div className="demo-success-state" role="status">
            <div className="success-icon-badge">
              <IconCheck />
            </div>
            <h2 className="success-title">Telemetry Briefing Requested!</h2>
            <p className="success-desc">
              Thank you, <strong>{formData.name}</strong>. Our climate & ESG intelligence team 
              has prepared your access sandbox. A personalized demo link has been sent to <strong>{formData.email}</strong>.
            </p>
            <div className="success-summary-box">
              <div className="summary-line">
                <span>Organization Sector:</span>
                <strong>{formData.orgType.toUpperCase()}</strong>
              </div>
              <div className="summary-line">
                <span>Capital Scale:</span>
                <strong>{formData.portfolioSize}</strong>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={onClose}
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="demo-form">
            <div className="demo-intro-header">
              <h2 id="demo-modal-title" className="modal-title">Book an Impact Telemetry Walkthrough</h2>
              <p className="modal-subtitle">
                Discover how satellite-verified escrow, automated CSRD reporting, and tamper-proof 
                milestones bring absolute transparency to your sustainability capital.
              </p>
            </div>

            {errorMessage && (
              <div className="form-error-alert" role="alert">
                {errorMessage}
              </div>
            )}

            <div className="form-field-group">
              <label htmlFor="demo-name" className="form-label">
                Full Name <span className="req">*</span>
              </label>
              <input
                ref={firstInputRef}
                id="demo-name"
                type="text"
                required
                placeholder="Dr. Jordan Mercer"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="demo-email" className="form-label">
                Professional Email <span className="req">*</span>
              </label>
              <input
                id="demo-email"
                type="email"
                required
                placeholder="j.mercer@foundation.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-row-2">
              <div className="form-field-group">
                <label htmlFor="demo-org-type" className="form-label">Organization Profile</label>
                <select
                  id="demo-org-type"
                  value={formData.orgType}
                  onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                  className="form-select"
                >
                  <option value="foundation">Philanthropic Foundation</option>
                  <option value="family-office">Family Office / Endowment</option>
                  <option value="corporate-esg">Corporate ESG & CSRD</option>
                  <option value="grassroots">Conservation Steward / NGO</option>
                </select>
              </div>

              <div className="form-field-group">
                <label htmlFor="demo-scale" className="form-label">Portfolio Scale</label>
                <select
                  id="demo-scale"
                  value={formData.portfolioSize}
                  onChange={(e) => setFormData({ ...formData, portfolioSize: e.target.value })}
                  className="form-select"
                >
                  <option value="Under $1M">Under $1M Annually</option>
                  <option value="$1M - $10M">$1M - $10M Annually</option>
                  <option value="$10M - $50M">$10M - $50M Annually</option>
                  <option value="$50M+">$50M+ Enterprise</option>
                </select>
              </div>
            </div>

            <div className="form-field-group">
              <label htmlFor="demo-notes" className="form-label">Specific Biomes or Goals (Optional)</label>
              <textarea
                id="demo-notes"
                rows="3"
                placeholder="e.g. Reforestation in Central America, water security in East Africa..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="form-textarea"
              />
            </div>

            <div className="form-submit-row">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-accent w-full"
              >
                {status === 'submitting' ? (
                  <span>Generating Secure Sandbox...</span>
                ) : (
                  <>
                    <span>Confirm & Schedule Briefing</span>
                    <IconArrowRight />
                  </>
                )}
              </button>
            </div>
            <p className="privacy-microcopy">
              We respect your data integrity. Zero spam, enterprise AES-256 encryption.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
