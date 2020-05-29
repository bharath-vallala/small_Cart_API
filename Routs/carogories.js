var express=require('express');
var app=express();
const router=express.Router();
var sql1=require('./db');

router.get('/',(req, res)=>{
    sql1.query('select category_id , name from categories',(err , result)=>{
        res.send(result);

    })


});
module.exports=router;

