var express = require('express');
var router = express.Router();
var User=require('../models/user');
var bodyParser=require('body-parser');
var passport=require('passport');
var nodemailer=require('nodemailer');
const stripe = require('stripe')('sk_test_51HKVO4AfnE0MoBcQjLsMVIqWxJ5xz1ax2XS9enr30OlbbilhdZ5p7CKZjXf1z9FeuQq2YuIsfJTFpi4gTe83Jg0o000R5HBLmW');
const { authenticate } = require('passport');
/* GET users listing. */
router.use(bodyParser.json());
require('dotenv').config();

router.post('/pay', async (req, res) => {
  const {email} = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000,
      currency: 'usd',
      metadata: {integration_check: 'accept_a_payment'},
      receipt_email: email,
    });
    res.json({'client_secret': paymentIntent['client_secret']})
})
router.post('/sub',async(req,res)=>{
  const {email,payment_method}=req.body;
  const customer= await stripe.customers.create({
    payment_method:payment_method,
    email:email,
    invoice_settings:{
      default_payment_method:payment_method,
    },
  });
  const subscription=await stripe.subscriptions.create({
    customer:customer.id,
    items:[{price:'price_1HM8cdAfnE0MoBcQ4FCLV2Kd'}],
    expand: ['latest_invoice.payment_intent'],
  });
  const status=subscription['latest_invoice']['payment_intent']['status']
  const client_secret=subscription['latest_invoice']['payment_intent']['client_secret']
  User.find({username:req.session.passport.user})
  .then((user)=>{
    if(user){
      User.update({username:req.session.passport.user},{
        sub:subscription.id,
      }, function(err, affected, resp) {
        console.log(resp);
     });
    }
  });
  res.json({'client_secret':client_secret,'status':status});
 
})

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup', (req, res, next) => {
  const user=new User({username: req.body.username,email:req.body.email})
  User.register(user, 
    req.body.password, (err, user) => {
      console.log("hehe");
    if(err) {
      console.log(err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      console.log(user);
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      });
    }
  });
});
router.get("/movlist",(req,res,next)=>{
  User.find({username:req.session.passport.user})
  .then((user)=>{
    res.send(user);
  })
})
router.post('/dellist',(req,res,next)=>{
  User.findOne({username:req.session.passport.user})
  .then((user)=>{
    User.update({username:req.session.passport.user},{
       $pull: { "list" : { id: req.body.movie.id } },
    }, function(err, affected, resp) {
      console.log(resp);
   });
  })
});
router.post("/list",(req,res,next)=>{
  User.find({username:req.session.passport.user})
  .then((user)=>{
    if(user){
      console.log(user.list);
      User.update({username:req.session.passport.user},{
        $push:{"list":req.body.e}
      }, function(err, affected, resp) {
        console.log(resp);
     });
    }
  });
});
router.get("/profile",(req,res,next)=>{
  User.find({username:req.session.passport.user})
  .then((user)=>{
    res.send(user);
  })
})
router.post('/login', (req, res) => {
  User.findOne({username:req.body.username})
  .then((user)=>{
      if(user){
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          if(user.sub!=='empty'){
            async function fun(){
              const subscription =await stripe.subscriptions.retrieve(
                user.sub
              );
              if(subscription.plan.active===true){
                res.json({success: true, status:'true'});
              }
              else{
                res.json({success: true, status:'false'});
              }
            }
          fun();
          }
          else{
            res.json({success: true, status:'false'});
          }
        });
      }
      else{
        res.statusCode = 401;
         res.setHeader('Content-Type', 'application/json');
        res.json({success:false});
      }
  })
});
router.get("/ses",(req,res,next)=>{
  res.send(req.session.passport);
})
router.post('/updatePassword',(req,res,next)=>{
    User.findOne({username:req.session.passport.user})
    .then((user)=>{
      user.changePassword(req.body.oldpass,req.body.newpass,function(err){
        if(err){
          res.send(err);
        }
        user.save();
        res.send("DONE!!");
      });
      })
      .catch((err)=>next(err));
  });
router.get('/logout',(req,res,next)=>{
  req.session.destroy();
  res.clearCookie('session_id');
});
module.exports = router;
