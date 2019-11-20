const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const emailController=require('../controllers/emailController');

require('../models/Customer');
const Customer = mongoose.model('customers');

router.post('/', async (req, res) => {
    console.log("AAAAAAAA")
    const existingcustomer = await Customer.findOne({ email: req.body.email })

    if (existingcustomer) {
        res.json({
            success: false,
            message: "User Email already in use. Please enter another one"
        })
        return
    }

    await bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            const customer = new Customer({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hash,
                email: req.body.email
            })
            customer.save().then(() => {
                console.log("SSSSSSSs")
                res.json({
                    success: true,
                    message: "Customer registered" 
                })
            })
        });
    });
    })

 //get all 
router.get('/',(req,res) =>{
    Customer.find((err,docs) =>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving :' +JSON.stringify(err,undefined,2));}
    });
});  

router.delete('/:id/:email',(req,res) =>{

const receiverEmail=req.params.email;
console.log(receiverEmail);
emailController.sendMessage(receiverEmail,"Your Account was deleted");

console.log("AAAAASS");
    Customer.findByIdAndRemove(req.params.id, (err,doc)=>{
      if(!err){res.send(doc);}
      else{ console.log('Error in table Delete :' +JSON.stringify(err,undefined,2));}
    });
    console.log("BBBBBBASS");
}


);


module.exports = router;