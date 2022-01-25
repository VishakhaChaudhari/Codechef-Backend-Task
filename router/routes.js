const express = require('express');
const { userdbs, visits } = require('../models/model');
const bodyparser = require('body-parser');
const route = express.Router();
route.use(bodyparser.urlencoded({extended:true}))



route.get('/', (req, res) => {
    res.render('login.ejs')
})

route.get('/login', (req, res) => {
    res.render('login.ejs')
   

})




route.get('/count', (req, res,next) => {
var id = '61ef84fdb667bb7a2ab6db8a';
  visits.findByIdAndUpdate(id,{ $inc: { counter: 1 } },
  function (err, data) {
    if (err){
      console.log(err)
            }
    else{
            res.render('dashboard.ejs',{counter:data})
        }
    });
})

route.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs',{counter:visits})
})



route.post('/login',async(req,res) => {
    try{
      const email = req.body.email;
      const password = req.body.password;
  
       const data = await userdbs.findOne({email:email});
  
       res.render('details',{users:data})
      console.log(data);
    } catch(error){
      console.log(error);
  
    }
  
    
    
  })
    
module.exports = route;