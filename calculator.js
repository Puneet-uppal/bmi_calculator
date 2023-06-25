// const status = err.status || 500; res.status(status);
const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
    // res.send("<h1><em>Calculator</em></h1><br><br><input type='number' name='enter first number'><br><br><input type='number' name='Enter second number'><br><br><input type='text' name='enter operator'>");
    res.sendFile(__dirname+"/index.html");
});
app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmi-calculator.html");
});
app.post("/bmi",function(req,res){
    // console.log(req.body);
    var w=req.body.weight;
    var h=req.body.height;
    var bmi=w/(h*h);
    res.send(bmi);
});
app.post("/",function(req,res){
    // console.log(req.body);
    // res.send("Thanks for posting");
    var num1=req.body.num1;
    var num2=req.body.num2;
    var result=num1 + num2;
    res.send(result);
});

app.listen(8000,function(){
    console.log("started port 8000");
});


