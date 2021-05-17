const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var weight = Number(req.body.num1);
  var height = Number(req.body.num2);
  var result = weight/(height*height);
  res.send("Your BMI value is "+ result);
});

app.listen(3000 , function(){
  console.log("Server has started on port 3000");
});
