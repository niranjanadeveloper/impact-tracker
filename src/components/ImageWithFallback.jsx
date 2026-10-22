import { useState } from 'react';
import { IconTree, IconDroplet, IconSun, IconWheat, IconUsers } from './Icons';

export function ImageWithFallback({ src, alt, className = '', category = 'general', ...props }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    const getFallbackIcon = () => {
      switch (category) {
        case 'reforestation':
          return <IconTree className="fallback-svg-icon" />;
        case 'water':
          return <IconDroplet className="fallback-svg-icon" />;
        case 'energy':
          return <IconSun className="fallback-svg-icon" />;
        case 'regenerative':
          return <IconWheat className="fallback-svg-icon" />;
        default:
          return <IconUsers className="fallback-svg-icon" />;
      }
    };

    return (
      <div 
        className={`image-fallback-container ${className}`}
        role="img"
        aria-label={alt || 'Project illustration'}
      >
        <div className="fallback-graphic-wrap">
          {getFallbackIcon()}
          <span className="fallback-badge-text">Community Initiative</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      {...props}
    />
  );
}
