const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DataModel = require('./models/OrdersModel');

const app = express();
const port = 3001;

mongoose.connect('mongodb://127.0.0.1:27017/test');

// Разрешение CORS (если нужно)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

app.get('/getUsers', (req, res) => {
    DataModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

//PUT - UPDATE (ALTER), а POST - CREATE, GET - SELECT
app.post('/addOrder', (req, res) => {
    const { color, wheel, email, address } = req.body;

    const newOrder = new DataModel({
        color: color,
        wheel: wheel,
        email: email,
        address: address,
    });

    newOrder.save()
        .then(order => res.json(order))
        .catch(err => res.json(err));
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});