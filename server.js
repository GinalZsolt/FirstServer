const express = require('express');
const path  = require('path');
const app = express()
const port=3000;

app.get('/', (req, res)=>{
  res.status(200).sendFile(path.join(__dirname+'/index.html'))
})
app.use('/css',express.static(path.join(__dirname+'/cs')))
app.use(express.urlencoded({extended:true}))
app.get('/users',(req,res)=>{
  res.status(200).sendFile(path.join(__dirname+'/users.html'))
})

app.get('/contacts',(req,res)=>{
  res.status(200).sendFile(path.join(__dirname+'/contacts.html'))
})

app.post('/message',(req,res)=>{
  console.log(req.body)
  res.send("Kész")
})

app.listen(3000)