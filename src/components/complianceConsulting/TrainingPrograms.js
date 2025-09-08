import React from "react";
import { TRAINING_PROGRAMS_DATA } from "../../constants/ComplianceConsultingData";

const TrainingPrograms = React.memo(() => {
  return (
    <section className="py-16 bg-blue-600 text-white" aria-labelledby="training-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="training-title" className="text-3xl font-bold mb-4">
            {TRAINING_PROGRAMS_DATA.title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {TRAINING_PROGRAMS_DATA.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TRAINING_PROGRAMS_DATA.programs.map((program, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4" role="img" aria-label={program.title}>{program.icon}</div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-blue-100">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TrainingPrograms.displayName = "TrainingPrograms";

export default TrainingPrograms;