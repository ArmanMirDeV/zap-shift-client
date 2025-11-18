import { useState } from "react";

export default function AboutUs() {
const tabs = [
  {
    id: "story",
    label: "Story",
    content:
      "We began with a simple promise: to make parcel delivery fast, reliable, and stress-free — a promise that came from noticing how complicated and uncertain deliveries often felt for everyday people. What started as a small initiative with a handful of couriers has now grown into a trusted logistics network used by thousands across the country. In the early days, we focused on building a service that prioritized human connection: clear communication, honest updates, and dedicated support. As demand increased, we scaled thoughtfully — adding smarter routing systems, real-time tracking technology, and well-trained delivery teams who genuinely care about every package they handle. Our journey has been shaped by customer feedback, consistent improvement, and a mission to remove the stress from sending or receiving parcels. Today, we stand as a service that blends modern tech with personal commitment, ensuring every delivery feels simple, transparent, and dependable.",
  },
  {
    id: "mission",
    label: "Mission",
    content:
      "Our mission is to transform delivery into a seamless and reassuring experience for everyone — individuals, small businesses, and large organizations alike. We aim to bring more transparency, speed, and reliability into logistics by using smart technology and a refined operational process. Every customer should know exactly where their package is, when it will arrive, and whom to contact if they need help. Beyond speed, our mission focuses on building trust, reducing delivery anxiety, and offering solutions that genuinely make life easier. We continuously explore better routing, eco-friendly practices, and user-friendly systems that enhance convenience. At the heart of our mission is consistency: delivering on time, every time, with accuracy and care. We believe that strong logistics create stronger communities, and we work daily to keep that promise alive.",
  },
  {
    id: "success",
    label: "Success",
    content:
      "Our success is built on trust — trust we’ve earned through consistent on-time deliveries, clear communication, and a commitment to doing things the right way. Over the years, we’ve developed a highly efficient logistics workflow that reduces delays, minimizes errors, and ensures every customer experience meets our quality standards. Businesses rely on us because we help them operate smoothly, while individuals choose us because we remove the uncertainty that usually comes with parcel shipping. Success for us isn’t just numbers; it’s the relationships we’ve built with the people who use our service daily. We measure success by customer satisfaction, repeat usage, and the confidence our clients place in our system. As we continue to expand, we stay grounded in the values that helped us grow: reliability, transparency, innovation, and customer-first service. With each delivery completed and every challenge solved, we strengthen the foundation of our long-term success.",
  },
  {
    id: "team",
    label: "Team & Others",
    content:
      "Behind every successful delivery is a team that works tirelessly to make things happen. Our people are the heart of our service — logistics managers who plan routes with precision, support specialists who assist customers with care, tech developers who build the systems powering our platform, and delivery partners who ensure every package reaches its destination safely and on time. Each team member plays a crucial role in maintaining the quality and reliability we’re known for. We believe in collaboration, continuous learning, and a culture where everyone feels responsible for customer satisfaction. Beyond the team, we also partner with local businesses, riders, and technology providers to create a strong and scalable network. These collaborations allow us to improve our reach, increase efficiency, and respond quickly to customer needs. Together, our people and partners form a powerful ecosystem that keeps us growing, evolving, and delivering excellence every single day.",
  },
];


  const [active, setActive] = useState("story");

  return (
    <div className="w-full  max-w-5xl mx-auto py-10 px-4">
      {/* Header */}
      <h2 className="text-4xl  font-bold text-secondary mb-2">About Us</h2>
      <p className="text-gray-600 mb-8 max-w-xl">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* Tabs */}
      <div className="flex gap-8 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`text-lg font-medium pb-1 transition-colors ${
              active === tab.id
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 leading-relaxed text-lg">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  );
}
