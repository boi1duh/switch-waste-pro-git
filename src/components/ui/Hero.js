import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative bg-gray-700 bg-cover bg-center text-white py-24 md:py-32"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">{subtitle}</p>}
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
};

export default Hero;