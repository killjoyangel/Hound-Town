const express = require('express');
const mongoose = require('mongoose')


// App Config

const app = express();
const port = process.envPORT || 3001

// Middlewares

//DB config

//API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO WORLD'))

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));