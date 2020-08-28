var express = require('express');
var router = express.Router();
var User=require('../models/user');
var bodyParser=require('body-parser');
var passport=require('passport');
var nodemailer=require('nodemailer');
const { authenticate } = require('passport');
/* GET users listing. */
router.use(bodyParser.json());
require('dotenv').config();
/* GET users listing. */
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
        res.json({success: true, status: 'You are successfully logged in!'});
        });
      }
      else{
        res.statusCode = 401;
         res.setHeader('Content-Type', 'application/json');
        res.json({success:false});
      }
  })
});
var em="";
router.post('/forgot',(req,res,next)=>{
  User.findOne({email:req.body.email})
  .then((user)=>{
    var transport=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:process.env.APP_EMAIL,
        pass:process.env.APP_PASS
      }
    });
    var mailOption={
      form:process.env.APP_EMAIL,
      to:user.email,
      subject:'Reset password',
      text:'RESET PASSWORD',
      html:'<a href="http://localhost:3000/set">localhost:3000/set</a>'
    };
    transport.sendMail(mailOption,function(err){
      if(err){
        console.log(err);
        res.end('DONE!');
      }
      else{
        console.log('Email sent!!');
        res.end('DONE!');
      }
    });
    em=req.body.email;
  })
  .catch((err)=>{
    next(err);
  });
});
router.post('/set',(req,res,next)=>{
  User.findOne({email:em})
  .then((user)=>{
    user.setPassword(req.body.newpass,function(err){
      if(err){
        res.send(err);
      }
      user.save();
      res.send("DONE!!");
      em="";
    });
})
.catch((err)=>next(err));
});
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
