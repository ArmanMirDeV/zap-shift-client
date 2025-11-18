import React from "react";
import topImage from "../../../assets/be-a-merchant-bg.png"; // your top background image
import sideImage from "../../../assets/location-merchant.png"; // your right-side illustration

export default function MerchantBanner() {
  return (
    <div className="w-full px-4 py-10">
      <div
        className="rounded-3xl p-10 md:p-14 bg-[#003B3B] relative overflow-hidden"
        style={{
          backgroundImage: `url(${topImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="grid md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div className="z-10">
            <h2 className="text-white font-bold text-3xl md:text-4xl leading-snug">
              Merchant and Customer Satisfaction <br />
              is Our First Priority
            </h2>

            <p className="text-gray-300 mt-4 max-w-md leading-relaxed">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. ZapShift courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="border border-[#C9F74A] text-[#C9F74A] px-8 py-3 rounded-full font-semibold hover:bg-[#C9F74A] hover:text-black transition cursor-pointer">
                Become a Merchant
              </button>

              <button className="border border-[#C9F74A] text-[#C9F74A] px-8 py-3 rounded-full font-semibold hover:bg-[#C9F74A] hover:text-black transition cursor-pointer">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:flex justify-end relative">
            <img
              src={sideImage}
              alt="illustration"
              className="w-[320px] lg:w-[600px] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
