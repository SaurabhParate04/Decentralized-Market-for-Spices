const express = require('express')
const router = express.Router()
var cmd = require('node-cmd');

// Route 1 enrolladmin get
router.get('/enrolladmin', async(req, res) => {
    try {
        console.log('from enroll admin api')
        // powershell -------> wsl -d Ubuntu -- cd '/mnt/d/Final Year/Major Project/Project Files/Decentralized-Market-for-Spices/blockchain/spices/javascript' `&`& node enrollAdmin.js
        // cmd -------> wsl -e sh -c "cd '/mnt/d/Final Year/Major Project/Project Files/Decentralized-Market-for-Spices/blockchain/spices/javascript' && node enrollAdmin.js"
        cmd.run(`wsl -e sh -c "cd \"./blockchain/spices/javascript\" && node enrollAdmin.js"`, function(err, data, stderr) {
            console.log(data)
            if(err) {
                console.log(err)
            }
        })
        // cmd.run('mkdir hello')
        // cmd.run('node invoke.js')
    } catch(error) {
        console.log(error);
    }
})

// Route 2 registeruser get
router.get('/registeruser', async(req, res) => {
    try {
        console.log('from register user api')
        cmd.run(`wsl -e sh -c "cd \"./blockchain/spices/javascript\" && node registerUser.js ${req.header('user')}"`, function(err, data, stderr) {
            console.log(data)
            if(err) {
                console.log(err)
            }
        })
        // cmd.run('mkdir hello')
        // cmd.run('node invoke.js')
    } catch(error) {
        console.log(error);
    }
})

router.get('/invoke', async(req, res) => {
    try {
        console.log('from invoke api')
        cmd.run(`wsl -e sh -c "cd \"./blockchain/spices/javascript\" && node invoke.js"`, function(err, data, stderr) {
            console.log(data)
            if(err) {
                console.log(err)
            }
        })
        // cmd.run('mkdir hello')
        // cmd.run('node invoke.js')
    } catch(error) {
        console.log(error);
    }
})

router.get('/query', async(req, res) => {
    try {
        console.log('from query api')
        cmd.run(`wsl -e sh -c "cd \"./blockchain/spices/javascript\" && node query.js"`, function(err, data, stderr) {
            console.log(data)
            res.send(data)
            if(err) {
                console.log(err)
            }
        })
        // cmd.run('mkdir hello')
        // cmd.run('node invoke.js')
    } catch(error) {
        console.log(error);
    }
})

module.exports = router