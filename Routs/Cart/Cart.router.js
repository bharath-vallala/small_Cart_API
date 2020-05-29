const  router=require("express").Router();
const {getCartItemsController,addCartItemController,itemSavedForLaterController,increaseQuantityByOneController,decreaseQuantityByOneController,deleteCartItemController} = require("./Cart.controller");


router.get("/getCartItems/:id",getCartItemsController);
router.post("/addCartItems/",addCartItemController);
router.put("/updateSavedForLater/",itemSavedForLaterController);
router.put("/updateQuantityAdd/",increaseQuantityByOneController);
router.put("/updateQuantityRemove/",decreaseQuantityByOneController);
router.delete("/deleteCartItem/:id",deleteCartItemController);

module.exports=router;
