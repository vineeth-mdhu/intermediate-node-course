const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const User= require('./models/User');
const port=8000;
const app= express();


app.use(bodyParser.json());

mongoose.connect('mongodb+srv://node-express:node-express@cluster0.gs4ii.mongodb.net/node-express?retryWrites=true&w=majority');


app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

// CREATE
app.post('/users',(req,res)=>{
  // User.create()
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  // User.findById()
})
// UPDATE
.put((req,res)=>{
  // User.findByIdAndUpdate()
})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
})