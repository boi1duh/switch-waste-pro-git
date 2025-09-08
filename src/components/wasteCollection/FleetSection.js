import React from "react";
import { fleetData } from "../../constants/WasteCollectionData";

const FleetSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white" aria-labelledby="fleet-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="fleet-title"
            className="text-3xl font-bold mb-4"
          >
            {fleetData.title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {fleetData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fleetData.vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="text-center"
              role="article"
              aria-labelledby={`vehicle-${index}-title`}
            >
              <div className="text-4xl mb-4" role="img" aria-label={vehicle.title}>
                {vehicle.icon}
              </div>
              <h3
                id={`vehicle-${index}-title`}
                className="text-xl font-bold mb-2"
              >
                {vehicle.title}
              </h3>
              <p className="text-blue-100">{vehicle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FleetSection);