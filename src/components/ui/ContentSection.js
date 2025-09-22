import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContentSection = ({
  title,
  subtitle,
  items = [],
  cta,
  children,
  bgColor = 'bg-white',
  titleColor = 'text-blue-600',
  itemBgColor = 'bg-gray-50',
  hasOverlay = false,
}) => {
  return (
    <section className={`relative py-16 ${bgColor}`}>
      {hasOverlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>
      )}
      <div className="container mx-auto px-4 relative z-10 animate-slide-in-up">
        <div className="max-w-4xl mx-auto">
          {title && (
            <h2 className={`text-3xl font-bold ${titleColor} mb-8 text-center`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              {subtitle}
            </p>
          )}

          {children}

          {items.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {items.map((item, index) => (
                <div key={index} className={`${itemBgColor} p-6 rounded-xl`}>
                  <h3 className={`text-xl font-bold ${titleColor} mb-4`}>{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.points && (
                    <ul className="text-gray-600 space-y-2">
                      {item.points.map((point, i) => <li key={i}>• {point}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {cta && (
            <div className="text-center">
              <Link to={cta.link} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
                {cta.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
  cta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
  itemBgColor: PropTypes.string,
  hasOverlay: PropTypes.bool,
};

export default ContentSection;