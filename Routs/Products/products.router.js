const  router=require("express").Router();
const {addProduct,deleteProduct,updateProductController,getProductByIdController,getProductsByCatogeryIdController}=require("./products.controller");

router.post("/addproduct",addProduct);
router.delete("/delProduct/:id",deleteProduct);
router.put("/updateProduct",updateProductController);
router.get("/getProductById/:id",getProductByIdController);
router.get("/getProductsByCatogeryId/:id",getProductsByCatogeryIdController);



module.exports=router;
