const mongoose= require("mongoose")
const connectDb= async()=>{
    await mongoose.connect("mongodb+srv://NamasteNode:Al0Tid0oms1DxyeC@namastenode.b5zsn.mongodb.net/DevTinder")
};
module.exports=connectDb;

