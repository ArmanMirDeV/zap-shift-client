import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-4xl font-bold text-secondary p-3 ">Payment History: {payments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel Info</th>
              <th>Amount</th>
              <th>Transaction</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {payments.map((payment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>$ {payment.amount}</td>
                <td>{payment.transactionId}</td>
                <td className="btn rounded-2xl  btn-secondary hover:btn-primary">Paid</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
