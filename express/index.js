var express = require('express');
var fs = require('fs');
const { callbackify } = require('util');
var session = require('./session.json');

const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: 'hello world !' })
})

app.post('/new-session', (req, res) => {
    console.log("coucou")
        // const { session, debut } = req.body;
    fs.readFile(session, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err)
        } else {
            obj = JSON.parse(data)
            obj.push({ session: 'coucou', debut: 'demain' });
            json = JSON.stringify(obj);
            fs.writeFile(session, json, 'utf8', callback)
        }
    })
})

module.exports = app;