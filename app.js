const express = require ("express");
const app = express();
const path = require("path");


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


app.use(express.static("public"));