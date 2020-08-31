  
import React, {useState} from 'react';
import Form from './Form';
import {loadStripe} from '@stripe/stripe-js'
import {useStripe, useElements, CardElement, Elements} from '@stripe/react-stripe-js';
function HomePage() {
    const stripePromise=loadStripe('pk_test_51HKVO4AfnE0MoBcQ2uDvbEhSDa52pfq8KvxYV05DEa71moANSFH68w321BhMyO28Xw5Ue0Z4kRO7m3EAWQk9joAm009a9w9Ryy')
  return (
    <Elements stripe={stripePromise}>
        <Form/>
    </Elements>
  );
}

export default HomePage;