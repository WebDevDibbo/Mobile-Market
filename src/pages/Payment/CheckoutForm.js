import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {
    const [cardError,setCardError] = useState('');
    
    const stripe = useStripe();
    const elements = useElements();
    const {price,email,Buyers} = booking;

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
             "Content-Type": "application/json" ,
    
    },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
        setClientSecret(data.clientSecret)});
    }, [price]);


    const handleSubmit = async(event) =>{
     event.preventDefault();
     if(!stripe || !elements){
        return;
     }
     const card = elements.getElement(CardElement);
     if (card === null) {
        return;
      }
      const {error,paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
      });
      if(error){
        console.log(error)
        setCardError(error.message)
      }
      else{
        setCardError('');
      }

      const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: Buyers,
              email : email
            },
          },
        },
      );
      if(confirmError){
        setCardError(confirmError.message);
        return 
      }
      console.log("paymentIntent", paymentIntent);







    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary mt-6 btn-sm' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    <p className='text-red-600 mt-4'>{cardError}</p>
        </div>
    );
};

export default CheckoutForm;