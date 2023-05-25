const express = require("express");

const app = express();

const port = 8095;

app.get("/", function (req,res) {

    res.download("./uploads/download.jpg");
})

app.listen(port, function () {
    console.log("Server Run Successfully");
})