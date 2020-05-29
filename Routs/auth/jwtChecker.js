const {verify}=require("jsonwebtoken")

module.exports={
    checkToken :(req, res, next)=>{
        let token=req.get("authorization");
        if(token){
            token=token.slice(7);
            verify(token,"qwert123",null,(err, decoded)=>{
                if (err){
                    res.status(401).json({
                        sucess:0,
                        message:err.toString()
                    })

                }if (decoded){

                    next();
                }

            })
        }else {
            res.status(403).json({
                sucess:0,
                message:"access denied"
            })
        }

}
};
