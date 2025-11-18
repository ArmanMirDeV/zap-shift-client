import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const {
    userName,
    ratings,
    review: reviewText,
    user_photoURL,
    date,
  } = review;

  return (
    <div className="max-w-md p-6 rounded-xl bg-white shadow-sm border border-gray-100 ">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-teal-300 text-3xl mb-3" />

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed">{reviewText}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        {user_photoURL ? (
          <img
            src={user_photoURL}
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-teal-700" />
        )}

        <div>
          <h3 className="font-semibold text-teal-900">{userName}</h3>
          <p className="text-gray-500 text-sm">
            {ratings} ★ • {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
