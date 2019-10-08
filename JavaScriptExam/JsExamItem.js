    function salesorderitem(product,quantity,value){
        let item={};
        item.product=product;
        item.quantity=quantity;
        item.value=value;
        item.price=function(){
            return item.quantity*item.value;

        }
        return item;
    }
    //let myCone= new Cone(5,10);
    //console.log(myCone.volume());
    module.exports=salesorderitem;