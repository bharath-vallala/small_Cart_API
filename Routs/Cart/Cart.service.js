const mysql=require("../db");

module.exports={
    getCartItemsService: (id, callback) => {
        mysql.query("select * from products where product_id IN (select product_id from cart_item where user_id=? ORDER BY product_id DESC)",
            [id],
            (err, result, field) => {
                if (err) {
                    callback(err)
                }
                if (result) {
                    callback(null, result);
                }

            })



    },
    addCartItemService:(data,callback)=>{
        mysql.query("INSERT INTO cart_item (user_id,product_id,saved_for_later,quantity,time_added) VALUES(?,?,?,?,NOW())",
            [data.user_id,data.product_id,0, 1],
            (err,result,field)=>{
                    if (err){
                        callback(err);
                    }if (result){
                        callback(null,result);
                }

            })

    },
    itemSavedForLaterService:(data,callback)=>{
        mysql.query("UPDATE cart_item SET saved_for_later=? WHERE product_id=?",
            [data.saved_for_later,data.product_id],
            (err,result,field)=>{
                    if(err){
                        callback(err);
                    }if(result){
                        callback(null, result);
                }
            
            })
    },
    increaseQuantityByOneService:(data,callback)=> {


        mysql.query("UPDATE cart_item SET quantity=quantity+1 WHERE product_id=? AND quantity >0",
            [data.product_id],
            (err, result, field) => {
                if (err) {
                    callback(err);
                }
                if (result) {
                    callback(null, result);
                }

            })



    },
    decreaseQuantityByOneService:(data,callback)=>{
        mysql.query("UPDATE cart_item SET quantity=quantity-1 WHERE product_id=? AND quantity >0",
            [data.product_id],
            (err, result, field) => {
                if (err) {
                    callback(err);
                }
                if (result) {
                    callback(null, result);
                }

            })

    },
    deleteCartItemService:(id,callback)=>{
        mysql.query("DELETE FROM cart_item WHERE product_id=?",
            [id],
            (err, result,field)=>{
                if (err) {
                    callback(err);
                }
                if (result) {
                    callback(null, result);
                }


            })

    }
};
