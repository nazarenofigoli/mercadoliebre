const express = require ("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const { log } = require("console");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.listen(3030,()=>{
    console.log("Puerto 3030 iniciado")
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
});

app.get("/registro", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/registro.html"))
});

app.post("/", (req, res)=>{
    console.log(req.body);
    res.redirect("/")
});


app.use(express.static("public"));