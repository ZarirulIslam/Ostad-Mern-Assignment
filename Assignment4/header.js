const express = require("express");

const app = express();

const port = 8091;

app.post("/",function (req, res) {

    let fName = req.header("fName");
    let lName = req.header("lName");

    res.send(fName+" "+lName);
})

app.listen(port,function () {
    console.log("Server Run Successfully");
})