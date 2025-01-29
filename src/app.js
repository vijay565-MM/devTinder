const express=require('express');
const connectDB=require("./config/database");
const app=express();
const User=require("./models/user");

 app.use(express.json());

app.post("/signup",async (req,res)=>{

    const user=new User(req.body);
    
 try{   
await user.save();
res.send("User Added succesfully!!")
}
catch(err){
res.status(400).send("Error saving the data:"+err.message);
}
});

app.get("/user",async(req,res)=>{
    const userEmail=req.body.emailID;

    try{
        const users=await User.find({emailID:userEmail});
        if(users.length===0){
            res.status(400).send("User not found");
        }
        else{
        res.send(users);
        }
    }
    catch(err){
        res.status(400).send("something went wrong");
    }
})


//API feed ti get all the data

app.get("/feed",async(req,res)=>{
    
    try{
        console.log(userEmail);
        const users=await User.find({});
        if(users.length===0){
            res.status(400).send("User not found");
        }
        else{
        res.send(users);
        }
    }
    catch(err){
        res.status(400).send("something went wrong");
    }
})

app.delete("/user",async (req,res)=>{
    const userId=req.body.userId;
    try{
        //const user= await User.findByIdAndDelete({_id:userId}); this or down line both works for delete
        const user= await User.findByIdAndDelete(userId);
        res.send("User deleted successsfully");
    }
    catch(err){
        res.status(400).send("something went wrong");
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


   