const express = require('express');
const mongoose = require('mongoose');
// import Cors from '.cors';

import Cards from "./dbCards.js";
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');


// App Config

const app = express();
const port = process.envPORT || 3001

// Middlewares
app.use(express.json())
app.use(cors());
//DB config

//API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO WORLD'))

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});


//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));