const express = require("express")

const app = express()

app.get("/",function(req,res){
    res.send("yeah vmashi working"); 
})


app.listen(process.env.PORT || 5000);

