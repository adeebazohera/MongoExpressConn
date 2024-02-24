const mongoose = require('mongoose');
mongoose
.connect('mongodb+srv://adeeba2203:QBjsmlvsEvZq5SBM@cluster0.ea8dc41.mongodb.net/SampleDb?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected to db')
}).catch((error)=>{
    console.log(error)
})
const schema = new mongoose.Schema({
    msg:{
        type:String,
        required:true
    }
})
const collection = new mongoose.model("newCol",schema)
module.exports = collection