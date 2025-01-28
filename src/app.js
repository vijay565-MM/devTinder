const express=require('express');
const connectDB=require("./config/database");
const app=express();
const User=require("./models/user");

 app.use(express.json());

app.post("/signup",async (req,res)=>{

    const user=new User(req.body);
    // const user=new User({
    // firstName:"Virat",
    // lastName:"Kohli",
    // gender:"Male",
    // emailID:"vk@gmail.com",
    // password:"1547655",
   
    // });
 try{   
await user.save();
res.send("User Added succesfully!!")
}
catch(err){
res.status(400).send("Error saving the data:"+err.message);
}
});



 
connectDB().then(()=>{
    console.log("Database Connection established");
    app.listen(7777,()=>{
        console.log("server running on port 7777...");
    });
})
 .catch((err)=>{
    console.log(" Database cannot be Connected");
});


   