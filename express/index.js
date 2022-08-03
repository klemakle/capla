var express = require('express');
var fs = require('fs');
const { callbackify } = require('util');
var session = require('./session.json');

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.json({ message: 'hello world !' })
})

app.get('/current-session', (req, res) => {
    console.log("--------GET.CURRENT.SESSION------")
    fs.readFile('./session1.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            return res.status(500).json({ message: "Erreur Serveur  !", err })
        } else {
            obj = JSON.parse(data)
            return res.status(200).json({ message: "Session trouvé avec succès !", session: obj[0] })
        }
    })
})


app.post('/new-session', (req, res) => {
    console.log("--- post new session ---")
    const { session, debut } = req.body;
    console.log(req.body)
    fs.readFile('./session1.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            return res.status(500).json({ message: "Erreur Serveur  !", err })
        } else {
            obj = JSON.parse(data)
            obj.unshift({ session: session, debut: debut });
            json = JSON.stringify(obj);
            fs.writeFile('./session1.json', json, 'utf8', (err) => {
                if (err) {
                    return res.status(500).json({ message: "Erreur lors de l'ecriture de la session  !", err })
                } else {
                    return res.status(201).json({ message: "Session ajouté avec succès !" })
                }
            })
        }
    })
})

module.exports = app;