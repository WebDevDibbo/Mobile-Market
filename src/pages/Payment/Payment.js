import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData();
    console.log("booking",data)
    return (
        <div>
            <h2 className='text-3xl mb-4'>Payment</h2>
        </div>
    );
};

export default Payment;