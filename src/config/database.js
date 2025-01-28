const mongoose=require("mongoose");

const connectDB= async()=>{
    await mongoose.connect(
        "mongodb+srv://namastedev:aWUEOh3at6FVbbsu@namastenode.vd6ni.mongodb.net/devTinder"
    );
};

module.exports=connectDB;


