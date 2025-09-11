/**
 * Performance monitoring utilities
 * Tracks Core Web Vitals and custom performance metrics
 */

import logger from "./logger";

// Performance observer instances
let clsObserver = null;
let fidObserver = null;
let lcpObserver = null;
let fcpObserver = null;

// Performance metrics storage
const metrics = {
  cls: [],
  fid: [],
  lcp: [],
  fcp: [],
  ttfb: [],
  custom: {},
};

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring() {
  if (typeof window === "undefined" || !window.PerformanceObserver) {
    logger.warn("Performance monitoring not supported in this browser");
    return;
  }

  // Monitor Core Web Vitals
  monitorCLS();
  monitorFID();
  monitorLCP();
  monitorFCP();

  // Monitor navigation timing
  monitorNavigationTiming();

  // Monitor resource loading
  monitorResourceTiming();

  logger.info("Performance monitoring initialized");
}

/**
 * Monitor Cumulative Layout Shift (CLS)
 */
function monitorCLS() {
  try {
    clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.cls.push({
          value: entry.value,
          timestamp: entry.startTime,
          sources: entry.sources,
        });

        // Log significant layout shifts
        if (entry.value > 0.1) {
          logger.warn("Significant layout shift detected", {
            value: entry.value,
            sources: entry.sources,
          });
        }
      }
    });

    clsObserver.observe({ entryTypes: ["layout-shift"] });
  } catch (error) {
    logger.error("Failed to monitor CLS:", error);
  }
}

/**
 * Monitor First Input Delay (FID)
 */
function monitorFID() {
  try {
    fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.fid.push({
          value: entry.processingStart - entry.startTime,
          timestamp: entry.startTime,
          inputType: entry.name,
        });

        // Log poor FID
        if (entry.processingStart - entry.startTime > 100) {
          logger.warn("Poor First Input Delay detected", {
            delay: entry.processingStart - entry.startTime,
            inputType: entry.name,
          });
        }
      }
    });

    fidObserver.observe({ entryTypes: ["first-input"] });
  } catch (error) {
    logger.error("Failed to monitor FID:", error);
  }
}

/**
 * Monitor Largest Contentful Paint (LCP)
 */
function monitorLCP() {
  try {
    lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];

      metrics.lcp.push({
        value: lastEntry.startTime,
        timestamp: Date.now(),
        element: lastEntry.element?.tagName,
      });

      // Log poor LCP
      if (lastEntry.startTime > 2500) {
        logger.warn("Poor Largest Contentful Paint detected", {
          lcp: lastEntry.startTime,
          element: lastEntry.element?.tagName,
        });
      }
    });

    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
  } catch (error) {
    logger.error("Failed to monitor LCP:", error);
  }
}

/**
 * Monitor First Contentful Paint (FCP)
 */
function monitorFCP() {
  try {
    fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.fcp.push({
          value: entry.startTime,
          timestamp: Date.now(),
        });

        // Log poor FCP
        if (entry.startTime > 1800) {
          logger.warn("Poor First Contentful Paint detected", {
            fcp: entry.startTime,
          });
        }
      }
    });

    fcpObserver.observe({ entryTypes: ["paint"] });
  } catch (error) {
    logger.error("Failed to monitor FCP:", error);
  }
}

/**
 * Monitor navigation timing
 */
function monitorNavigationTiming() {
  try {
    const navigation = performance.getEntriesByType("navigation")[0];
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart;
      metrics.ttfb.push({
        value: ttfb,
        timestamp: Date.now(),
      });

      // Log poor TTFB
      if (ttfb > 800) {
        logger.warn("Poor Time to First Byte detected", { ttfb });
      }
    }
  } catch (error) {
    logger.error("Failed to monitor navigation timing:", error);
  }
}

/**
 * Monitor resource loading performance
 */
function monitorResourceTiming() {
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 1000) {
          // Resources taking more than 1 second
          logger.warn("Slow resource detected", {
            url: entry.name,
            duration: entry.duration,
            type: entry.initiatorType,
          });
        }
      }
    });

    observer.observe({ entryTypes: ["resource"] });
  } catch (error) {
    logger.error("Failed to monitor resource timing:", error);
  }
}

/**
 * Track custom performance metric
 */
export function trackCustomMetric(name, value, metadata = {}) {
  if (!metrics.custom[name]) {
    metrics.custom[name] = [];
  }

  metrics.custom[name].push({
    value,
    timestamp: Date.now(),
    metadata,
  });

  logger.debug(`Custom metric tracked: ${name}`, { value, metadata });
}

/**
 * Measure function execution time
 */
export function measureExecutionTime(label, fn) {
  const start = performance.now();
  const result = fn();
  const end = performance.now();

  const duration = end - start;
  trackCustomMetric(`execution_time_${label}`, duration);

  logger.debug(`Function ${label} executed in ${duration.toFixed(2)}ms`);

  return result;
}

/**
 * Get performance metrics summary
 */
export function getPerformanceMetrics() {
  return {
    cls: calculateMetricStats(metrics.cls),
    fid: calculateMetricStats(metrics.fid),
    lcp: calculateMetricStats(metrics.lcp),
    fcp: calculateMetricStats(metrics.fcp),
    ttfb: calculateMetricStats(metrics.ttfb),
    custom: metrics.custom,
  };
}

/**
 * Calculate statistics for a metric array
 */
function calculateMetricStats(metricArray) {
  if (metricArray.length === 0) return null;

  const values = metricArray.map((m) => m.value);
  const sorted = [...values].sort((a, b) => a - b);

  return {
    count: values.length,
    min: Math.min(...values),
    max: Math.max(...values),
    median: sorted[Math.floor(sorted.length / 2)],
    average: values.reduce((a, b) => a + b, 0) / values.length,
    p95: sorted[Math.floor(sorted.length * 0.95)] || sorted[sorted.length - 1],
  };
}

/**
 * Report metrics to external service
 */
export function reportMetrics(endpoint = "/api/metrics") {
  const summary = getPerformanceMetrics();

  // Send to analytics endpoint
  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      endpoint,
      JSON.stringify({
        timestamp: Date.now(),
        url: window.location.href,
        metrics: summary,
      })
    );
  } else {
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({
        timestamp: Date.now(),
        url: window.location.href,
        metrics: summary,
      }),
      keepalive: true,
    }).catch((error) => {
      logger.error("Failed to report metrics:", error);
    });
  }
}

/**
 * Clean up performance observers
 */
export function cleanupPerformanceMonitoring() {
  if (clsObserver) clsObserver.disconnect();
  if (fidObserver) fidObserver.disconnect();
  if (lcpObserver) lcpObserver.disconnect();
  if (fcpObserver) fcpObserver.disconnect();

  logger.info("Performance monitoring cleaned up");
}

// Auto-initialize if in browser environment
if (typeof window !== "undefined") {
  // Initialize after page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPerformanceMonitoring);
  } else {
    initPerformanceMonitoring();
  }

  // Report metrics before page unload
  window.addEventListener("beforeunload", () => {
    reportMetrics();
    cleanupPerformanceMonitoring();
  });
}

export default {
  initPerformanceMonitoring,
  trackCustomMetric,
  measureExecutionTime,
  getPerformanceMetrics,
  reportMetrics,
  cleanupPerformanceMonitoring,
};
