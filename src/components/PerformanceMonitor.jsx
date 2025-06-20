import React, { useState, useEffect } from 'react';
import { getPerformanceMetrics } from '../utils/performance';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
      
      const updateMetrics = () => {
        const performanceMetrics = getPerformanceMetrics();
        if (performanceMetrics) {
          setMetrics(performanceMetrics);
        }
      };

      // Update metrics after page load
      window.addEventListener('load', updateMetrics);
      
      // Update metrics periodically
      const interval = setInterval(updateMetrics, 5000);

      return () => {
        window.removeEventListener('load', updateMetrics);
        clearInterval(interval);
      };
    }
  }, []);

  if (!isVisible || !metrics) return null;

  return (
    <div className="performance-monitor">
      <h4>Performance Metrics</h4>
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">Load Time:</span>
          <span className="metric-value">{metrics.loadTime?.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">DOM Ready:</span>
          <span className="metric-value">{metrics.domContentLoaded?.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">First Paint:</span>
          <span className="metric-value">{metrics.firstPaint?.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">FCP:</span>
          <span className="metric-value">{metrics.firstContentfulPaint?.toFixed(2)}ms</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor; 