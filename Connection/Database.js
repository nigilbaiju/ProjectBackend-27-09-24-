const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://renkuncas:123@trialdb.higcl.mongodb.net/ShopDB?retryWrites=true&w=majority&appName=trialdb")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));