const express = require("express");
const multer = require("multer");

const app = express();
const port = 8093;

const storage = multer.diskStorage({
    destination:function (req,file,callBack) {
        callBack(null,"./uploads");
    },
    filename: function (req,file,callBack) {
        callBack(null,file.originalname);
    }
})

const upload = multer({storage:storage}).single("file");

app.post("/",function (req, res) {

    upload(req,res,function (error) {
        if(error){
            return res.end("File Upload Failed");
        }
        else{
            return res.end("File Upload Success");
        }
    })
})

app.listen(port,function () {
    console.log("Server Run Successfully")
})