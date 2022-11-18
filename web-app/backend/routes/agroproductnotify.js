const express = require('express')
const AgroProduct = require('../models/AgroProductNotify')
const router = express.Router()
 
router.get('/fetchnotifications', async(req, res) => {
    try {
        let product = await AgroProduct.find({receiver:req.header('receiver')});
        res.json(product);
    } catch(error) {
        console.log(error);
    }
})

router.post('/createproductnotification', async(req, res) => {
    try {
        let product = new AgroProduct(req.body)
        const saved = await product.save()
        console.log(saved)
        res.json(saved)
        
    } catch(err) {
        console.log(err)
    }
})

router.put('/updateproductnotification/:id', async(req, res) => {
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

router.delete('/deleteproductnotification/:id', async(req, res) => {
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