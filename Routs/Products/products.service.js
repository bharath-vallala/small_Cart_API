const mysql=require("../db");
var uniqid = require('uniqid');


//TODO addProduct, delProductByID,updateProductById, GetProductByID , GetProductsBYCatogeryId



module.exports={
    createProduct:(data,callback)=>{
        mysql.query("INSERT into products (category_id,name,description,price,image_url) values(?,?,?,?,?)",
            [data.category_id,data.name,data.description,data.price,data.image_url],
            (error,result,fields)=>{
                    if (error){
                        return callback(error)

                    }if (result){
                        return callback(null,result);

                }


            })
    },
    deleteProduct:(id,callback)=>{
        mysql.query("DELETE FROM products WHERE product_id=?",
            [parseInt(id)],
            (err,result,fields)=>{
                if (err) {
                    return callback(err);
                }if(result){
                    return callback(null,result);
                }



            })
        
    },
    updateProduct:(data,callback)=>{
        mysql.query("UPDATE products SET category_id=? , name =? , description =?,  price= ? , image_url=? WHERE product_id=? ",
            [data.category_id,data.name,data.description,data.price,data.image_url,data.product_id],
            (err, result, field)=>{
                if(err){
                    callback(err)
                }
                if (result){
                    callback(null,result)
                }

            })
    },
    getProductById(id,callback){
        mysql.query("select * from products WHERE product_id=?",
            [id],
            (err,result,field)=>{
                if(err){
                    callback(err)
                }
                if (result){
                    callback(null,result)
                }

            })
    },
    getProductsByCatogeryId:(id,callback)=>{
        mysql.query("select * from products WHERE category_id=?",
            [id],
            (err,result,field)=>{
                if(err){
                    callback(err)
                }
                if (result){
                    callback(null,result)
                }

            })

    }


};
