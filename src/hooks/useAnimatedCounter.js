import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

const useAnimatedCounter = (endValue, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs to prevent memory leaks and optimize performance
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const startValueRef = useRef(0);

  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Memoize easing function to avoid recalculation
  const easeOutQuart = useCallback((progress) => {
    return 1 - Math.pow(1 - progress, 4);
  }, []);

  // Cleanup function to prevent memory leaks
  const cleanup = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    startTimeRef.current = null;
  }, []);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) {
      // If reduced motion is preferred, set final value immediately
      if (prefersReducedMotion && hasStarted) {
        setCount(endValue);
      }
      return;
    }

    setIsAnimating(true);
    startValueRef.current = count; // Use current count as start value
    startTimeRef.current = null;

    const animate = (currentTime) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.floor(startValueRef.current + (endValue - startValueRef.current) * easedProgress);

      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount or dependency change
    return cleanup;
  }, [endValue, duration, hasStarted, count, easeOutQuart, cleanup, prefersReducedMotion]);

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const startAnimation = useCallback(() => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  }, [hasStarted]);

  const reset = useCallback(() => {
    cleanup();
    setCount(0);
    setHasStarted(!startOnView);
    setIsAnimating(false);
  }, [cleanup, startOnView]);

  const pause = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
      setIsAnimating(false);
    }
  }, []);

  const resume = useCallback(() => {
    if (!isAnimating && hasStarted && count < endValue) {
      setIsAnimating(true);
      const animate = (currentTime) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = currentTime;
        }

        const elapsed = currentTime - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = easeOutQuart(progress);
        const currentValue = Math.floor(startValueRef.current + (endValue - startValueRef.current) * easedProgress);

        setCount(currentValue);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
          animationRef.current = null;
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }
  }, [isAnimating, hasStarted, count, endValue, duration, easeOutQuart]);

  return {
    count,
    startAnimation,
    hasStarted,
    isAnimating,
    reset,
    pause,
    resume,
    prefersReducedMotion
  };
};

export default useAnimatedCounter;