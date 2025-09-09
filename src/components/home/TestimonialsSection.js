import React, { memo } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Thabo Mthembu",
      role: "Medical Director",
      company: "Advanced Renal Care",
      content: "Switch Waste has been an invaluable partner for our dialysis centers across Johannesburg. Their reliable service and strict compliance with medical waste regulations give us complete peace of mind in managing our specialized healthcare waste.",
      rating: 5,
      avatar: "/assets/partners/avanced.renal.care_client.jpg"
    },
    {
      id: 2,
      name: "Dr. Zanele Nkosi",
      role: "Quality Manager",
      company: "Hersol Laboratories",
      content: "Their professional approach to laboratory waste management and commitment to safety protocols aligns perfectly with our quality standards. Switch Waste ensures our pathology waste is handled with the highest level of care and compliance.",
      rating: 5,
      avatar: "/assets/partners/hersol.laboritories-logo-client.png"
    },
    {
      id: 3,
      name: "Sipho Dlamini",
      role: "Operations Manager",
      company: "Pinnacle Hygiene Company",
      content: "Switch Waste's integrated waste and hygiene management solutions have transformed our service delivery. Their reliable collection schedules and professional team ensure we maintain the highest standards for our clients.",
      rating: 5,
      avatar: "/assets/partners/pinnacle.hygiene.company.logo.client.jpg"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative py-16 bg-white" aria-labelledby="testimonials-heading">
      {/* Grey overlay for consistency */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-5xl font-bold text-blue-600 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our waste management services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 shadow-sm">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.company} logo`}
                    className="w-full h-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-blue-50 rounded-lg px-6 py-3">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-800 font-medium">Trusted by 50+ businesses across Johannesburg</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TestimonialsSection);