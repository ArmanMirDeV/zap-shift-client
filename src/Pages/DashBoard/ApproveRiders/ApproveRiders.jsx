import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiUserCheck } from "react-icons/fi";
import { FaTrashAlt, FaUserTimes } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  const [selectedRider, setSelectedRider] = useState(null); // modal

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  // Approve
  const handleApproval = (rider) => {
    const updateInfo = { status: "Approved", email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Approved Successfully",
          showConfirmation: false,
          timer: 2000,
        });
        setSelectedRider(null);
      }
    });
  };

  // Decline
  const handleDecline = async (rider) => {
    try {
      const res = await axiosSecure.patch(`/riders/${rider._id}`, {
        status: "Declined",
      });

      if (res.data.modifiedCount) {
        refetch();
        Swal.fire("Declined!", "The rider has been declined.", "warning");
        setSelectedRider(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Trash
  const handleTrash = async (rider) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This will move the rider to trash!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, trash it!",
      });

      if (!result.isConfirmed) return;

      const res = await axiosSecure.patch(`/riders/${rider._id}`, {
        status: "Trashed",
      });

      if (res.data.modifiedCount) {
        refetch();
        Swal.fire("Trashed!", "The rider has been moved to trash.", "success");
        setSelectedRider(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-4xl text-secondary font-bold p-4">
        Riders Pending Approval:{" "}
        <span className="text-red-800">{riders.length}</span>
      </h2>

      <div className="overflow-x-auto p-4">
        <table className="table table-zebra w-full">
          <thead className="bg-gray-200 text-gray-900">
            <tr>
              <th>#</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id} className="hover:bg-gray-100">
                <th>{index + 1}</th>

                <td>
                  <span
                    className={`px-3 py-1 rounded font-semibold text-sm ${
                      rider.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : rider.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }
    `}
                  >
                    {rider.status}
                  </span>
                </td>
                <td>{rider.workStatus}</td>
                <td>{rider.fullName}</td>
                <td>{rider.email}</td>
                <td>{rider.phone}</td>

                <td>
                  <button
                    onClick={() => setSelectedRider(rider)}
                    className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700"
                  >
                    <AiOutlineEye size={18} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {selectedRider && (
        <div className="fixed inset-0  bg-opacity-30 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl p-6 rounded shadow-lg overflow-y-auto max-h-[80vh]">
            <h2 className="text-2xl font-bold mb-4">
              Rider Details – {selectedRider.fullName}
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <p>
                <b>Email:</b> {selectedRider.email}
              </p>
              <p>
                <b>Phone:</b> {selectedRider.phone}
              </p>
              <p>
                <b>Address:</b> {selectedRider.address}
              </p>
              <p>
                <b>Region:</b> {selectedRider.region}
              </p>
              <p>
                <b>District:</b> {selectedRider.district}
              </p>
              <p>
                <b>NID:</b> {selectedRider.nid}
              </p>
              <p>
                <b>License:</b> {selectedRider.license}
              </p>
              <p>
                <b>Bike Model:</b> {selectedRider.bikeModel}
              </p>
              <p>
                <b>Bike Reg:</b> {selectedRider.bikeReg}
              </p>
              <p>
                <b>Insurance:</b> {selectedRider.insurance}
              </p>
              <p>
                <b>Emergency:</b> {selectedRider.emergencyName}
              </p>
              <p>
                <b>Emergency Phone:</b> {selectedRider.emergencyPhone}
              </p>
              <p>
                <b>Availability:</b> {selectedRider.availability}
              </p>
              <p>
                <b>Night Shift:</b> {selectedRider.nightShift}
              </p>
              <p>
                <b>Bank:</b> {selectedRider.bankName}
              </p>
              <p>
                <b>Account:</b> {selectedRider.bankAccount}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => handleApproval(selectedRider)}
                className="btn bg-green-600 text-white"
              >
                <FiUserCheck /> Approve
              </button>

              <button
                onClick={() => handleDecline(selectedRider)}
                className="btn bg-yellow-600 text-white"
              >
                <FaUserTimes /> Decline
              </button>

              <button
                onClick={() => handleTrash(selectedRider)}
                className="btn bg-red-600 text-white"
              >
                <FaTrashAlt /> Trash
              </button>

              <button
                onClick={() => setSelectedRider(null)}
                className="btn bg-gray-600 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApproveRiders;
