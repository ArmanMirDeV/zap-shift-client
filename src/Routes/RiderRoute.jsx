import React from 'react';
import Loading from '../Components/Loading/Loading';
import useRole from '../Hooks/useRole';
import useAuth from '../Hooks/useAuth';

const RiderRoute = ({children}) => {
    const { loading, user } = useAuth();
    const { role, roleLoading } = useRole();

    if (loading || !user ||  roleLoading) {
      return <Loading />;
    }
    if (role !== "rider") {
      return <Forbidden />;
    }

    return children;
};

export default RiderRoute;