const express=require('express');

const app=express();

app.use("/user",(req,res,next)=>{
    console.log("Handling the router");
    next();
    //res.send("Response!!");
  
},
(req,res,next)=>{
    console.log("Handling the router 2")
    //res.send("2nd Response");
    next();
},
(req,res,next)=>{
    console.log("Handling the router 3")
    //res.send("3rd Response");
    next();
},
(req,res,next)=>{
    console.log("Handling the router 4")
    res.send("5th Response");
});



// //This will only handle GET  call 
// app.get("/user/:userId/:name/:password",(req,res)=>{
//     console.log(req.params);
//     //console.log(req.query);
//     res.send({firstname:"Vijay", lastname:"MM"})
// });

// app.post("/user",(req,res)=>{
//     res.send("Data successfully saved to the database");
// });

// app.delete("/user",(req,res)=>{
//     res.send("Deleted successfully ");
// });

// //This will match all the HTTP method API call to /test
// app.use("/test",(req,res)=>{
//     res.send("Hello World From Server");
// });

app.listen(7777,()=>{
    console.log("server running on port 7777...");
});