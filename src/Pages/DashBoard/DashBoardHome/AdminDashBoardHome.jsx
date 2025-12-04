import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Legend, Pie, PieChart, Tooltip } from "recharts";


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



  const getPieChartData = data => {
    return data.map(item => {
    return {
      name: item.status,
      value: item.count,
    };
    })
  }



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

              <div className="stat-desc text-sm opacity-80">Description</div>
            </div>
          ))}
        </div>
      )}

      {/* Pie Chart */}

      <div className="w-[600px] mx-auto border-2 border-secondary flex items-center justify-center bg-amber-50 rounded-4xl mt-20 h-[400px]">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 2,
          }}
          responsive
        >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={getPieChartData(deliveryStats)}
            cx="50%"
            cy="100%"
            outerRadius="120%"
            fill="#8884d8"
            label
            isAnimationActive={true}
          />
          <Legend>

          </Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default AdminDashBoardHome;

// 7.17 sec 