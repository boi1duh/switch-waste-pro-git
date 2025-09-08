import React from "react";
import { expertiseAreas } from "../../constants/AboutData";

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Industry Expertise & Experience</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 20 years of experience in the waste management industry, Switch Waste Solutions has developed extensive knowledge of the stringent regulations, legislation, by-laws, and SANS guidelines governing the healthcare risk waste sector.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our expert team provides comprehensive support throughout the entire 'cradle to grave' process of healthcare risk waste treatment and disposal. We understand the critical importance of compliance and work diligently to ensure your organization meets all regulatory requirements.
            </p>
          </div>
          <div>
            <img
              src="/assets/team-experts.jpg"
              alt="Professional waste management team and certified experts"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/assets/fallback-image.jpg"; // Fallback image
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${area.icon} text-blue-600 text-xl`} aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{area.title}</h3>
              <p className="text-gray-600 text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;