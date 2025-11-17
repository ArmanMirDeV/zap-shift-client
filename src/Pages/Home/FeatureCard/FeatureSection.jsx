import React from "react";
import FeatureCard from "./FeatureCard";

import trackingImg from "../../../assets/live-tracking.png";
import deliveryImg from "../../../assets/safe-delivery.png";
import supportImg from "../../../assets/safe-delivery.png";

const FeaturesSection = () => {
  const features = [
    {
      image: trackingImg,
      title: "Live Parcel Tracking",
      text: "Stay updated in real-time with our parcel tracking feature. Monitor your shipment from pick-up to delivery.",
    },
    {
      image: deliveryImg,
      title: "100% Safe Delivery",
      text: "Your parcels are handled with utmost care and delivered securely every time.",
    },
    {
      image: supportImg,
      title: "24/7 Call Center Support",
      text: "Our dedicated team is available around the clock to assist with any questions or delivery updates.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 border-t-2 border-dotted border-gray-400 border-b-2  border-gray-400 space-y-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          image={feature.image}
          title={feature.title}
          text={feature.text}
          isLast={index === features.length - 1}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
