import React, { useState } from "react";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, most posture correctors are designed to fit a wide range of ages and body types with adjustable straps.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Consistent use can help reduce discomfort, improve posture, and build awareness of proper alignment.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some models include smart posture sensors and vibration alerts to notify you when slouching.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can sign up for restock notifications through email or SMS depending on your preference.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 rounded-2xl bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-600 mt-3">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 ${
                isOpen
                  ? "bg-teal-50 border-teal-300"
                  : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center px-4 py-4 text-left font-medium text-gray-700"
              >
                <span>{faq.question}</span>
                <FiChevronDown
                  className={`text-xl transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-teal-600" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-4 pb-4 text-gray-600 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* More FAQ Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all">
          See More FAQ’s
          <span className="bg-black text-white p-2 rounded-full">
            <FiArrowUpRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default FAQ;
