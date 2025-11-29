import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      <div className="max-w-lg w-full bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-8 animate-fadeIn border border-green-100">
        {/* Success icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-4xl shadow-lg">
            ✓
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-green-700">
          Payment Successful 
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Thank you! Your payment has been processed.
        </p>

        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200">
            <p className="text-gray-700 font-semibold">Transaction ID</p>
            <p className="text-green-600 font-bold break-all">
              {paymentInfo.transactionId || "Loading..."}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <p className="text-gray-700 font-semibold">Parcel Tracking ID</p>
            <p className="text-blue-600 font-bold break-all">
              {paymentInfo.trackingId || "Loading..."}
            </p>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
          >
            Go to Home
          </a>
        </div>
      </div>

      {/* Fade-in animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default PaymentSuccess;
