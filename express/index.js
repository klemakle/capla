var express = require('express');
var fs = require('fs');
var session = require('./session.json');

const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: 'hello world !' })
})

app.put('/new-session', (req, res) => {

})

module.exports = app