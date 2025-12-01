import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const CompletedDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`
      );
      return res.data;
    },
  });

  const calculatePayout = (parcel) => {
    if (parcel.senderDistrict === parcel.receiverDistrict) {
      return parcel.cost * 0.8;
    } else {
      return parcel.cost * 0.6;
    }
  };

  return (
    <div>
      <h2 className="text-secondary text-4xl p-4 font-bold">
        Completed Deliveries: {parcels.length}
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-xl bg-white">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
              <th>#</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Cost</th>
              <th>Payout</th>
              <th>Pickup District</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Cash out</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr
                key={parcel._id}
                className="hover:bg-gray-50 transition-all border-b"
              >
                {/* Row count */}
                <td className="font-semibold">{index + 1}</td>

                {/* Sender */}
                <td>
                  <div className="font-bold text-gray-800">
                    {parcel.senderName}
                  </div>
                  <p className="text-sm text-gray-500">{parcel.senderPhone}</p>
                </td>

                {/* Receiver */}
                <td>
                  <div className="font-bold text-gray-800">
                    {parcel.receiverName}
                  </div>
                  <p className="text-sm text-gray-500">
                    {parcel.receiverPhone}
                  </p>
                </td>
                {/* Cost */}
                <td>
                  <div className="font-bold text-gray-800">$ {parcel.cost}</div>
                </td>
                {/*Payout  Cost */}
                <td>
                  <div className="font-bold text-gray-800">$ {calculatePayout(parcel)}</div>
                </td>

                {/* Parcel Pickup district */}
                <td>
                  <p className="font-medium text-gray-700">
                    {parcel.senderDistrict}
                  </p>
                </td>

                {/* Created At */}
                <td>
                  <p className="font-medium text-gray-700">
                    {parcel.createdAt}
                  </p>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        parcel.deliveryStatus === "pending-pickup"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-700"
                      }
                    `}
                  >
                    {parcel.deliveryStatus.replace("-", " ")}
                  </span>
                </td>

                {/* Action Button */}
                <td>
                  <button className="px-4 py-2 bg-primary text-black text-sm rounded-lg cursor-pointer shadow hover:text-white hover:bg-secondary transition-all">
                    Cash Out
                  </button>
                </td>
              </tr>
            ))}

            {parcels.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  No parcels waiting for pickup.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedDeliveries;
