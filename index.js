const express = require("express")

const app = express()

app.get("/testRoute",function(req,res){
    res.send("successfully deployed only node.js app in heroku testRoute "); 
})

app.listen(process.env.PORT || 5000);
