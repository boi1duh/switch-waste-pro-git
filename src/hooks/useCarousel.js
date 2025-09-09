import { useState, useEffect, useCallback, useRef } from "react";

const useCarousel = (slides, autoPlayInterval = 8000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesRef = useRef(slides);
  const intervalRef = useRef(null);

  // Update slides ref when slides change
  useEffect(() => {
    slidesRef.current = slides;
  }, [slides]);

  // Auto-play carousel with pause functionality
  useEffect(() => {
    if (!isPaused && slidesRef.current.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slidesRef.current.length);
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, autoPlayInterval]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slidesRef.current.length) {
      setCurrentSlide(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesRef.current.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesRef.current.length) % slidesRef.current.length);
  }, []);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    pause,
    resume,
    isPaused,
    totalSlides: slidesRef.current.length
  };
};

export default useCarousel;