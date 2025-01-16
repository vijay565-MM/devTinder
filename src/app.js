const express=require('express');

const app=express();

//This will only handle GET  call 
app.get("/user",(req,res)=>{
    res.send({firstname:"Vijay", lastname:"MM"})
});

app.post("/user",(req,res)=>{
    res.send("Data successfully saved to the database");
});

app.delete("/user",(req,res)=>{
    res.send("Deleted successfully ");
});

//This will match all the HTTP method API call to /test
app.use("/test",(req,res)=>{
    res.send("Hello World From Server");
});

app.listen(7777,()=>{
    console.log("server running on port 7777...");
});