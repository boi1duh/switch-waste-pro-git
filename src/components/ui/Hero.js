import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryCta,
  secondaryCta,
  children,
  size = 'large',
  layout = 'center',
}) => {
  const sectionHeight = size === 'full' ? 'min-h-screen' : 'min-h-[70vh]';

  return (
    <section
      className={`relative flex items-center overflow-hidden bg-cover bg-center ${sectionHeight}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {layout === 'center' ? (
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg text-white">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md text-white">{subtitle}</p>}
        </div>
      ) : (
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl animate-fade-in-down">
              {subtitle && (
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                  {subtitle}
                </h2>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                {title}
              </h1>
              {description && (
                <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                  {description}
                </p>
              )}
              {(primaryCta || secondaryCta) && (
                <div className="flex flex-col sm:flex-row gap-6">
                  {primaryCta && (
                    <Link to={primaryCta.link} className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg">
                      {primaryCta.text}
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link to={secondaryCta.link} className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg">
                      {secondaryCta.text}
                    </Link>
                  )}
                </div>
              )}
            </div>
            {children && <div className="hidden md:block">{children}</div>}
          </div>
        </div>
      )}
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  primaryCta: PropTypes.shape({ text: PropTypes.string, link: PropTypes.string }),
  secondaryCta: PropTypes.shape({ text: PropTypes.string, link: PropTypes.string }),
  children: PropTypes.node, // For the right-side content
  size: PropTypes.oneOf(['large', 'full']),
  layout: PropTypes.oneOf(['center', 'two-column']),
};

export default Hero;