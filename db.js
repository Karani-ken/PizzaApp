const mongoose = require('mongoose');

let mongoURL ='mongodb+srv://kenneth:3340@cluster0.jznelf8.mongodb.net/Pizza-App'
mongoose.connect(mongoURL , {useUnifiedTopology: true, useNewUrlParser:true})

let db = mongoose.connection

db.on('connected', ()=>{
    console.log(`Mongo DB Connection Successfull`)
})

db.on('error',()=>{
    console.log(`Mongo DB connection failed`);
})

module.exports = mongoose