import React, { useState, useRef, useEffect } from 'react';
import { lazyLoadImage } from '../utils/performance';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      lazyLoadImage(imgRef.current, src);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`optimized-image-container ${className}`}>
      <img
        ref={imgRef}
        src={placeholder}
        alt={alt}
        className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        {...props}
      />
      {!isLoaded && (
        <div className="image-placeholder">
          <div className="placeholder-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 