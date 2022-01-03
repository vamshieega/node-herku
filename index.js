const express = require("express")

const app = express()

app.get("/",function(req,res){
    res.send("Welcome to home"); 
})

app.get("/testRoute",function(req,res){
    res.send("[{"result":"K G Marg, 110001","payload":{"areaName":"K G Marg","areaId":18082,"pinCode":"110001","zoneId":13,"zoneName":"Delhi (Central)","cityId":10,"cityName":"Delhi","cityMaskingName":"newdelhi","displayName":"K G Marg, 110001"}},{"result":"A G C R, 110092","payload":{"areaName":"A G C R","areaId":3704,"pinCode":"110092","zoneId":13,"zoneName":"Delhi (Central)","cityId":10,"cityName":"Delhi","cityMaskingName":"delhi","displayName":"A G C R, 110092"}},{"result":"M G Road, 400067","payload":{"areaName":"M G Road","areaId":18580,"pinCode":"400067","zoneId":19,"zoneName":"Mumbai (Western)","cityId":1,"cityName":"Mumbai","cityMaskingName":"mumbai","displayName":"M G Road, 400067"}},{"result":"G T B Nagar, 400022","payload":{"areaName":"G T B Nagar","areaId":18544,"pinCode":"400022","zoneId":2,"zoneName":"Mumbai (Central)","cityId":1,"cityName":"Mumbai","cityMaskingName":"mumbai","displayName":"G T B Nagar, 400022"}},{"result":"G. P. O, 400001","payload":{"areaName":"G. P. O","areaId":1,"pinCode":"400001","zoneId":1,"zoneName":"Mumbai (South)","cityId":1,"cityName":"Mumbai","cityMaskingName":"mumbai","displayName":"G. P. O, 400001"}}]"); 
})

app.listen(process.env.PORT || 5000);
