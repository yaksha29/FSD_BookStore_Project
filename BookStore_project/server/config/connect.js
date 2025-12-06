const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://yaksha:292100@cluster0.zxjzegx.mongodb.net/?appName=Cluster0")
.then(()=>{console.log('connected to DB')})
.catch((err)=>{
    console.log(err)
})