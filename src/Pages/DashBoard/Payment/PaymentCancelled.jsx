import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h2>Payment Is Cancelled. Please Try Again</h2>
            <Link className='btn btn-primary text-black' to="/dashboard/my-parcels" >Try Again</Link>
        </div>
    );
};

export default PaymentCancelled;