import { useRef, useCallback, useEffect, useMemo } from 'react';

const useSwipe = (onSwipeLeft, onSwipeRight, options = {}) => {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndX = useRef(null);
  const touchEndY = useRef(null);
  const touchStartTime = useRef(null);
  const isSwipeInProgress = useRef(false);

  const {
    minSwipeDistance = 50,
    maxVerticalDistance = 100,
    preventDefault = true,
    maxSwipeTime = 1000, // Maximum time for a swipe gesture
    minSwipeVelocity = 0.1, // Minimum velocity for swipe detection
    enableKeyboard = true, // Enable keyboard arrow key support
    enableMouse = false // Enable mouse drag support
  } = options;

  // Memoize options to prevent unnecessary re-renders
  const memoizedOptions = useMemo(() => ({
    minSwipeDistance,
    maxVerticalDistance,
    preventDefault,
    maxSwipeTime,
    minSwipeVelocity,
    enableKeyboard,
    enableMouse
  }), [minSwipeDistance, maxVerticalDistance, preventDefault, maxSwipeTime, minSwipeVelocity, enableKeyboard, enableMouse]);

  // Reset touch state
  const resetTouchState = useCallback(() => {
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
    touchStartTime.current = null;
    isSwipeInProgress.current = false;
  }, []);

  // Calculate swipe velocity
  const calculateVelocity = useCallback((distance, time) => {
    return Math.abs(distance) / time;
  }, []);

  // Enhanced touch start handler
  const handleTouchStart = useCallback((e) => {
    // Only handle single touch
    if (e.touches.length !== 1) return;

    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    touchStartTime.current = Date.now();
    isSwipeInProgress.current = true;
  }, []);

  // Enhanced touch move handler
  const handleTouchMove = useCallback((e) => {
    if (!isSwipeInProgress.current) return;

    if (memoizedOptions.preventDefault) {
      e.preventDefault();
    }
  }, [memoizedOptions.preventDefault]);

  // Enhanced touch end handler
  const handleTouchEnd = useCallback((e) => {
    if (!isSwipeInProgress.current || !touchStartX.current || !touchStartY.current) {
      resetTouchState();
      return;
    }

    // Only handle single touch
    if (e.changedTouches.length !== 1) {
      resetTouchState();
      return;
    }

    const touch = e.changedTouches[0];
    touchEndX.current = touch.clientX;
    touchEndY.current = touch.clientY;

    const endTime = Date.now();
    const duration = endTime - (touchStartTime.current || endTime);

    // Check if swipe is within time limit
    if (duration > memoizedOptions.maxSwipeTime) {
      resetTouchState();
      return;
    }

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;

    const velocityX = calculateVelocity(distanceX, duration);
    const velocityY = calculateVelocity(distanceY, duration);

    const isLeftSwipe = distanceX > memoizedOptions.minSwipeDistance;
    const isRightSwipe = distanceX < -memoizedOptions.minSwipeDistance;
    const isVerticalSwipe = Math.abs(distanceY) > memoizedOptions.maxVerticalDistance;

    // Check velocity threshold
    const hasMinVelocity = velocityX > memoizedOptions.minSwipeVelocity;

    // Only trigger swipe if it's more horizontal than vertical and has minimum velocity
    if (!isVerticalSwipe && hasMinVelocity) {
      if (isLeftSwipe && onSwipeLeft) {
        onSwipeLeft({
          distance: Math.abs(distanceX),
          velocity: velocityX,
          duration
        });
      }
      if (isRightSwipe && onSwipeRight) {
        onSwipeRight({
          distance: Math.abs(distanceX),
          velocity: velocityX,
          duration
        });
      }
    }

    resetTouchState();
  }, [memoizedOptions, calculateVelocity, onSwipeLeft, onSwipeRight, resetTouchState]);

  // Keyboard support for accessibility
  const handleKeyDown = useCallback((e) => {
    if (!memoizedOptions.enableKeyboard) return;

    if (e.key === 'ArrowLeft' && onSwipeLeft) {
      e.preventDefault();
      onSwipeLeft({
        distance: memoizedOptions.minSwipeDistance,
        velocity: 1,
        duration: 100,
        source: 'keyboard'
      });
    } else if (e.key === 'ArrowRight' && onSwipeRight) {
      e.preventDefault();
      onSwipeRight({
        distance: memoizedOptions.minSwipeDistance,
        velocity: 1,
        duration: 100,
        source: 'keyboard'
      });
    }
  }, [memoizedOptions.enableKeyboard, onSwipeLeft, onSwipeRight, memoizedOptions.minSwipeDistance]);

  // Mouse support (optional)
  const handleMouseDown = useCallback((e) => {
    if (!memoizedOptions.enableMouse) return;

    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
    touchStartTime.current = Date.now();
    isSwipeInProgress.current = true;
  }, [memoizedOptions.enableMouse]);

  const handleMouseMove = useCallback((e) => {
    if (!isSwipeInProgress.current || !memoizedOptions.enableMouse) return;

    if (memoizedOptions.preventDefault) {
      e.preventDefault();
    }
  }, [memoizedOptions.enableMouse, memoizedOptions.preventDefault]);

  const handleMouseUp = useCallback((e) => {
    if (!isSwipeInProgress.current || !memoizedOptions.enableMouse) return;

    touchEndX.current = e.clientX;
    touchEndY.current = e.clientY;

    const endTime = Date.now();
    const duration = endTime - (touchStartTime.current || endTime);

    if (duration > memoizedOptions.maxSwipeTime) {
      resetTouchState();
      return;
    }

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;

    const isLeftSwipe = distanceX > memoizedOptions.minSwipeDistance;
    const isRightSwipe = distanceX < -memoizedOptions.minSwipeDistance;
    const isVerticalSwipe = Math.abs(distanceY) > memoizedOptions.maxVerticalDistance;

    if (!isVerticalSwipe) {
      if (isLeftSwipe && onSwipeLeft) {
        onSwipeLeft({
          distance: Math.abs(distanceX),
          velocity: calculateVelocity(distanceX, duration),
          duration,
          source: 'mouse'
        });
      }
      if (isRightSwipe && onSwipeRight) {
        onSwipeRight({
          distance: Math.abs(distanceX),
          velocity: calculateVelocity(distanceX, duration),
          duration,
          source: 'mouse'
        });
      }
    }

    resetTouchState();
  }, [memoizedOptions, calculateVelocity, onSwipeLeft, onSwipeRight, resetTouchState]);

  // Cleanup on unmount
  useEffect(() => {
    return resetTouchState;
  }, [resetTouchState]);

  return {
    // Touch events
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,

    // Keyboard events (optional)
    onKeyDown: memoizedOptions.enableKeyboard ? handleKeyDown : undefined,

    // Mouse events (optional)
    onMouseDown: memoizedOptions.enableMouse ? handleMouseDown : undefined,
    onMouseMove: memoizedOptions.enableMouse ? handleMouseMove : undefined,
    onMouseUp: memoizedOptions.enableMouse ? handleMouseUp : undefined,

    // Utility functions
    reset: resetTouchState,
    isSwipeInProgress: isSwipeInProgress.current
  };
};

export default useSwipe;