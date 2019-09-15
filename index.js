const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const PORT = 8080;
let url = 'mongodb+srv://usuario:usuario@cluster-web-vilrj.mongodb.net/test?retryWrites=true&w=majority';
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexión a la base de datos
let conn = MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});

// Funciones para la realización del API
function getAll (req, res) {
    conn.then(client => {
        client.db("countries").collection("countriesall").find().toArray((err,data)=>{
            if (err) { console.error(err); res.send(err) };
            res.status(200).send(data);
        });
    });
}

function getDetail (req, res) {
    let n = req.params.id;
    conn.then(client => {
        client.db("countries").collection("countriesall").find({country: n}).toArray((err,data)=>{
            if (err) { console.error(err); res.send(err) };
            res.status(200).send(data);
        });
    });
}

function createCountry (req, res) {
    conn.then(client => {
        client.db("countries").collection("countriesall").insertOne(req.body, (err, r) => {
            if (err) { console.error(err); res.send(err) };
            res.status(200).send(r.ops[0]);
        });
    });
}

function updateCountry (req, res) {
    let n = req.params.id;
    conn.then(client => {
        client.db("countries").collection("countriesall").updateOne({country: n}, {$set: req.body}, (err, r) => {
            if (err) { console.error(err); res.send(err) };
            res.status(200).send(`Updated ${r.modifiedCount} element(s) successfully !`);
        });
    });
}

function deleteCountry (req, res) {
    let n = req.params.id;
    conn.then(client => {
        client.db("countries").collection("countriesall").deleteOne({country: n}, (err, r) => {
            if (err) { console.error(err); res.send(err) };
            res.status(200).send(`Deleted ${r.deletedCount} element(s) successfully !`);
        });
    });
}

// Definición de los puntos de acceso del API Rest
app.get("/", (req, res) => res.send("COUNTRIES API - Made by: Santiago Salazar Alvarez"));
app.get("/countries", getAll);
app.post("/countries", createCountry);
app.get("/countries/:id", getDetail);
app.put("/countries/:id", updateCountry);
app.delete("/countries/:id", deleteCountry);

// Launch app to listen to specified port
app.listen(PORT, () => {
     console.log(`Server Running on port ${PORT}`);
});
