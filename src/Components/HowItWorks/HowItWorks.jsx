import React from "react";
import icon from "../../assets/bookingIcon.png";

const steps = [
  {
    title: "Booking Pick & Drop",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon,
  },
  {
    title: "Cash On Delivery",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon,
  },
  {
    title: "Delivery Hub",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon,
  },
  {
    title: "Booking SME & Corporate",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full rounded-2xl bg-gray-100 py-16 px-6">
      <div>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          How it Works
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                group
                bg-white text-gray-800 
                rounded-2xl p-8 shadow-sm transition-all duration-300 cursor-pointer
                
                hover:bg-yellow-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.05]
              "
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-12 h-12 mb-6 transition-all duration-300 group-hover:scale-110"
              />

              <h3 className="text-lg font-semibold mb-3 transition group-hover:text-gray-900">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed transition group-hover:text-gray-800">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
