const mongoose=require("mongoose")
let sc=mongoose.Schema;
const CategorySchema = new sc({
    Cid:String,
    Cname:String,
    Status:String,
});

var Categorymodel=mongoose.model("Categories",CategorySchema)

module.exports=Categorymodel;