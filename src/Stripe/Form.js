import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CardInput from './CardInput';
import {useStripe, useElements, CardElement, Elements} from '@stripe/react-stripe-js';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      paddingTop:"33%",
      // paddingLeft:"16%"
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
  const history = useHistory();
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
        const {client_secret,status}=res.data;
        if(status==='succeeded'){
            console.log('Subscribed Successfully!');
            history.replace("/home",null);
        }
      }
      
  }
    return (
      <header style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/head.jpg`})`,boxShadow:" inset 900px 2px 500px 2px #111,inset -141px 3px 175px 15px",height:"100vh",backgroundSize:"cover"}}>
        <Grid container>
          <Grid item xs={5}>
              <div style={{color:"white",paddingTop:"38%",paddingLeft:"4%"}}><span style={{fontSize:"50px"}}>Welcome to Movies Talk</span><br/><span style={{fontSize:"20px",fontWeight:"lighter",letterSpacing:"3px",width:"500px",lineHeight:"30px"}}>Get commercial-free access to exclusive hit series, star-studded movies and more - there's something for every mood in just ₹100</span></div>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
          <div className={classes.root}>
              <Card >
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
                <Button variant="contained" style={{width:"500px"}} color="secondary" className={classes.button} onClick={handleSub}>
                  Subscription
                </Button>
              </div>
            </CardContent>
          </Card></div>
          </Grid>
        </Grid>
        
    </header>
    )
}

export default Form
