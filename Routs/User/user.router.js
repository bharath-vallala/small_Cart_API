const {createUser,AddAddress,Login,getAccessTokenController,logoutController}=require("./user.controller");
const  router=require("express").Router();

router.post("/",createUser);
router.post("/address",AddAddress);
router.post("/login",Login);
router.get("/token",getAccessTokenController);
router.put("/logout/:id",logoutController);
module.exports=router;

