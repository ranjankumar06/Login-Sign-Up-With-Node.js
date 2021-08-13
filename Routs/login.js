const express = require('express');
const knex = require('../databases/db')
const app = express()
const router = express.Router()
// router.use(express.json())   

router.get('/', (req, res) => {
    console.log('hello');
    res.send("hello brother")
})

router.get('/get',(req,res)=>{
    if(req.body.email ===undefined || req.body.password === undefined){
        console.log({"suggestion":"email and password both are needed"})
    }else
    knex.select('*').from('user').where('email',req.body.email)((data)=>{
        if(data.length > 0){
            if(data[0].password === req.body.email){
                var token=({"id":data[0].id, "name":data[0].name, "email":data[0].email, "password":data[0].password},"maapaa")
                res.cookie("key",token);
                console.log({"login success":data,token});
                res.send({"login success":data,});
            }else{res.send({"error":"Password is invalid"});}
        }else{res.send({"Error":"This user doesn't exit...."})}
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;