import React, { useState, useEffect, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { useSwipe } from "../../hooks";
import { slides } from "../../constants/HomeData";

const HeroCarousel = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const swipeHandlers = useSwipe(nextSlide, prevSlide, {
    minSwipeDistance: 50,
    maxVerticalDistance: 100,
    preventDefault: true
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/backgrounds/Index.Hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-32 h-16 bg-black bg-opacity-60 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20">
        <span className="text-white text-xs font-medium opacity-80">SWITCH WASTE</span>
      </div>

      <div
        className="container mx-auto px-4 py-16 md:py-24 relative z-10 w-full"
        {...swipeHandlers}
        role="region"
        aria-label="Hero carousel - Use arrow keys to navigate"
        aria-live="polite"
        tabIndex="0"
      >
        <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-black focus:bg-opacity-75 focus:text-white focus:px-3 focus:py-2 focus:rounded focus:text-sm focus:z-20">
          Use ← → arrow keys to navigate slides
        </div>

        <div className="relative" role="tabpanel" aria-labelledby={`slide-${currentSlide}`}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              } absolute inset-0`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
                <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                      to={slide.ctaLink}
                      className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 inline-flex items-center justify-center text-lg relative overflow-hidden group"
                      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98) translateY(2px)'}
                      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-1px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                    >
                      <span className="relative z-10">{slide.ctaText}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                    <Link
                      to="/services"
                      className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:translate-y-0 inline-flex items-center justify-center text-lg relative overflow-hidden group"
                      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98) translateY(2px)'}
                      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1) translateY(-1px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                    >
                      <span className="relative z-10">View All Services</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  {slide.features ? (
                    <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
                      <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">{slide.title}</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {slide.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <span className="text-green-400 text-2xl font-bold">✓</span>
                            <span className="text-white text-lg font-medium drop-shadow-md">{feature.substring(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
                      <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Expertise</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                          <span className="text-blue-400 text-2xl">🏥</span>
                          <span className="text-white text-lg font-medium drop-shadow-md">Healthcare Waste</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                          <span className="text-blue-400 text-2xl">💊</span>
                          <span className="text-white text-lg font-medium drop-shadow-md">Pharmaceutical Waste</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                          <span className="text-blue-400 text-2xl">♻️</span>
                          <span className="text-white text-lg font-medium drop-shadow-md">Recycling Programs</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                          <span className="text-blue-400 text-2xl">📋</span>
                          <span className="text-white text-lg font-medium drop-shadow-md">Compliance Training</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

HeroCarousel.displayName = 'HeroCarousel';

export default HeroCarousel;