console.log("Web serverni boshlash");
const express = require('express');
const app = express();
const http = require("http");

// 1

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 session

// 3
app.set( "views", "views");
app.set("view engine", "ejs");

// 4

app.get("/hello", function (req, res) {
    res.send(`<h1>Hello World!</h1>>`);
});

app.get("/buy", function (req, res) {
    res.send(`<h1>Haridingiz muvaffaqiyatli amalga oshirildi!</h1>>`);
});



const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});

