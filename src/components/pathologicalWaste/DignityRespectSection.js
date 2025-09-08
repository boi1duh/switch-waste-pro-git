import React from "react";
import { DIGNITY_ITEMS } from "../../constants/PathologicalWasteData";

const DignityRespectSection = () => {

  return (
    <section className="py-16 bg-purple-600 text-white" aria-labelledby="dignity-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="dignity-title" className="text-3xl font-bold mb-4">
            Dignity & Respect in Processing
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We handle pathological waste with the utmost dignity and respect, ensuring proper protocols are followed throughout the entire process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DIGNITY_ITEMS.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4" aria-hidden="true">{item.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-purple-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(DignityRespectSection);