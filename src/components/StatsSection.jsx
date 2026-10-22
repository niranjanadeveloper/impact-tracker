import { DEMO_STATS } from '../data/impactData';
import { useCountUp } from '../hooks/useCountUp';

function StatItem({ stat, index }) {
  const [value, elementRef] = useCountUp(stat.target, 1700, stat.decimals);

  return (
    <div 
      ref={elementRef}
      className={`stat-card reveal reveal-delay-${(index % 4) + 1}`}
    >
      <div className="stat-number-wrapper">
        <span className="stat-prefix">{stat.prefix}</span>
        <span className="stat-value">
          {stat.decimals > 0
            ? value.toLocaleString(undefined, { minimumFractionDigits: stat.decimals, maximumFractionDigits: stat.decimals })
            : value.toLocaleString()}
        </span>
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <h3 className="stat-label">{stat.label}</h3>
      <p className="stat-subtext">{stat.subtext}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="stats-section section-padding" aria-labelledby="stats-heading">
      <div className="container">
        {/* Section Header with Demo Clarification */}
        <div className="stats-header reveal">
          <div className="stats-badge-wrap">
            <span className="badge-pill terracotta">
              Live Network Metrics
            </span>
          </div>
          <h2 id="stats-heading" className="stats-title">
            Tangible, ground-verified planetary impact.
          </h2>
          <p className="stats-caption">
            * All figures displayed below represent sample telemetry data simulated to illustrate live platform tracking capabilities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {DEMO_STATS.map((stat, idx) => (
            <StatItem key={stat.id} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
