import React, { useEffect, useState, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { useSwipe, useCarousel } from "../../hooks";

const HeroCarousel = ({ slides }) => {
  const { currentSlide, goToSlide, nextSlide, prevSlide, pause, resume, isPaused } = useCarousel(slides);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const carouselRef = useRef(null);

  // Helper function to get slide classes
  const getSlideClasses = (slideIndex) => {
    const baseClasses = 'transition-all duration-800 ease-in-out absolute inset-0 flex items-center';

    if (slideIndex === currentSlide) {
      return `${baseClasses} opacity-100 translate-x-0 scale-100`;
    }

    if (slideIndex < currentSlide) {
      return `${baseClasses} opacity-0 -translate-x-full scale-95`;
    }

    return `${baseClasses} opacity-0 translate-x-full scale-95`;
  };

  // Pause/resume based on interaction
  useEffect(() => {
    if (isHovered || isFocused) {
      pause();
    } else {
      resume();
    }
  }, [isHovered, isFocused, pause, resume]);

  // Swipe gesture handlers for mobile carousel with haptic feedback
  const swipeHandlers = useSwipe(
    () => {
      // Add haptic feedback for mobile devices
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
      nextSlide();
    },
    () => {
      // Add haptic feedback for mobile devices
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
      prevSlide();
    },
    {
      minSwipeDistance: 50,
      maxVerticalDistance: 100,
      preventDefault: true
    }
  );

  // Local keyboard navigation (scoped to carousel)
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Only handle if carousel is focused or hovered
      if (!isFocused && !isHovered) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('keydown', handleKeyPress);
      return () => {
        carouselElement.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [nextSlide, prevSlide, isFocused, isHovered]);

  // Structured data for carousel
  const carouselStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Switch Waste Services",
    "description": "Professional waste management services for Johannesburg and surrounding areas",
    "numberOfItems": slides?.length || 0,
    "itemListElement": slides?.map((slide, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": slide.title,
        "description": slide.description,
        "provider": {
          "@type": "Organization",
          "name": "Switch Waste Management Solutions"
        }
      }
    })) || []
  };

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: `url('/assets/backgrounds/index.herobanner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      role="banner"
      aria-label="Hero section with company information"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* Background Image Preloader with Responsive Sources */}
      <picture className="hidden">
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/backgrounds/index.herobanner-large.png 1x, /assets/backgrounds/index.herobanner-large@2x.png 2x"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/backgrounds/index.herobanner-medium.png 1x, /assets/backgrounds/index.herobanner-medium@2x.png 2x"
        />
        <img
          src="/assets/backgrounds/index.herobanner.png"
          alt=""
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)} // Still show content even if image fails
        />
      </picture>

      {/* Loading State */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-900">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-lg">Loading...</p>
          </div>
        </div>
      )}

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carouselStructuredData) }}
      />

      {/* Enhanced Overlay for better text readability - Right-aligned gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

      {/* Improved Watermark - Top left positioning */}
      <div className="absolute top-6 left-6 w-40 h-12 bg-black/70 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl">
        <span className="text-white text-sm font-bold tracking-wider">SWITCH WASTE</span>
      </div>

      {/* Right-aligned Carousel Container */}
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10 w-full max-w-7xl">
        <div className="flex items-center min-h-[80vh]">
          {/* Left side - Empty space for balance */}
          <div className="hidden lg:block lg:w-1/3"></div>

          {/* Right side - Carousel Content */}
          <div
            ref={carouselRef}
            className="w-full lg:w-1/2 ml-auto"
            {...swipeHandlers}
            role="region"
            aria-label="Hero carousel - Automatic slide show"
            aria-live="polite"
            tabIndex="0"
            aria-describedby="carousel-instructions"
          >
            {/* Enhanced Keyboard navigation hint */}
            <div
              id="carousel-instructions"
              className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 focus:bg-black/80 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:text-sm focus:z-20 focus:shadow-lg"
            >
              Use ← → arrow keys to navigate slides
            </div>

        {/* Improved Carousel Slides with better positioning */}
        <div
          className="relative min-h-[80vh] flex items-center"
          role="tabpanel"
          aria-labelledby={`slide-${currentSlide}-title`}
          aria-describedby={`slide-${currentSlide}-content`}
        >
          {slides && slides.length > 0 ? slides.map((slide, index) => (
            <div
              key={index}
              className={getSlideClasses(index)}
              role="tabpanel"
              aria-labelledby={`slide-${index}-title`}
              aria-describedby={`slide-${index}-content`}
              aria-hidden={index !== currentSlide}
            >
              <div className="flex flex-col justify-center min-h-[75vh] w-full max-w-4xl">
                   <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-white/20 shadow-2xl">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-blue-600/80 text-white text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
                        {slide.subtitle}
                      </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-8 text-white drop-shadow-2xl font-sans tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-12 drop-shadow-lg leading-relaxed max-w-3xl opacity-90 font-light">
                      {slide.description}
                    </p>
                   <div className="flex flex-col sm:flex-row gap-6">
                     <Link
                       to={slide.ctaLink}
                       className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 inline-flex items-center justify-center text-lg relative overflow-hidden group"
                     >
                       <span className="relative z-10 drop-shadow-md">{slide.ctaText}</span>
                       <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </Link>
                     <Link
                       to="/services"
                       className="border-2 border-white/70 text-white px-10 py-5 rounded-2xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 shadow-lg hover:shadow-white/20 hover:-translate-y-1 active:scale-95 active:translate-y-0 inline-flex items-center justify-center text-lg relative overflow-hidden group backdrop-blur-sm"
                     >
                       <span className="relative z-10 drop-shadow-md">View All Services</span>
                     </Link>
                   </div>
                 </div>
                 {/* Features section removed for cleaner right-aligned design */}
               </div>
             </div>
          )) : (
            <div className="flex items-center justify-center min-h-[75vh]">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📄</div>
                <h3 className="text-2xl font-bold mb-2">No slides available</h3>
                <p className="text-gray-300">Please check your slide configuration.</p>
              </div>
            </div>
          )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroCarousel);