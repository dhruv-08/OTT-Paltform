var express = require('express');
var router = express.Router();
var User=require('../models/user');
var bodyParser=require('body-parser');
var passport=require('passport');
var nodemailer=require('nodemailer');
const { authenticate } = require('passport');
/* GET users listing. */
router.use(bodyParser.json());
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup', (req, res, next) => {
  const user=new User({username: req.body.username,admin:req.body.admin,email:req.body.email})
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
  User.find({username:Logname})
  .then((user)=>{
    res.send(user);
  })
})
router.post('/dellist',(req,res,next)=>{
  User.findOne({username:Logname})
  .then((user)=>{
    User.update({username:Logname},{
      list:req.body.arr
    }, function(err, affected, resp) {
      console.log(resp);
   });
  })
});
router.post("/list",(req,res,next)=>{
  
  User.find({username:Logname})
  .then((user)=>{
    if(user){
      User.update({username:Logname},{
        $push:{"list":req.body.e}
      }, function(err, affected, resp) {
        console.log(resp);
     });
    }
  });
});
router.get("/profile",(req,res,next)=>{
  User.find({username:Logname})
  .then((user)=>{
    res.send(user);
  })
})
var Logname="t";
router.post('/login', (req, res) => {
  User.findOne({username:req.body.username})
  .then((user)=>{
      if(user){
        Logname=req.body.username;
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
router.post('/updatePassword',(req,res,next)=>{
    User.findOne({username:Logname})
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
