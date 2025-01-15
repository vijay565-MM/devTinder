const express=require('express');

const app=express();

app.use("/timer",(req,res)=>{
    res.send("Namaste From Node");
});

app.use("/test",(req,res)=>{
    res.send("Hello World From Server");
});
app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello");
});


app.listen(7777,()=>{
    console.log("server running on port 7777...");
});