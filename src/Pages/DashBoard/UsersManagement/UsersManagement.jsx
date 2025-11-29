import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

    const handleMakeUser = (user) => {
      
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      console.log(res.data);

      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} marked Admin Successfully`,
          showConfirmation: false,
          timer: 2000,
        });
      }
    });
    };
    

    const handleRemoveAdmin = user => {
        const roleInfo = { role: 'user' }
        
        axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {

          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.displayName} Removed Admin Successfully`,
              showConfirmation: false,
              timer: 2000,
            });
          }
        });
    }

  return (
    <div>
      <h3 className="text-4xl p-4 font-bold text-secondary">
        Users Management ({users.length})
      </h3>

      <div className="overflow-x-auto p-4">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Sl.</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>User Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id || index} className="hover:bg-base-100">
                <td>{index + 1}</td>

                {/* USER INFO */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            user.photoURL ||
                            "https://i.ibb.co/5Fk2vbZ/default-avatar.png"
                          }
                          alt={user.displayName}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm opacity-50">
                        {user.role?.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </td>

                {/* EMAIL */}
                <td className="font-medium">{user.email}</td>

                {/* ROLE */}
                <td>
                  <span
                    className={`badge ${
                      user.role === "admin" ? "badge-success" : "badge-info"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* DETAILS BUTTON */}
                <td>
                  {user.role === "admin" ? (
                    <button  onClick={() => handleRemoveAdmin(user)} className="btn btn-ghost  bg-red-400 rounded-2xl" >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeUser(user)}
                      className="btn btn-ghost bg-green-400"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>

                <td>Action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
