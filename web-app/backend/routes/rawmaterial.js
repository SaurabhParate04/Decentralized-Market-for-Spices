const express = require('express')
const AgroProduct = require('../models/RawMaterial')
const router = express.Router()

// Route 1 fetchallagroproducts get
router.get('/fetchallproducts', async(req, res) => {
    try {
        let allAgroProducts = await AgroProduct.find();
        res.json(allAgroProducts);
    } catch(error) {
        console.log(error);
    }
})

// Route 2 fetch product from db  GET"api/agroproduct/fetchproduct" 
router.get('/fetchproduct', async(req, res) => {
    try {
        let product = await AgroProduct.find({manufacturer:req.header('manufacturer')});
        res.json(product);
    } catch(error) {
        console.log(error);
    }
})

//createproduct post
router.post('/createproduct', async(req, res) => {
    try {
        let product = new AgroProduct(req.body)
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
        let product = await AgroProduct.findById(req.params.id)
        if(!product) {
            res.status(400).send('Bad request, no such product exists')
        } else {
            product = await AgroProduct.findByIdAndUpdate(req.params.id, req.body)
            res.send("Updated the agroproduct information")
        }
    } catch(err) {
        console.log(err)
    }
})

//deleteproduct delete
router.delete('/deleteproduct/:id', async(req, res) => {
    try {
        let product = await AgroProduct.findById(req.params.id)
        if(!product) {
            res.status(400).send('Bad request, no such product exists')
        } else {
            product = await AgroProduct.findByIdAndDelete(req.params.id)
            res.send("AgroProduct deleted successfully")
        }
    } catch(err) {
        console.log(err)
    }
})

module.exports = router