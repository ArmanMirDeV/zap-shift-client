import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiUserCheck } from "react-icons/fi";
import { FaTrashAlt, FaUserTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handleApproval = (rider) => {
    const updateInfo = { status: "Approved" , email: rider.email};
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
      }
    });
  };

  const handleDecline = async (rider) => {
    try {
      const res = await axiosSecure.patch(`/riders/${rider._id}`, {
        status: "Declined",
      });

      if (res.data.modifiedCount) {
        refetch();
        Swal.fire("Declined!", "The rider has been declined.", "warning");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
              <th>Status</th>

              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Region</th>
              <th>District</th>
              <th>NID</th>
              <th>License</th>
              <th>License Expiry</th>
              <th>Vehicle Type</th>
              <th>Bike Model</th>
              <th>Bike Reg</th>
              <th>Insurance</th>
              <th>Emergency Name</th>
              <th>Emergency Phone</th>
              <th>Availability</th>
              <th>Night Shift</th>
              <th>Bank Name</th>
              <th>Bank Account</th>
              <th>Mobile Banking</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id} className="hover:bg-gray-100">
                <th>{index + 1}</th>

                <td className="text-center">
                  {/* Status Badge (Only visible when status !== pending) */}
                  {rider.status !== "pending" && (
                    <p
                      className={`px-3 py-1 font-bold text-center rounded inline-block mb-2 ${
                        rider.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : rider.status === "Declined"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }
      `}
                    >
                      {rider.status}
                    </p>
                  )}

                  {/* Actions - Only show when rider is pending */}
                  {rider.status === "pending" && (
                    <div className="flex gap-2 justify-center mt-2">
                      <button
                        onClick={() => handleApproval(rider)}
                        className="btn btn-sm hover:bg-green-600 rounded-full"
                        title="Approve"
                      >
                        <FiUserCheck />
                      </button>

                      <button
                        onClick={() => handleDecline(rider)}
                        className="btn btn-sm hover:bg-yellow-600 rounded-full"
                        title="Decline"
                      >
                        <FaUserTimes />
                      </button>

                      <button
                        onClick={() => handleTrash(rider)}
                        className="btn btn-sm hover:bg-red-600 rounded-full"
                        title="Trash"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  )}
                </td>

                <td>{rider.fullName}</td>
                <td>{rider.email}</td>
                <td>{rider.phone}</td>
                <td>
                  {rider.address}, {rider.postCode}
                </td>
                <td>{rider.region}</td>
                <td>{rider.district}</td>
                <td>{rider.nid}</td>
                <td>{rider.license}</td>
                <td>{rider.licenseExpiry}</td>
                <td>{rider.vehicleType}</td>
                <td>{rider.bikeModel}</td>
                <td>{rider.bikeReg}</td>
                <td>{rider.insurance}</td>
                <td>{rider.emergencyName}</td>
                <td>{rider.emergencyPhone}</td>
                <td>{rider.availability}</td>
                <td>{rider.nightShift}</td>
                <td>{rider.bankName}</td>
                <td>{rider.bankAccount}</td>
                <td>{rider.mobileBanking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
