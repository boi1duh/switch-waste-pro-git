import React, { memo } from "react";

const StatsCounter = ({ yearsCounter, complianceCounter, supportCounter, clientsCounter, statsVisible }) => {
  return (
    <>
      <div className="py-12 md:py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{yearsCounter.count}+</div>
              <p className="text-sm sm:text-base text-primary-100">Years Experience</p>
            </div>
            <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{complianceCounter.count}%</div>
              <p className="text-sm sm:text-base text-primary-100">Compliance Rate</p>
            </div>
            <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{supportCounter.count}/7</div>
              <p className="text-sm sm:text-base text-primary-100">Hour Support</p>
            </div>
            <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{clientsCounter.count}+</div>
              <p className="text-sm sm:text-base text-primary-100">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(StatsCounter);