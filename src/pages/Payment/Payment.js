import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()
    const {Mobile,price} = booking;

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK );
   
 if(navigation.state === "loading"){
  return <Loading></Loading>
 }
    
    return (
        <div>
            <h2 className='text-3xl mb-4'>Please Pay for {Mobile}</h2><p className="text-xl">
        Please pay <strong>${price}</strong> for your product.
      </p>
      <div className='w-96 mt-8'>
      <Elements stripe={stripePromise}>
      <CheckoutForm booking = {booking}/>
    </Elements>
      </div>
        </div>
    );
};

export default Payment;