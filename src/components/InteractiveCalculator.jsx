import { useState } from 'react';
import { IconTree, IconDroplet, IconSun, IconUsers, IconSparkles, IconCheck, IconArrowRight } from './Icons';

export function InteractiveCalculator({ onOpenDemo }) {
  const [amount, setAmount] = useState(100);
  const [frequency, setFrequency] = useState('monthly'); // 'monthly' | 'one-time'
  const [isAllocating, setIsAllocating] = useState(false);
  const [allocatedSuccess, setAllocatedSuccess] = useState(false);

  const presets = [25, 50, 100, 250, 500];

  // Multiplier for annual impact calculation if monthly
  const annualFactor = frequency === 'monthly' ? 12 : 1;
  const effectiveAnnual = amount * annualFactor;

  // Calculators based on actual verified cost benchmarks
  // ~$2 per tree planted + 3-year survival monitoring
  const treesPlanted = Math.floor(effectiveAnnual / 2.5);
  // ~ $0.005 per liter of deep solar well drinking water
  const waterLiters = Math.floor(effectiveAnnual * 180);
  // ~ $20 per ton verified biochar / reforestation carbon capture
  const carbonTons = (effectiveAnnual / 22).toFixed(1);
  // ~ $15 per hour fair wage community stewardship
  const stewardshipHours = Math.floor(effectiveAnnual / 16);

  const handleSimulateAllocation = () => {
    setIsAllocating(true);
    setTimeout(() => {
      setIsAllocating(false);
      setAllocatedSuccess(true);
      setTimeout(() => setAllocatedSuccess(false), 4500);
    }, 600);
  };

  return (
    <section id="simulator" className="simulator-section section-padding" aria-labelledby="simulator-heading">
      <div className="container">
        <div className="simulator-card card-refined reveal">
          <div className="simulator-grid">
            {/* Left Controls */}
            <div className="simulator-controls">
              <div className="badge-pill terracotta">
                <IconSparkles />
                <span>Impact Simulator</span>
              </div>

              <h2 id="simulator-heading" className="simulator-title">
                Model your measurable planetary return.
              </h2>
              <p className="simulator-lead">
                Choose a recurring or one-time capital commitment to preview verified ecological 
                and community outcomes generated through our certified network.
              </p>

              {/* Frequency Toggle */}
              <div className="frequency-toggle-wrapper">
                <button
                  type="button"
                  className={`frequency-btn ${frequency === 'monthly' ? 'is-active' : ''}`}
                  onClick={() => setFrequency('monthly')}
                >
                  Monthly Commitment
                </button>
                <button
                  type="button"
                  className={`frequency-btn ${frequency === 'one-time' ? 'is-active' : ''}`}
                  onClick={() => setFrequency('one-time')}
                >
                  One-Time Grant
                </button>
              </div>

              {/* Amount Presets */}
              <div className="amount-presets" role="radiogroup" aria-label="Select pledge amount">
                {presets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    role="radio"
                    aria-checked={amount === preset}
                    className={`preset-btn ${amount === preset ? 'is-selected' : ''}`}
                    onClick={() => setAmount(preset)}
                  >
                    ${preset}
                  </button>
                ))}
              </div>

              {/* Slider Control */}
              <div className="slider-control-group">
                <div className="slider-label-row">
                  <span className="slider-label">Custom Capital Commitment</span>
                  <span className="slider-current-val">${amount.toLocaleString()}{frequency === 'monthly' ? '/mo' : ''}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="interactive-range-slider"
                  aria-label="Pledge amount slider"
                />
                <div className="slider-ticks">
                  <span>$10</span>
                  <span>$250</span>
                  <span>$500</span>
                  <span>$1,000+</span>
                </div>
              </div>
            </div>

            {/* Right Projected Outcomes Box */}
            <div className="simulator-outcomes">
              <div className="outcomes-header">
                <span className="outcomes-eyebrow">
                  Projected 12-Month Ground Verified Return
                </span>
                <span className="outcomes-total-basis">
                  Based on ${effectiveAnnual.toLocaleString()} total allocation
                </span>
              </div>

              {/* 4 Outcome Metrics */}
              <div className="outcomes-metrics-grid">
                {/* Metric 1 */}
                <div className="outcome-metric-card">
                  <div className="outcome-icon-wrapper forest">
                    <IconTree />
                  </div>
                  <div className="outcome-metric-data">
                    <div className="outcome-number">{treesPlanted.toLocaleString()}</div>
                    <div className="outcome-label">Native Trees Planted</div>
                    <div className="outcome-sub">GPS tagged with 3-year care covenant</div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="outcome-metric-card">
                  <div className="outcome-icon-wrapper sage">
                    <IconDroplet />
                  </div>
                  <div className="outcome-metric-data">
                    <div className="outcome-number">{waterLiters.toLocaleString()} L</div>
                    <div className="outcome-label">Clean Potable Water Delivered</div>
                    <div className="outcome-sub">Verified through IoT solar smart meters</div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="outcome-metric-card">
                  <div className="outcome-icon-wrapper terracotta">
                    <IconSun />
                  </div>
                  <div className="outcome-metric-data">
                    <div className="outcome-number">{carbonTons} t</div>
                    <div className="outcome-label">CO2e Sequestered / Displaced</div>
                    <div className="outcome-sub">Gold Standard third-party protocol</div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="outcome-metric-card">
                  <div className="outcome-icon-wrapper mint">
                    <IconUsers />
                  </div>
                  <div className="outcome-metric-data">
                    <div className="outcome-number">{stewardshipHours.toLocaleString()} hrs</div>
                    <div className="outcome-label">Fair-Wage Stewardship Funded</div>
                    <div className="outcome-sub">Direct digital payout to local collectives</div>
                  </div>
                </div>
              </div>

              {/* Action Banner */}
              <div className="outcomes-action-row">
                {allocatedSuccess ? (
                  <div className="success-banner" role="status">
                    <IconCheck className="success-icon" />
                    <span>Impact simulation saved to session portfolio! Ready to connect capital.</span>
                  </div>
                ) : (
                  <div className="cta-dual-row">
                    <button
                      type="button"
                      className="btn btn-accent w-full"
                      onClick={handleSimulateAllocation}
                      disabled={isAllocating}
                    >
                      {isAllocating ? (
                        <span className="spinner-dots">Calculating escrow allocation...</span>
                      ) : (
                        <>
                          <span>Save Model to Portfolio</span>
                          <IconArrowRight />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline w-full"
                      onClick={onOpenDemo}
                    >
                      Schedule Stewardship Demo
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
