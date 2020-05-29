const {createProduct,deleteProduct,updateProduct,getProductById,getProductsByCatogeryId} =require("./products.service");


module.exports={
addProduct: (req, res)=>{
    createProduct(req.body,(err,result)=>{
        if (err){
            res.status(500).json({
                sucess:0,
                message:err.toString()
            })

        }if (result){
            res.status(500).json({
                sucess:1,
                message:result
            })

        }


    })

},
    deleteProduct: (req, res)=>{
        deleteProduct(req.params.id,(err, result)=>{
            if (err){
                res.status(500).json({
                    sucess:0,
                    message:err.toString()
                })

            }if (result){
                res.status(200).json({
                    sucess:1,
                    message:result
                })

            }

        })
    },
    updateProductController:(req, res)=>{
        updateProduct(req.body,(err,result)=>{
            if (err){
                res.status(500).json({
                    sucess:0,
                    message:err.toString()
                })

            }if (result){
                res.status(200).json({
                    sucess:1,
                    message:result
                })

            }


        })
    },
    getProductByIdController:(req, res)=>{
        getProductById(req.params.id,(err,result)=>{
            if (err){
                res.status(500).json({
                    sucess:0,
                    message:err.toString()
                })

            }if (result){
                res.status(200).json({
                    sucess:1,
                    message:result
                })

            }

        })


    },
    getProductsByCatogeryIdController:(req, res)=>{
        getProductsByCatogeryId(req.params.id,(err,result)=>{
            if (err){
                res.status(500).json({
                    sucess:0,
                    message:err.toString()
                })

            }if (result){
                res.status(200).json({
                    sucess:1,
                    message:result
                })

            }

        })

    }


};
