import React from "react";
import { missionPoints } from "../../constants/AboutData";

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Switch Waste Management Solutions, we are committed to providing exceptional waste management services that ensure a safe environment free from hazardous waste. We specialize in comprehensive solutions for both healthcare sectors and general waste needs while maintaining strict compliance with all regulations to protect our planet.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission extends beyond simple waste collection. We believe in creating lasting partnerships with our clients, providing them with the knowledge, tools, and support necessary to achieve complete compliance in waste management while minimizing environmental impact.
            </p>
          </div>
          <div>
            <img
              src="/assets/environmental-impact.jpg"
              alt="Environmental sustainability and waste management impact"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/assets/fallback-image.jpg"; // Fallback image
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {missionPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${point.icon} text-blue-600 text-2xl`} aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;