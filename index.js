const express = require("express")

const app = express()

app.get("/",function(req,res){
    res.send("successfully deployed only node.js app in heroku"); 
})

app.listen(process.env.PORT || 5000);
