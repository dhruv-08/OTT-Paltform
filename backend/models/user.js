var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    admin:   {
        type: Boolean,
        default: false,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    list:[]
});

User.plugin(passportLocalMongoose);
module.exports=mongoose.model('User',User);
