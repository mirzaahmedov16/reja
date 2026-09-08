console.log("Web serverni boshlash");
const express = require('express');
const app = express();
const fs = require("fs");
const { log } = require('console');


//authorga tegishli qism
let user;
fs.readFile("./database/user.json", "utf8", (err, data) =>{
    if(err) {
        console.log("ERROR:", err);
    } else{
        user = JSON.parse(data); // json fileni objectga aylantiradi
    }
})

// Mongodb chaqrish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 session

// 3 views code
app.set( "views", "views");
app.set("view engine", "ejs");

// 4 Routing code
/*
app.get("/hello", function (req, res) {
    res.send(`<h1>Hello World!</h1>>`);

app.get("/buy", function (req, res) {
    res.send(`<h1>Haridingiz muvaffaqiyatli amalga oshirildi!</h1>>`);
});
*/
app.post('/create-item', (req, res) => {
   console.log('user entered /create-item');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    })
});


app.post("/delete-item", (req, res) => {
    console.log("DELETE ROUTE ISHLADI");

    const id = req.body.id;

    console.log("KELGAN ID:", id);

    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function(err, data) {

            if (err) {
                console.log("DELETE ERROR:", err);
                return res.json({ state: "error" });
            }

            console.log("DELETE NATIJA:", data);

            res.json({ state: "success" });
        }
    );
});

app.post("/edit-item", (req, res) => {

    const data = req.body;

    console.log(data);

    const id = data.id;

    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(id) },
        { $set: { reja: data.newInput } },

        function (err, data) {

            if (err) {
                console.log(err);
                return res.json({ state: "error" });
            }

            res.json({ state: "success" });
        }
    );
});


app.post("/delete-all", (req, res) => {
    if(req.body.delete_all){
        db.collection("plans").deleteMany( function (){
            res.json({state: "hamma rejalar ochirildi"});
        });
    }
});


app.get('/author', function(req, res) {
    res.render("author", {user: user});
});

app.get('/', function(req, res) {
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("Something went wrong");
        } else{
            
            res.render("reja", { items: data });
        }

    });
   
});

module.exports = app;
