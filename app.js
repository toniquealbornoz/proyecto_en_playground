const express = require("express");
const path = require("path");

const app= express();
const port = 3005;

const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})
app.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.post("/register", (req,res)=>{
    console.log("Recibimos la Información");
    res.redirect("/")

})
app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.listen(port,(()=>{
    console.log(`Run Forest Run en http://localhost:${port}`);
}))