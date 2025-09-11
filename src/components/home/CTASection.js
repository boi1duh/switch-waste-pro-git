import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Custom hook for button interactions
const useButtonInteraction = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = useCallback((e) => {
    setIsPressed(true);
    e.currentTarget.style.transform = "scale(0.98) translateY(2px)";
  }, []);

  const handleMouseUp = useCallback((e) => {
    setIsPressed(false);
    e.currentTarget.style.transform = "scale(1.05) translateY(-1px)";
  }, []);

  const handleMouseLeave = useCallback((e) => {
    setIsPressed(false);
    e.currentTarget.style.transform = "scale(1) translateY(0)";
  }, []);

  return { isPressed, handleMouseDown, handleMouseUp, handleMouseLeave };
};

const CTASection = ({ className = "" }) => {
  const navigate = useNavigate();
  const primaryButton = useButtonInteraction();
  const secondaryButton = useButtonInteraction();

  const handlePrimaryClick = useCallback(
    (e) => {
      e.preventDefault();
      try {
        navigate("/contact");
      } catch (error) {
        console.error("Navigation error:", error);
        // Fallback navigation
        window.location.href = "/contact";
      }
    },
    [navigate]
  );

  const handleSecondaryClick = useCallback(
    (e) => {
      e.preventDefault();
      try {
        navigate("/contact");
      } catch (error) {
        console.error("Navigation error:", error);
        // Fallback navigation
        window.location.href = "/contact";
      }
    },
    [navigate]
  );

  return (
    <section
      className={`py-12 md:py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white ${className}`}
      aria-labelledby="cta-heading"
      role="region"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          id="cta-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4"
        >
          Ready to Switch to Better Waste Management?
        </h2>
        <p
          className="text-lg sm:text-xl mb-6 md:mb-8 max-w-3xl mx-auto px-4"
          aria-describedby="cta-description"
        >
          Contact our team today to learn how we can help your business maintain
          compliance while protecting the environment.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-2xl mx-auto px-4"
          role="group"
          aria-label="Call to action buttons"
        >
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 relative overflow-hidden group text-center focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            onClick={handlePrimaryClick}
            onMouseDown={primaryButton.handleMouseDown}
            onMouseUp={primaryButton.handleMouseUp}
            onMouseLeave={primaryButton.handleMouseLeave}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handlePrimaryClick(e);
              }
            }}
            aria-label="Get a free quote for waste management services"
            role="button"
            tabIndex={0}
          >
            <span className="relative z-10">Get a Free Quote</span>
            <div className="absolute inset-0 bg-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95 active:translate-y-0 relative overflow-hidden group text-center focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            onClick={handleSecondaryClick}
            onMouseDown={secondaryButton.handleMouseDown}
            onMouseUp={secondaryButton.handleMouseUp}
            onMouseLeave={secondaryButton.handleMouseLeave}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSecondaryClick(e);
              }
            }}
            aria-label="Speak to a waste management expert"
            role="button"
            tabIndex={0}
          >
            <span className="relative z-10">Speak to an Expert</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

CTASection.propTypes = {
  className: PropTypes.string,
};

export default memo(CTASection);
