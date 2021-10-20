const express = require('express');
const app = express();
const cors =require('cors');
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js');

app.use(express.json())
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true})
.then((client) => {
    const db = client.db('hotel')
    const hotelCollection = db.collection('bookings')
    const hotelRouter = createRouter(hotelCollection)
    app.use('/api/bookings', hotelRouter)
})
.catch(console.error)

app.listen(5000, function() {
    console.log(`Listening on port ${ this.address().port }`)
});