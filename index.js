const express = require('express')
const app = express();
const qrcode = require('qrcode');
const path = require('path');
const { request } = require('http');
const { log } = require('console');

app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('css'))

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.post('/qrdata',(req,res)=>{
    console.log(req.body.userinput);
    const theqrdata = req.body.userinput;
    qrcode.toDataURL(theqrdata,(err,userdata)=>{
        console.log(userdata);
        res.render('about',{"qrimage":userdata})
        
    })
    
})
app.listen(10000)