import React, { useEffect, memo } from "react";
import { useIntersectionObserver, useAnimatedCounter } from "../../hooks";

const StatsSection = memo(() => {
  const { ref: statsRef, isIntersecting: statsVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const yearsCounter = useAnimatedCounter(20, 2000, false);
  const complianceCounter = useAnimatedCounter(100, 2000, false);
  const supportCounter = useAnimatedCounter(24, 2000, false);
  const clientsCounter = useAnimatedCounter(500, 2000, false);

  useEffect(() => {
    if (statsVisible) {
      yearsCounter.startAnimation();
      setTimeout(() => complianceCounter.startAnimation(), 200);
      setTimeout(() => supportCounter.startAnimation(), 400);
      setTimeout(() => clientsCounter.startAnimation(), 600);
    }
  }, [statsVisible, yearsCounter, complianceCounter, supportCounter, clientsCounter]);

  return (
    <section ref={statsRef} className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-4xl font-bold mb-2">{yearsCounter.count}+</div>
            <p className="text-blue-100">Years Experience</p>
          </div>
          <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="text-4xl font-bold mb-2">{complianceCounter.count}%</div>
            <p className="text-blue-100">Compliance Rate</p>
          </div>
          <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <div className="text-4xl font-bold mb-2">{supportCounter.count}/7</div>
            <p className="text-blue-100">Hour Support</p>
          </div>
          <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            <div className="text-4xl font-bold mb-2">{clientsCounter.count}+</div>
            <p className="text-blue-100">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;