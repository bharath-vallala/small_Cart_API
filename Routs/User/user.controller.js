const {create,Address,getUserByEmail,getAccessTokenService,logoutService}=require("./user.service");
const {genSaltSync,hashSync,compareSync} = require('bcrypt');
const {sign,verify}=require('jsonwebtoken');
const mysql=require("../db");



module.exports={
    createUser :(req, res)=>{
        const body=req.body;
        const salt=genSaltSync(10);
        body.password=hashSync(body.password,salt);
        create(body,(err,result)=>{
            if (err){
               return  res.status(500).json({
                    sucess:0,
                    message:err.toString()
                })
            }if(result){
               return  res.status(200).json({
                    sucess: 1,
                    data:result
                })
            }

        })

    },
    AddAddress:(req, res)=>{
        Address(req.body,(err, result)=>{
            if (err){
               return  res.status(500).json({
                    sucess:0,
                    message:err.toString()
                })
            }if (result){
               return  res.status(200).json({
                    sucess:1,
                    data:result
                })
            }

        })


    },
    Login: (req, res) => {
        const body = req.body;
        if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
            return  res.status(500).json({
                sucess: 0,
                message: "none"
            })
        }else {

            getUserByEmail(body.email, (err, results) => {
                if (err) {
                    return  res.status(500).json({
                        sucess: 0,
                        message: err.toString()
                    })
                }
                if (!results) {
                   return  res.status(404).json({
                        sucess: 0,
                        message: "invalid email or password"
                    })

                }
                const result = compareSync(body.password, results.password);
                if (result) {
                    results.password = undefined;
                    results.refreshToken = undefined;
                    const jwt = sign({result: results}, "qwert123", {expiresIn: "15s"});
                    const refrestJwt = sign({result: results}, "qwert12345");
                    mysql.query("update users set refreshToken =? where user_id=?", [refrestJwt, results.user_id],
                        (err, result, field) => {
                            if (err) {
                                return res.status(404).json({
                                    sucess: 0,
                                    message: err.toString(),

                                });

                            }
                            if (result) {


                                return res.status(200).cookie("ref", refrestJwt, {
                                    maxAge: 86_400_000,
                                    httpOnly: true
                                }).json({
                                    sucess: 1,
                                    message: "login Sucessfully",
                                    JWT: jwt,
                                    RefreshJwt: refrestJwt,
                                    userData:results

                                });

                            }

                        });

                } else {
                   return  res.status(404).json({
                        sucess: 0,
                        message: "invalid email or password"
                    })

                }
            })

        }

    },
    getAccessTokenController: (req, res)=> {
        getAccessTokenService(req.cookies.ref, (err, result) => {
            if (err) {
               return  res.status(401).json({
                    sucess: 0,
                    message: "please send refresh token"
                })

            }
            if (result!==null && result!==undefined) {



                verify(result.refreshToken, "qwert12345", null,(err, user) => {
                    result.refreshToken=undefined;
                    const jwt = sign({result: result}, "qwert123", {expiresIn: "15s"});
                    if (err) {
                      return   res.status(401).json({
                            sucess: 0,
                            message: err.toString()

                        })

                    }
                    if (user) {
                        return res.json({
                            sucess: 1,
                            message: "Sucessfully",
                            JWT: jwt,
                            user: user

                        });

                    }
                });


            }else{

                return  res.status(401).json({
                    sucess: 0,
                    message: "please send refresh token"
                })

            }




        })


    },
    logoutController:(req,res)=>{
        logoutService(req.params.id,(err,result)=>{
            if(err){
                return   res.status(401).json({
                    sucess: 0,
                    message: err.toString(),

                })

            }if(result){
                res.clearCookie("ref")
                return   res.status(200).json({
                    sucess: 1,
                    message: result

                })

            }
        })

    }
};
