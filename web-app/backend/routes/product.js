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
        let product = new Product(req.body)
        const saved = await product.save()
        console.log(saved)
        res.json(saved)
        
    } catch(err) {
        console.log(err)
    }
})

//updateproduct put
router.put('/updateproduct/:id', async(req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if(!product) {
            res.status(400).send('Bad request, no such product exists')
        } else {
            product = await Product.findByIdAndUpdate(req.params.id, req.body)
            res.send("Updated the product information")
        }
    } catch(err) {
        console.log(err)
    }
})

//deletecharity delete
router.delete('/deleteproduct/:id', async(req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if(!product) {
            res.status(400).send('Bad request, no such product exists')
        } else {
            product = await Product.findByIdAndDelete(req.params.id)
            res.send("Product deleted successfully")
        }
    } catch(err) {
        console.log(err)
    }
})

module.exports = router