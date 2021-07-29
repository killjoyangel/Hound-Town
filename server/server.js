// const express = require('express');
// const mongoose = require('mongoose');
// const Cors = require('cors');
// const db = require('./config/connection');
// // const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');
// const Cards = require('dbCards');
// const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');

// // App Config

// const app = express();
// const port = process.envPORT || 3001

// // Middlewares
// app.use(express.json())
// app.use(cors());
// //DB config

// //API Endpoints
// app.get('/', (req, res) => res.status(200).send('HELLO WORLD'))

// // app.post('/tinder/card', (req, res) => {
// //     const dbCard = req.body;

//     Cards.create(dbCard, (err, data) => {
//         if (err) {
//             res.status(500).send(err)
//         } else {
//             res.status(201).send(data)
//         }
//     })
// });

// app.get('/tinder/cards', (req, res) => {
//     Cards.find((err, data) => {
//         if (err) {
//             res.status(500).send(err)
//         } else {
//             res.status(200).send(data)
//         }
//     })
// });


// //Listener
// app.listen(port, () => console.log(`Listening on localhost: ${port}`));
const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require("./utils/auth");
const PORT = process.env.PORT || 3001;

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});