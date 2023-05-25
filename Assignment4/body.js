const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 8092;
app.use(bodyParser.json());

app.post("/",function (req, res) {
    let JSONData = req.body;

    let JSONString = JSON.stringify(JSONData);

    res.send(JSONString);
})

app.listen(port,function () {
    console.log("Server Run Successfully");
})