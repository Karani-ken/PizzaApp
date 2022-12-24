const express = require('express');
const Pizza = require('./models/pizzaModel')

//creating express app
const app = express();
app.use(express.json());
//importing the database
const db = require('./db');

//default backend route
app.get("/",(req,res)=>{
    res.send("Server working ...");
});
app.get("/getpizzas", (req, res)=>{
    Pizza.find({}, (error , docs)=>{
        if(error){
            console.log(error)
        }else{
            res.send(docs)
        }
    })

})

const port = 8000;

app.listen(port, ()=> console.log(`server started on port ${port}`));