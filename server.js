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
  User.create({
    name:req.body.newData.name,
    email:req.body.newData.email,
    password:req.body.newData.password
  },
  (err,data)=>{
    if(err){
      res.json({success:false,message:err})
    }
    else if(!data){
      res.json({success:false,message:"data not found"})
    }
    else{
      res.json({success:true,message:data})
    }
  })
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  User.findById(req.params.id,(err,data)=>{
    if(err){
      res.json({success:false,message:err})
    }
    else if(!data){
      res.json({success:false,message:"data not found"})
    }
    else{
      res.json({success:true,data:data})
    }
  })
})
// UPDATE
.put((req,res)=>{
  User.findByIdAndUpdate(req.params.id,{
    name:req.body.newData.name,
    email:req.body.newData.email,
    password:req.body.newData.password
  },
  {
    new:true
  },
  (err,data)=>{
    if(err){
      res.json({success:false,message:err})
    }
    else if(!data){
      res.json({success:false,message:"not found"})
    }
    else{
      res.json({success:true,data:data})
    }
  })
})
// DELETE
.delete((req,res)=>{
  User.findByIdAndDelete(req.params.id,(err,data)=>{
    if(err){
      res.json({success:false,message:err})
    }
    else if(!data){
      res.json({success:false,message:"not found"})
    }
    else{
      res.json({success:true,data:data})
    }
  })
})