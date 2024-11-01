const express = require("express");
const connectDb=require("./config/database")
const route = express();
const {adminauth} = require("./middleware/auth")
const User=require("./models/user")
route.use("/admins", adminauth);

route.get("/admins/getdata", (req, res) => {
    res.send("send all data");
});

route.use(express.json());

route.post("/signup" ,async(req,res)=>{
    
    const user = new User(req.body); 
    await user.save();
    res.send("user added successfully")
});

connectDb().then(()=>{
    console.log("Database connected")
    route.listen(7777, () => {
        console.log("Server running on port 7777");
    });
}).catch((err)=>{
    console.log("Database not connected");
})


