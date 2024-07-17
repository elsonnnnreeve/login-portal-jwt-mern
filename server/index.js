const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const UserModel=require("./models/Users");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//using dotenv
require('dotenv').config();
mongoose.set('strictQuery', true);

app.use(cors());
app.use(express.json());//thunderclient bod

mongoose.connect(process.env.DB_URL)
.then(()=>console.log("connected to mongodb"))
.catch(err=>console.log("not connected to mongodb",err));

//get and post are the two end points in making a request
/*app.get("/getUsers",(req,res)=>{//this returns all documents from the users collection defined like in the usermodel
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

app.post("/createUsers",async(req,res)=>{//handles post HTTP requests    
    const user=req.body;//data extracted from req body
    const newUser=new UserModel(user);
    await newUser.save();//await waits for this line completion before going on to the next line
    res.json(user);

});*/

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT,()=>{
    console.log("listening on port 3001...");
});

