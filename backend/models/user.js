var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    admin:   {
        type: Boolean,
        default: false,
    },
    email:{
        type:String,
        required:true
    },
    list:[],
    sub:{
        type:String,
        default:"empty",
        required:false
    },
    genre:[]
});

User.plugin(passportLocalMongoose);
module.exports=mongoose.model('User',User);
