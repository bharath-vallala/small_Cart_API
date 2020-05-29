const mysql=require("../db");
var uniqid = require('uniqid');

module.exports = {
    create: (data, callback) => {
        var ids = uniqid.time();
        mysql.query("insert into users(user_id, name, email, phn, password) VALUES(?,?,?,?,?);",
            [data.user_id, data.name, data.email, data.phn, data.password],
            (error, result, field) => {
                if (error) {
                    return callback(error);
                }
                if (result) {
                    return callback(null, result);
                }

            })


    },
    Address:(data,callback)=>{
        mysql.query("insert into address(user_id,address_1, address_2, postal_code,city) VALUE(?,?,?,?,?)",
            [data.user_id,data.address_1,data.address_2,data.postal_code,data.city],
            (error, result, field)=>{
            if (error){
                return callback(error);
            }if (result){
                return callback(null,result)
                }

            })
    },
    getUserByEmail:(email,callback)=>{
        mysql.query("select * from users where email = ?",
            [email],
            (error,results,field)=>{
                if (error){
                    return callback(error)
                }if (results){
                    return callback(null, results[0])
                }


            })
    },
    getAccessTokenService:(data,callback)=>{
        mysql.query("select refreshToken from users where refreshToken=?",

            [data],
            (err, results,field)=>{
                    if(err){
                        callback(err);
                    }if(results){
                        console.log(data);
                        callback(null,results[0])
                }

            })
    },

    logoutService:(id,callback)=>{
        mysql.query("update users set refreshToken=null where user_id=?",
            [id],
            (err,result,field)=>{
                if(err){
                    callback(err)
                }if(result){
                    callback(null,result)
                }

            })
    }



};

