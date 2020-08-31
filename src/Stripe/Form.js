import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CardInput from './CardInput';
import {useStripe, useElements, CardElement, Elements} from '@stripe/react-stripe-js';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      margin: '35vh auto',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'flex-start',
    },
    div: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'flex-start',
      justifyContent: 'space-between',
    },
    button: {
      margin: '2em auto 1em',
    },
  });
function Form() {
    const classes = useStyles();
  const [email, setEmail] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  
    //   console.log(new Date('Mon Aug 31 2020 15:14:28 GMT+0530')==new Date('Mon Aug 31 2020 15:14:28 GMT+0530'));
  
  const handleSubmit = async (event) => {
    if (!stripe || !elements) {
      return;
    }
    
    const res = await axios.post('http://localhost:5000/pay', {email: email});

    const clientSecret = res.data['client_secret'];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Money is in the bank!');
      }
    }
  };
  const handleSub=async(event)=>{
    if (!stripe || !elements) {
        return;
      }
      const result=await stripe
      .createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          email: 'dgargdhruv@gmail.com',
        },
      })
      if(result.error){
          console.log(result.error.message);
      }
      else{
        const res=await axios.post('/sub',{'payment_method':result.paymentMethod.id,'email':email})
        console.log(res.data);
        console.log("hello");
        const {client_secret,status}=res.data;
        if(status==='succeeded'){
            console.log('You got the money!');
        }
      }
      
  }
    return (
        <Card className={classes.root}>
      <CardContent className={classes.content}>
        <TextField
          label='Email'
          id='outlined-email-input'
          helperText={`Email you'll recive updates and receipts on`}
          margin='normal'
          variant='outlined'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <CardInput />
        <div className={classes.div}>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
            Pay
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleSub}>
            Subscription
          </Button>
        </div>
      </CardContent>
    </Card>
    )
}

export default Form
