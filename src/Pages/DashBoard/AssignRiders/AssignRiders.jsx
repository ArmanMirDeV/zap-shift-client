import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssignRiders = () => {
  const axiosSecure = useAxiosSecure();
  const riderModalRef = useRef()

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });

  const openAssignRiderModal = (parcel) => {
    

    riderModalRef.current.showModal();
    
  };



  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-secondary mb-6">
        Assign Riders ({parcels.length})
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-xl bg-white">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
              <th>#</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Cost</th>
              <th>Pickup District</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Assign</th>
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
                  <button
                    onClick={() => openAssignRiderModal(parcel)}
                    className="px-4 py-2 bg-primary text-black text-sm rounded-lg shadow hover:text-white hover:bg-secondary transition-all"
                  >
                    Assign Rider
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

    
      <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;

