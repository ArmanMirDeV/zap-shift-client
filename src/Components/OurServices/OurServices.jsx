import React from "react";
import icon from "../../assets/service.png";

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon,
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon,
  },
  {
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon,
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
    icon,
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon,
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-secondary text-white py-16 px-6 rounded-3xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Services
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`
                group
                rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer

                bg-white text-gray-800

                hover:bg-yellow-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.05]
              `}
            >
              <img
                src={s.icon}
                alt={s.title}
                className="w-14 h-14 mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
              />

              <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-900 transition">
                {s.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
