var express=require('express');
require('dotenv').config();
var sql1=require('./db');
var catogories=require('./carogories');
var app=express();
const port =process.env.env_port;
app.use(express.json());
const UserRouter=require("./User/user.router");
const {checkToken}=require("./auth/jwtChecker");
const ProductRouter=require("./Products/products.router");
const CartRouter=require("./Cart/Cart.router");
var cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.get('/',(req, res)=>{
    sql1.query('show tables',(err , result)=>{
        res.send(result);
    });

});
app.use('/api/catogories',catogories);
app.use("/api/users",UserRouter);
app.use("/api/Products",ProductRouter);
app.use("/api/cart",checkToken, CartRouter);

app.listen(process.env.env_port, () => console.log(`Example app listening at http://localhost:${port}`));
