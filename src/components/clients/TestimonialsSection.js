import React from "react";
import { testimonials } from "../../constants/ClientsData";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Partners Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our valued partners about their experience working with Switch Waste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;