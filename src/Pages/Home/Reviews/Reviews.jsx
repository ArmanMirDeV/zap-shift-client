import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div>
      <div className="text-center text-secondary">
        <h3 className="text-3xl font-bold mt-15 ">Review</h3>
        <p className="mt-10 text-xl">
          A comprehensive customer review summarizing their delivery experience,
          communication flow, and overall satisfaction.
        </p>
      </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          scale: 0.75,

          slideShadows: true,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide className="mt-15" key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
