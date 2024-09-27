const mongoose=require("mongoose")
let sc=mongoose.Schema;
const ProductSchema = new sc({
    Pid:String,
    Pname:String,
    Price:Number,
    Cid:{type:mongoose.Schema.Types.ObjectId,ref:'Categories'},
    Status:String,
    photo:{
        data : Buffer,
        contentType:String,
    },
    
});

var Productmodel=mongoose.model("Products",ProductSchema)
module.exports=Productmodel;