const fetch = require('node-fetch');
const express =require("express");
const fs =require('fs');
const axios=require("axios")
const app=express();

app.get('/',(req,res,next)=>{
  res.setHeader('content-type', 'text/html');
     res.send("<h1>Hello</h1>");
      
  })
  
  app.listen("3000",(req,res)=>{
      console.log("Server Running Now on "+ 3000);
  })