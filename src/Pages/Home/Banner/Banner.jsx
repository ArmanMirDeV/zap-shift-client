import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FiArrowUpRight } from "react-icons/fi";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="relative">
      {/* Carousel */}
      <Carousel
        autoPlay
        interval={2500}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={bannerImg1} className="w-full object-cover" />
        </div>
        <div>
          <img src={bannerImg2} className="w-full object-cover" />
        </div>
        <div>
          <img src={bannerImg3} className="w-full object-cover" />
        </div>
      </Carousel>

      {/* Buttons */}
      <div
        className="
          flex items-center gap-4 z-20
          
          /* Small screens: below carousel */
          sm:flex-col sm:w-full sm:px-4 sm:mt-4 sm:static

          /* Medium screens: slightly higher */
          md:absolute md:left-10 md:bottom-24 md:flex-row

          /* Large screens: even higher */
          lg:bottom-32
        "
      >
        {/* Track Your Parcel */}
        <button
          className="
            flex items-center gap-3 bg-lime-300 text-gray-900 font-medium
            px-6 py-3 rounded-full transition-all hover:bg-lime-400 cursor-pointer

            sm:px-4 sm:py-2 sm:text-sm sm:gap-2
          "
        >
          Track Your Parcel
          <span
            className="
              w-8 h-8 rounded-full bg-black text-white flex items-center justify-center
              sm:w-6 sm:h-6
            "
          >
            <FiArrowUpRight className="sm:text-[14px]" />
          </span>
        </button>

        {/* Be A Rider */}
        <button
          className="
            px-6 py-3 rounded-full border border-gray-400 text-gray-700 font-medium
            hover:bg-gray-100 transition-all cursor-pointer

            sm:px-4 sm:py-2 sm:text-sm
          "
        >
          Be A Rider
        </button>
      </div>
    </div>
  );
};

export default Banner;
