const express = require ("express");
const app = express();
const path = require("path");


app.listen(3030,()=>{
    console.log("Puerto 3030 iniciado")
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.use(express.static("public"))