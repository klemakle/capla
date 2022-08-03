var express = require('express');
var fs = require('fs');
const { callbackify } = require('util');
var session = require('./session.json');

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.json({ message: 'hello world !' })
})

app.post('/new-session', (req, res) => {
    console.log("--- post new session ---")
    const { session, debut } = req.body;
    console.log(req.body)
    fs.readFile('./session1.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err)
        } else {
            obj = JSON.parse(data)
            obj.unshift({ session: session, debut: debut });
            json = JSON.stringify(obj);
            fs.writeFile('./session1.json', json, 'utf8', (err) => {
                if (err) {
                    console.log("error on write file :", err)
                } else {
                    console.log("ca semble marcher !")
                    return res.status(201).json({ message: "Session ajouté avec succès !" })
                }
            })
        }
    })
})

module.exports = app;