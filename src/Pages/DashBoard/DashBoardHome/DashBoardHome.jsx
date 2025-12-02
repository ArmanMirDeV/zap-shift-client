import React from "react";
import useRole from "../../../Hooks/useRole";
import Loading from "../../../Components/Loading/Loading";
import AdminDashBoardHome from "./AdminDashBoardHome";
import RiderDashBoardHome from "./RiderDashBoardHome";
import UserDashBoardHome from "./UserDashBoardHome";

const DashBoardHome = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loading />;
  }
  if (role == "admin") {
    return <AdminDashBoardHome />;
  } else if (role == "rider") {
    return <RiderDashBoardHome />;
  } else {
    return <UserDashBoardHome />;
  }
};

export default DashBoardHome;
