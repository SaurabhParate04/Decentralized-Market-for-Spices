const express = require('express')
const Product = require('../models/Product')
const router = express.Router()

// Route 1 fetchallproducts get
router.get('/fetchallproducts', async(req, res) => {
    try {
        let allProducts = await Product.find();
        res.json(allProducts);
    } catch(error) {
        console.log(error);
    }
})

// Route 2 fetch product from db  GET"api/product/fetchproduct" 
router.get('/fetchproduct', async(req, res) => {
    try {
        let product = await Product.find({category:req.header('category')});
        res.json(product);
    } catch(error) {
        console.log(error);
    }
})

//createproduct post
router.post('/createproduct', async(req, res) => {
    try {
        product = new Product(req.body)
        const saved = await product.save()
        console.log(saved)
        res.json(saved)
        
    } catch(err) {
        console.log(err)
    }
})

module.exports = router