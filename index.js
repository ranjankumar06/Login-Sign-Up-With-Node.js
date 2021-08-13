const express=require('express');
const app=express()
app.use(express.json())

app.use('/',require('./Routs/singup'))
app.use('/',require('./Routs/login'))

app.listen(2021,()=>{
    console.log('server start');
})