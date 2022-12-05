const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
		useUnifiedTopology:true,
		useNewUrlParser: true
    },
	(err) => {
		if (err) {
			console.log("Cannot connect to Mongodb Atlas: ", err);
		} else{
			console.log("Connected to Mongodb Atlas");
		}
    }
);

app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})

app.use('/api/user', require('./routes/user'))
app.use('/api/product', require('./routes/product'))
app.use('/api/agroproduct', require('./routes/agroproduct'))
app.use('/api/rawmaterial', require('./routes/rawmaterial'))
app.use('/api/agroproductnotify', require('./routes/agroproductnotify'))
app.use('/api/cart', require('./routes/cart'))
app.use('/api/payment', require('./routes/payment'))
app.use('/api/businessuser', require('./routes/businessuser'))
app.use('/api/blockchain', require('./routes/blockchainscripts'))