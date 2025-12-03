import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdminDashBoardHome = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: deliveryStats = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["delivery-status-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/stats");
      return res.data;
    },
  });

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-secondary mb-6">
        Admin Dashboard
      </h2>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg text-secondary"></span>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-red-500 text-center text-xl">
          Failed to load statistics.
        </div>
      )}

      {/* Stats */}
      {!isLoading && !isError && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveryStats.map((stat, index) => (
            <div
              key={index}
              className="stat shadow-lg bg-base-100 rounded-2xl border border-secondary/20 hover:border-secondary transition-all duration-300"
            >
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-10 w-10 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>

              <div className="stat-title text-2xl uppercase font-semibold">
                {stat._id}
              </div>

              <div className="stat-value text-3xl font-bold text-secondary">
                {stat.count}
              </div>

              <div className="stat-desc text-sm opacity-80">
               Description
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashBoardHome;
