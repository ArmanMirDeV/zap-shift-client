import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
    return (
      <div className="m-15 text-center text-secondary" >
        <h3 className="text-3xl font-bold" > We've helped thousands of sales teams</h3>

        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={50}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide className="mt-15" key={index}>
              <img src={logo} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Brands;
