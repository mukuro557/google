const express = require("express");
const path = require("path");

const app = express ();

app.set("view engine","ejs");

//========== SERVICE ==============
app.get("/", (req,res)=>{
    // res.sendFile(path.join(__dirname,"views/home.html"));
    res.render("home.ejs")

});

const PORT = 3000;

app.listen(PORT,() => {
    console.log("server is number at "+ PORT);
});