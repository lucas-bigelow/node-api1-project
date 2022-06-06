// BUILD YOUR SERVER HERE
const express = require('express');
const db = require('./users/model');

const server = express();

server.use(express.json());

server.get('/api/users', (req, res) => {
  db.find().then(response => {
    res.json(response);
  })
})

server.post('/api/users', (req, res) => {
  db.insert(req.body).then(response => {
    res.status(201).json(response);
  })
})

server.get('/api/users/:id', (req, res) => {
  db.findById(req.params.id).then(response => {
    console.log(response)
    res.json(response);
  })
})

server.delete('/api/users/:id', (req, res) => {
  db.remove(req.params.id).then(response => {
    res.json(response);
  })
})

server.put('/api/users/:id', (req, res) => {
  db.update(req.params.id, req.body).then(response => {
    res.json(response);
  })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
