const express = require("express");

const app = express();

const port = 8090;

app.post("/", function (req, res) {

    let fname = req.query.fname;
    let city = req.query.city;

    res.end(fname +" "+city);
})

app.listen(port, function () {
    console.log("Server Run Successfully");
})