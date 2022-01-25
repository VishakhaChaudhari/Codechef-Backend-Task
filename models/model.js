const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({

    name:String,
    email:String,
    gender:String,
    mobileno:String,
    password:String
    
});
 


let visitSchema = new mongoose.Schema({

    counter:Number
},{timestamps:true});



const userdbs = mongoose.model('userdbs',userSchema);
const visits = mongoose.model('visits',visitSchema);


module.exports = {
    userdbs,visits
}