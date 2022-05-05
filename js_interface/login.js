
import { createRequire } from 'module';
import ur from '../js/login.js'
const require = createRequire(import.meta.url)

const express = require('express')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/',(req, res)=>{
    res.send('hello world')
})

app.post('/login/test',(req, res)=>{
    req.on('data',data=>{
        let s = data.toString()
        let ndata = JSON.parse(s)  
        if(ur.userData.account == ndata.account && ur.userData.password == ndata.password){
            res.send(true)
        }
        else{
            res.send(false)
        }  
    })
    
})

app.listen('8080',()=>{
    console.log('running');
})