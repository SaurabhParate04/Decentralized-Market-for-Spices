const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');


// Route 1 add cart to db POST "/api/cart/addcart" --nologin required
router.post('/createcart', async(req,res) => {
    const err = validationResult(req);
    if(!err.isEmpty())
    {
        return res.status(400).send(err)
    }
    try {
        let cart = await Cart.findOne({username:req.body.username})
        if(cart) {
            return res.status(400).send('sorry the user cart with the username already exists')
        }

        cart =  new Cart(req.body);
        const savedCart = await cart.save()
        console.log('cart saved to database');
        res.json(savedCart)
    
    } catch (err) {
        console.error(err)
    }
})

//Route 2 update cart data using username PUT "api/cart/updatecart"  --login required
router.put('/updatecart',fetchuser, async(req,res) => {
    const cart = await Cart.findOne({username:req.body.username});
    if (!cart) {
        return res.status(400).send('Bad Request')
    }
    try {
        const newCart = {...req.body}
        const updatedCart = await Cart.findOneAndUpdate({username:req.body.username}, {$set:newCart}, {new:true});
        console.log('user info update sucessfull');
        res.json(updatedCart);

    } catch (error) {
        console.error(error.message)
        return res.status(500).send('internal server error')
    }
    
})

//Route 3 get cart data by username GET "api/cart/fetchitems"  --login required
router.get('/fetchitems', fetchuser, async(req,res)=> {
    try{
        const cart = await Cart.findOne({username:req.body.username});
        res.send(cart);
    } catch(err) {
        console.error(err.message)
        return res.status(500).send('internal server error')
    }
})

module.exports = router;