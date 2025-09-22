import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCarousel } from '../../hooks';

const Carousel = ({ slides, className = 'bg-gradient-to-r from-blue-600 to-blue-700' }) => {
  const { currentSlide, goToSlide } = useCarousel(slides);

  if (!slides || slides.length === 0) {
    return null;
  }

  const activeSlide = slides[currentSlide];

  return (
    <section className={`relative py-16 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Carousel Content */}
          <div className="text-center text-white max-w-4xl mx-auto">
            {activeSlide?.subtitle && (
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-white/30">
                  {activeSlide.subtitle}
                </span>
              </div>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
              {activeSlide?.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
              {activeSlide?.description}
            </p>
            {activeSlide?.ctaLink && activeSlide?.ctaText && (
              <div className="flex justify-center gap-6">
                <Link
                  to={activeSlide.ctaLink}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  {activeSlide.ctaText}
                </Link>
              </div>
            )}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
  })).isRequired,
  className: PropTypes.string,
};

export default Carousel;