const express = require('express');
const Order = require('../models/Order');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');


// Route 1 add cart to db POST "/api/order/createorder" --login required
router.post('/createorder', fetchuser, async(req,res) => {
    const err = validationResult(req);
    if(!err.isEmpty()) {
        return res.status(400).send(err)
    }
    try {
        let order =  new Order(req.body);
        const savedOrder = await order.save()
        console.log('order saved to database');
        res.json(savedOrder)
    } catch (err) {
        console.error(err)
    }
})

//Route 2 get order data by username GET "api/order/fetchorders"  --login required
router.get('/fetchorders', fetchuser, async(req,res)=> {
    try{
        const order = await Order.find({username:req.header('username')});
        res.send(order);  
    } catch(err) {
        console.error(err.message)
        return res.status(500).send('internal server error')
    }
})

module.exports = router;