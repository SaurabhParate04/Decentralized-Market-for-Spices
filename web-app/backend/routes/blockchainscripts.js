const express = require('express')
const enrollAdmin = require('../../../blockchain/spices/javascript/enrollAdmin')
const router = express.Router()

// Route 1 enrolladmin get
router.get('/enrolladmin', async(req, res) => {
    try {
        await enrollAdmin();
    } catch(error) {
        console.log(error);
    }
})

module.exports = router