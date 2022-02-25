const express = require("express")

const app = express()

app.get("/",function(req,res){
    res.send("Welcome to home"); 
})

app.get("/testRoute",function(req,res){
  res.send({
  "userdata": [
    {
      "id": "201074",
      "firstname": "vamshi eega",
      "team": "Node jhds",
      "phonenumber": 2222222299,
      "role": "users 1232",
      "status": "inactive",
      "lastname": "krishna",
      "email": "chjbds@dvs"
    },
    {
      "id": "201023",
      "firstname": "rajesh",
      "team": "front-end",
      "phonenumber": 9999999999,
      "role": "user",
      "status": "active",
      "lastname": "201023"
    },
    {
      "id": "201011",
      "firstname": "abhinav",
      "team": "front-end",
      "phonenumber": 7386096888,
      "role": "user",
      "status": "active"
    },
    {
      "id": "201014",
      "firstname": "chaithanya",
      "team": "front-end",
      "phonenumber": 9999999999,
      "role": "user",
      "status": "inactive"
    },
    {
      "id": "845155",
      "firstname": "new one ",
      "team": "hrh",
      "phonenumber": 9898745235,
      "role": "Angular",
      "status": "inactive",
      "lastname": "new one ",
      "email": "dsdcds@cds"
    },
    {
      "firstname": "new one ",
      "id": "SWajYeG",
      "team": "vds",
      "phonenumber": 546484848,
      "role": "cds",
      "status": "active",
      "lastname": "new one ",
      "email": null
    },
    {
      "firstname": null,
      "id": "kIhgrsd",
      "team": null,
      "phonenumber": null,
      "role": null,
      "status": null,
      "lastname": null,
      "email": null
    },
    {
      "firstname": "eega",
      "id": "825454",
      "team": "ARUN",
      "phonenumber": null,
      "role": "cdcsd",
      "status": "active",
      "lastname": "eega",
      "email": "cdscs@vds"
    },
    {
      "firstname": "gggg",
      "id": "3511",
      "team": "ghv",
      "phonenumber": 5465145133,
      "role": "hdjskc",
      "status": "active",
      "lastname": "gggg",
      "gender": null,
      "email": "cjsdk@jkdssn"
    },
    {
      "firstname": "kikikikik",
      "id": "h-cr3NX",
      "team": "cds",
      "phonenumber": null,
      "role": null,
      "status": "active",
      "lastname": "kikikikik",
      "gender": null,
      "email": null
    },
    {
      "firstname": "cccccccas",
      "id": "353111",
      "team": "cdscs",
      "phonenumber": 3213132122,
      "role": "cdsc",
      "status": "active",
      "lastname": "cccccccas",
      "email": "cdscs@cds"
    },
    {
      "firstname": "cs",
      "id": "LbvEUrI",
      "team": null,
      "phonenumber": null,
      "role": null,
      "status": "active",
      "lastname": "cs",
      "gender": null,
      "email": null
    },
    {
      "firstname": "dscs",
      "id": "355555",
      "team": "cdsc",
      "phonenumber": 4212,
      "role": "cdscds",
      "status": "active",
      "lastname": "cdsc",
      "email": "cdscs@c"
    },
    {
      "firstname": "cdskjnk",
      "role": "cds",
      "isactive": "active",
      "phonenumber": 5454654546,
      "id": "545466",
      "team": "dscs",
      "lastname": "cjds",
      "email": "cdscs@cds"
    },
    {
      "firstname": "cdsj",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 4242242422,
      "id": "424225",
      "team": "vdvds",
      "lastname": "c,ds",
      "email": "vdss@dvs"
    },
    {
      "firstname": "cdbs11",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 5535555355,
      "id": "553555",
      "team": "dscds",
      "lastname": "cdbs",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwne",
      "role": "cdscsd",
      "isactive": "active",
      "phonenumber": 5245454554,
      "id": "545445",
      "team": "cdns",
      "lastname": "newwne",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwnxsae",
      "role": "newwne",
      "isactive": "active",
      "phonenumber": 3554545351,
      "id": "998797",
      "team": "newwne",
      "lastname": "newwne",
      "email": "newwne@scaa"
    },
    {
      "firstname": "sunuan",
      "role": "jhbjsa",
      "isactive": "active",
      "phonenumber": 3212553,
      "id": "654511",
      "team": "cdscds",
      "lastname": "sunuan",
      "email": "cdscds@ds"
    },
    {
      "firstname": "cdkjs",
      "role": "cdkjs",
      "isactive": "active",
      "phonenumber": 4544555555,
      "id": "534544",
      "team": "cdkjs",
      "lastname": "cdkjs",
      "email": "cdkjs@csa"
    },
    {
      "firstname": "cs",
      "id": "LbvEUrI",
      "team": null,
      "phonenumber": null,
      "role": null,
      "status": "active",
      "lastname": "cs",
      "gender": null,
      "email": null
    },
    {
      "firstname": "dscs",
      "id": "355555",
      "team": "cdsc",
      "phonenumber": 4212,
      "role": "cdscds",
      "status": "active",
      "lastname": "cdsc",
      "email": "cdscs@c"
    },
    {
      "firstname": "cdskjnk",
      "role": "cds",
      "isactive": "active",
      "phonenumber": 5454654546,
      "id": "545466",
      "team": "dscs",
      "lastname": "cjds",
      "email": "cdscs@cds"
    },
    {
      "firstname": "cdsj",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 4242242422,
      "id": "424225",
      "team": "vdvds",
      "lastname": "c,ds",
      "email": "vdss@dvs"
    },
    {
      "firstname": "cdbs11",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 5535555355,
      "id": "553555",
      "team": "dscds",
      "lastname": "cdbs",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwne",
      "role": "cdscsd",
      "isactive": "active",
      "phonenumber": 5245454554,
      "id": "545445",
      "team": "cdns",
      "lastname": "newwne",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwnxsae",
      "role": "newwne",
      "isactive": "active",
      "phonenumber": 3554545351,
      "id": "998797",
      "team": "newwne",
      "lastname": "newwne",
      "email": "newwne@scaa"
    },
    {
      "firstname": "sunuan",
      "role": "jhbjsa",
      "isactive": "active",
      "phonenumber": 3212553,
      "id": "654511",
      "team": "cdscds",
      "lastname": "sunuan",
      "email": "cdscds@ds"
    },
    {
      "firstname": "cdkjs",
      "role": "cdkjs",
      "isactive": "active",
      "phonenumber": 4544555555,
      "id": "534544",
      "team": "cdkjs",
      "lastname": "cdkjs",
      "email": "cdkjs@csa"
    },
    {
      "firstname": "cs",
      "id": "LbvEUrI",
      "team": null,
      "phonenumber": null,
      "role": null,
      "status": "active",
      "lastname": "cs",
      "gender": null,
      "email": null
    },
    {
      "firstname": "dscs",
      "id": "355555",
      "team": "cdsc",
      "phonenumber": 4212,
      "role": "cdscds",
      "status": "active",
      "lastname": "cdsc",
      "email": "cdscs@c"
    },
    {
      "firstname": "cdskjnk",
      "role": "cds",
      "isactive": "active",
      "phonenumber": 5454654546,
      "id": "545466",
      "team": "dscs",
      "lastname": "cjds",
      "email": "cdscs@cds"
    },
    {
      "firstname": "cdsj",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 4242242422,
      "id": "424225",
      "team": "vdvds",
      "lastname": "c,ds",
      "email": "vdss@dvs"
    },
    {
      "firstname": "cdbs11",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 5535555355,
      "id": "553555",
      "team": "dscds",
      "lastname": "cdbs",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwne",
      "role": "cdscsd",
      "isactive": "active",
      "phonenumber": 5245454554,
      "id": "545445",
      "team": "cdns",
      "lastname": "newwne",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwnxsae",
      "role": "newwne",
      "isactive": "active",
      "phonenumber": 3554545351,
      "id": "998797",
      "team": "newwne",
      "lastname": "newwne",
      "email": "newwne@scaa"
    },
    {
      "firstname": "sunuan",
      "role": "jhbjsa",
      "isactive": "active",
      "phonenumber": 3212553,
      "id": "654511",
      "team": "cdscds",
      "lastname": "sunuan",
      "email": "cdscds@ds"
    },
    {
      "firstname": "cdkjs",
      "role": "cdkjs",
      "isactive": "active",
      "phonenumber": 4544555555,
      "id": "534544",
      "team": "cdkjs",
      "lastname": "cdkjs",
      "email": "cdkjs@csa"
    },
    {
      "firstname": "cs",
      "id": "LbvEUrI",
      "team": null,
      "phonenumber": null,
      "role": null,
      "status": "active",
      "lastname": "cs",
      "gender": null,
      "email": null
    },
    {
      "firstname": "dscs",
      "id": "355555",
      "team": "cdsc",
      "phonenumber": 4212,
      "role": "cdscds",
      "status": "active",
      "lastname": "cdsc",
      "email": "cdscs@c"
    },
    {
      "firstname": "cdskjnk",
      "role": "cds",
      "isactive": "active",
      "phonenumber": 5454654546,
      "id": "545466",
      "team": "dscs",
      "lastname": "cjds",
      "email": "cdscs@cds"
    },
    {
      "firstname": "cdsj",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 4242242422,
      "id": "424225",
      "team": "vdvds",
      "lastname": "c,ds",
      "email": "vdss@dvs"
    },
    {
      "firstname": "cdbs11",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 5535555355,
      "id": "553555",
      "team": "dscds",
      "lastname": "cdbs",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwne",
      "role": "cdscsd",
      "isactive": "active",
      "phonenumber": 5245454554,
      "id": "545445",
      "team": "cdns",
      "lastname": "newwne",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwnxsae",
      "role": "newwne",
      "isactive": "active",
      "phonenumber": 3554545351,
      "id": "998797",
      "team": "newwne",
      "lastname": "newwne",
      "email": "newwne@scaa"
    },
    {
      "firstname": "sunuan",
      "role": "jhbjsa",
      "isactive": "active",
      "phonenumber": 3212553,
      "id": "654511",
      "team": "cdscds",
      "lastname": "sunuan",
      "email": "cdscds@ds"
    },
    {
      "firstname": "cdkjs",
      "role": "cdkjs",
      "isactive": "active",
      "phonenumber": 4544555555,
      "id": "534544",
      "team": "cdkjs",
      "lastname": "cdkjs",
      "email": "cdkjs@csa"
    },
    {
      "firstname": "cs",
      "id": "LbvEUrI",
      "team": null,
      "phonenumber": null,
      "role": null,
      "status": "active",
      "lastname": "cs",
      "gender": null,
      "email": null
    },
    {
      "firstname": "dscs",
      "id": "355555",
      "team": "cdsc",
      "phonenumber": 4212,
      "role": "cdscds",
      "status": "active",
      "lastname": "cdsc",
      "email": "cdscs@c"
    },
    {
      "firstname": "cdskjnk",
      "role": "cds",
      "isactive": "active",
      "phonenumber": 5454654546,
      "id": "545466",
      "team": "dscs",
      "lastname": "cjds",
      "email": "cdscs@cds"
    },
    {
      "firstname": "cdsj",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 4242242422,
      "id": "424225",
      "team": "vdvds",
      "lastname": "c,ds",
      "email": "vdss@dvs"
    },
    {
      "firstname": "cdbs11",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 5535555355,
      "id": "553555",
      "team": "dscds",
      "lastname": "cdbs",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwne",
      "role": "cdscsd",
      "isactive": "active",
      "phonenumber": 5245454554,
      "id": "545445",
      "team": "cdns",
      "lastname": "newwne",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwnxsae",
      "role": "newwne",
      "isactive": "active",
      "phonenumber": 3554545351,
      "id": "998797",
      "team": "newwne",
      "lastname": "newwne",
      "email": "newwne@scaa"
    },
    {
      "firstname": "sunuan",
      "role": "jhbjsa",
      "isactive": "active",
      "phonenumber": 3212553,
      "id": "654511",
      "team": "cdscds",
      "lastname": "sunuan",
      "email": "cdscds@ds"
    },
    {
      "firstname": "cdkjs",
      "role": "cdkjs",
      "isactive": "active",
      "phonenumber": 4544555555,
      "id": "534544",
      "team": "cdkjs",
      "lastname": "cdkjs",
      "email": "cdkjs@csa"
    },
    {
      "firstname": "cs",
      "id": "LbvEUrI",
      "team": null,
      "phonenumber": null,
      "role": null,
      "status": "active",
      "lastname": "cs",
      "gender": null,
      "email": null
    },
    {
      "firstname": "dscs",
      "id": "355555",
      "team": "cdsc",
      "phonenumber": 4212,
      "role": "cdscds",
      "status": "active",
      "lastname": "cdsc",
      "email": "cdscs@c"
    },
    {
      "firstname": "cdskjnk",
      "role": "cds",
      "isactive": "active",
      "phonenumber": 5454654546,
      "id": "545466",
      "team": "dscs",
      "lastname": "cjds",
      "email": "cdscs@cds"
    },
    {
      "firstname": "cdsj",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 4242242422,
      "id": "424225",
      "team": "vdvds",
      "lastname": "c,ds",
      "email": "vdss@dvs"
    },
    {
      "firstname": "cdbs11",
      "role": "dscs",
      "isactive": "active",
      "phonenumber": 5535555355,
      "id": "553555",
      "team": "dscds",
      "lastname": "cdbs",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwne",
      "role": "cdscsd",
      "isactive": "active",
      "phonenumber": 5245454554,
      "id": "545445",
      "team": "cdns",
      "lastname": "newwne",
      "email": "cdscs@cds"
    },
    {
      "firstname": "newwnxsae",
      "role": "newwne",
      "isactive": "active",
      "phonenumber": 3554545351,
      "id": "998797",
      "team": "newwne",
      "lastname": "newwne",
      "email": "newwne@scaa"
    },
    {
      "firstname": "sunuan",
      "role": "jhbjsa",
      "isactive": "active",
      "phonenumber": 3212553,
      "id": "654511",
      "team": "cdscds",
      "lastname": "sunuan",
      "email": "cdscds@ds"
    },
    {
      "firstname": "cdkjs",
      "role": "cdkjs",
      "isactive": "active",
      "phonenumber": 4544555555,
      "id": "534544",
      "team": "cdkjs",
      "lastname": "cdkjs",
      "email": "cdkjs@csa"
    },
    {
      "firstname": "new copied",
      "id": "654465",
      "team": "new copied",
      "phonenumber": 5465464666,
      "role": "new copied",
      "status": "active",
      "lastname": "new copied",
      "email": "newcopied@new"
    },
    {
      "firstname": "new pmo",
      "id": "654645",
      "team": "new pmo",
      "phonenumber": 5454515222,
      "role": "new pmo",
      "status": "active",
      "lastname": "new pmo",
      "email": "newpmo@new"
    },
    {
      "firstname": "tsconfig",
      "id": "545525",
      "team": "tsconfig",
      "phonenumber": 5454155555,
      "role": "tsconfig",
      "status": "active",
      "lastname": "tsconfig",
      "email": "tsconfig@tsconfig"
    },
    {
      "firstname": "hatiram",
      "id": "201029",
      "team": "my team",
      "phonenumber": 64616353235,
      "role": "cdbskjkncdscds",
      "status": "active",
      "lastname": "kumar ",
      "email": "hatiram@ndms"
    },
    {
      "firstname": "cdhsbjcds",
      "id": "970474",
      "team": "cbdsjckds",
      "phonenumber": "3536536536",
      "role": "cdghsjcnds",
      "status": "active",
      "lastname": "jkcb dscs",
      "email": "cdhbs@cdhs"
    },
    {
      "firstname": "cvsdhcds",
      "id": "133112",
      "team": "cscdscs",
      "phonenumber": "1331121806",
      "role": "cds;lms",
      "status": "active",
      "lastname": "cvsdhcdscvsdhcds",
      "email": "cdnskmcds@cdscs",
      "zipcode": 133112
    },
    {
      "firstname": "sjhsxal/",
      "id": "254542",
      "team": "cndscs",
      "phonenumber": "3554543554",
      "role": "cdscdbksjncs",
      "status": "active",
      "lastname": "c hdsjcds",
      "email": "mdcscds@cds",
      "zipcode": 254554
    },
    {
      "firstname": "cskjansa",
      "role": "cmsbjncsa",
      "isactive": "active",
      "phonenumber": "3653555555",
      "id": "756645",
      "team": "cdjsncds",
      "lastname": "cskjansa",
      "email": "cmsjnc@cds",
      "zipcode": 323623
    },
    {
      "firstname": "ooooooo",
      "role": "ooooooo",
      "isactive": "active",
      "phonenumber": "0000000000",
      "id": "000000",
      "team": "ooooooo",
      "lastname": "ooooooo",
      "email": "ooooooo@ooooooo",
      "zipcode": 0
    },
    {
      "firstname": "00000",
      "lastname": "00000",
      "isactive": "active",
      "id": "000020",
      "gender": "female",
      "maritalstatus": "unmarried",
      "email": "00000@00000",
      "phonenumber": "0000000000",
      "dateofbirth": "2021-05-26",
      "doj": "2021-05-24",
      "zipcode": 0,
      "city": "00000",
      "trackingtime": "active",
      "emplocation": "00000",
      "worklocation": "00000",
      "authorization": "1",
      "bugtracking": "1"
    },
    {
      "id": "YClQ9AD"
    },
    {
      "id": "Fo6XEh1"
    },
    {
      "id": "eJwR92y"
    },
    {
      "id": "OkwbHYh"
    },
    {
      "id": "DZiy42g"
    },
    {
      "id": "6W8LFg7"
    },
    {
      "id": "auzVLgx"
    },
    {
      "id": "CFRjHj3"
    },
    {
      "firstname": "chaithanya",
      "lastname": "chaithanya",
      "isactive": "active",
      "id": "351414",
      "gender": "male",
      "maritalstatus": "married",
      "email": "chaithanya@cds",
      "phonenumber": "7216546666",
      "dateofbirth": "2021-05-20",
      "doj": "2021-05-19",
      "zipcode": "656565",
      "city": "sacsa",
      "trackingtime": "active",
      "emplocation": "cdbshd",
      "worklocation": "cdsjbcjsd",
      "authorization": "1",
      "bugtracking": "2",
      "role": "rajesh",
      "team": "rajesh",
      "designation": "abhinav"
    },
    {
      "id": "9jIZgSE"
    },
    {
      "twitter": "vdjsncs",
      "github": "vdjsncs",
      "facebook": "vdjsncs",
      "googleplus": "vdjsncs",
      "linkedin": "vdjsncs",
      "id": "PcXKBzU"
    },
    {
      "twitter": "chbscjnds",
      "github": "chbscjnds",
      "facebook": "chbscjnds",
      "googleplus": "chbscjnds",
      "linkedin": "chbscjnds",
      "skype": "chbscjnds",
      "id": "R64kRHP"
    },
    {
      "id": "HJMgccW"
    },
    {
      "id": "hYvXnat"
    }
  ]
});   
})

app.listen(process.env.PORT || 5000);
