import { useState, useEffect, useRef } from 'react';
import { CAUSE_CATEGORIES, IMPACT_PROJECTS } from '../data/impactData';
import { 
  IconSearch, 
  IconClose, 
  IconMapPin, 
  IconArrowRight, 
  IconFilter,
  IconTree,
  IconDroplet,
  IconSun,
  IconWheat
} from './Icons';

function ProjectCard({ project, onSelectAudit, isVisible }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    // When card enters view, animate progress bar smoothly
    if (!isVisible) return;
    const timer = setTimeout(() => {
      setAnimatedProgress(project.progress);
    }, 150);
    return () => clearTimeout(timer);
  }, [isVisible, project.progress]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'reforestation':
        return <IconTree className="category-icon" />;
      case 'water':
        return <IconDroplet className="category-icon" />;
      case 'energy':
        return <IconSun className="category-icon" />;
      case 'regenerative':
        return <IconWheat className="category-icon" />;
      default:
        return <IconTree className="category-icon" />;
    }
  };

  return (
    <article 
      ref={cardRef}
      className="project-card card-refined"
      tabIndex="0"
      aria-labelledby={`proj-title-${project.id}`}
    >
      {/* Card Image Container with Zoom on Hover */}
      <div className="card-media-wrapper">
        <img 
          src={project.image} 
          alt={project.title}
          className="card-image"
          loading="lazy"
        />
        <div className="card-badge-floating">
          <span className="card-category-tag">
            {getCategoryIcon(project.category)}
            <span>{project.category.toUpperCase()}</span>
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="card-body">
        {/* Location Row */}
        <div className="card-location">
          <IconMapPin className="location-icon" />
          <span>{project.location}</span>
        </div>

        {/* Title */}
        <h3 id={`proj-title-${project.id}`} className="card-title">
          {project.title}
        </h3>

        {/* Description */}
        <p className="card-description">
          {project.description}
        </p>

        {/* Key Verified Outcome Metric Highlight */}
        <div className="card-metric-highlight">
          <div className="metric-pill">
            <span className="metric-primary-value">{project.keyMetric}</span>
            <span className="metric-secondary-value">{project.secondaryMetric}</span>
          </div>
        </div>

        {/* Funding & Goal Progress Bar */}
        <div className="card-progress-section" aria-label={`Funding progress: ${project.progress}%`}>
          <div className="progress-labels">
            <span className="raised-amount">
              ${project.raised.toLocaleString()} <span className="goal-sub">raised</span>
            </span>
            <span className="progress-percent">{project.progress}%</span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${animatedProgress}%` }}
              role="progressbar"
              aria-valuenow={project.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress-target">
            Target goal: ${project.goal.toLocaleString()}
          </div>
        </div>

        {/* Verification Status Footer & Action */}
        <div className="card-footer">
          <div className="card-verification-status">
            <span className="live-status-dot" aria-hidden="true" />
            <div className="verification-text">
              <span className="verifier-name">{project.verifier}</span>
              <span className="verified-time">Audited {project.lastVerified}</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-outline card-audit-btn"
            onClick={() => onSelectAudit(project)}
            aria-label={`View audit report for ${project.title}`}
          >
            <span>Audit Trail</span>
            <IconArrowRight />
          </button>
        </div>
      </div>
    </article>
  );
}

export function ImpactDashboardPreview({ onSelectAudit }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Filter projects by category and search
  const filteredProjects = IMPACT_PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      ref={sectionRef} 
      id="initiatives" 
      className="dashboard-preview-section section-padding"
      aria-labelledby="initiatives-heading"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="section-head-editorial reveal">
          <div className="section-badge-wrapper">
            <span className="badge-pill forest">
              Live Transparency Ledger
            </span>
          </div>
          <h2 id="initiatives-heading" className="section-title">
            Explore verified initiatives with live telemetry.
          </h2>
          <p className="section-subtitle">
            Every listed initiative is tied to satellite multispectral tracking, IoT field sensors, 
            and transparent milestone-based escrow releases.
          </p>
        </div>

        {/* Filter Bar & Search Controls */}
        <div className="filter-controls-bar reveal reveal-delay-1">
          {/* Category Tabs */}
          <div className="category-tabs-scroll" role="tablist" aria-label="Filter initiatives by cause">
            {CAUSE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`category-tab-btn ${selectedCategory === cat.id ? 'is-active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box with Clear Button */}
          <div className="search-box-wrapper">
            <label htmlFor="initiative-search" className="sr-only">Search initiatives</label>
            <IconSearch className="search-icon" aria-hidden="true" />
            <input
              id="initiative-search"
              type="text"
              placeholder="Search by location, biome, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                <IconClose />
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Metrics */}
        <div className="results-summary reveal reveal-delay-2">
          <span className="results-count">
            Showing <strong>{filteredProjects.length}</strong> of {IMPACT_PROJECTS.length} verified projects
          </span>
          {selectedCategory !== 'all' && (
            <button 
              type="button" 
              className="reset-filter-link"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Projects Grid with Smooth Fade/Scale Transition */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid reveal reveal-delay-3">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelectAudit={onSelectAudit}
                isVisible={sectionInView}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="empty-state-card reveal">
            <div className="empty-state-icon">
              <IconFilter />
            </div>
            <h3 className="empty-state-title">No initiatives match your criteria</h3>
            <p className="empty-state-text">
              We couldn't find any initiatives matching "{searchQuery}". Try searching for "forest", "solar", or "water", or reset your filters.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
