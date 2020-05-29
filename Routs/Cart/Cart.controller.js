const {getCartItemsService,addCartItemService,itemSavedForLaterService,increaseQuantityByOneService,decreaseQuantityByOneService,deleteCartItemService} =require("./Cart.service");

module.exports={
    getCartItemsController:(req,res)=>{
        getCartItemsService(req.params.id,(err,result)=>{
            if (err){
                return  res.status(500).json({
                    sucess: 0,
                    message:err
                })

            }if(result){
                return  res.status(200).json({
                    sucess: 1,
                    message:result
                })


            }
        })

},
    addCartItemController:(req,res)=>{
        addCartItemService(req.body,(err,result)=>{
            if (err){
                return  res.status(500).json({
                    sucess: 0,
                    message:err
                })

            }if (result){
                return  res.status(200).json({
                    sucess: 1,
                    message:result
                })

            }
        })
    },
    itemSavedForLaterController:(req,res)=>{
        itemSavedForLaterService(req.body,(err, result)=>{
            if (err){
                return  res.status(500).json({
                    sucess: 0,
                    message:err
                })

            }if(result){
                return  res.status(200).json({
                    sucess: 1,
                    message:result
                })

            }
        })
    },
    increaseQuantityByOneController:(req, res)=>{
        increaseQuantityByOneService(req.body,(err, result)=>{
            if (err){
                return  res.status(500).json({
                    sucess: 0,
                    message:err
                })

            }if(result){
                return  res.status(200).json({
                    sucess: 1,
                    message:result
                })

            }
        })
    },
    decreaseQuantityByOneController:(req,res)=>{
        decreaseQuantityByOneService(req.body,(err, result)=>{
            if (err){
                return  res.status(500).json({
                    sucess: 0,
                    message:err
                })

            }if(result){
                return  res.status(200).json({
                    sucess: 1,
                    message:result
                })

            }
        })

    },
    deleteCartItemController:(req,res)=>{
        deleteCartItemService(req.params.id,(err,result)=>{

            if (err){
                return  res.status(500).json({
                    sucess: 0,
                    message:err
                })

            }if(result){
                return  res.status(200).json({
                    sucess: 1,
                    message:result
                })

            }

        })
    }


};
