  
import React from 'react';
import Form from './Form';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
function HomePage() {
    const stripePromise=loadStripe(process.env.REACT_APP_STRIPE)
  return (
    <Elements stripe={stripePromise}>
        <Form/>
    </Elements>
  );
}

export default HomePage;