function salesorder(customer,salestaxrate,item1)
{
    let order={};  
    order.customer=customer; 
    order.salestaxrate=salestaxrate;
    order.item1=item1;
    
order.totalItem=function()
{
    let total=0;
    order.item1.forEach(item =>{
        total =total+item.price();
    });
    return total;
}
order.totalTax=function(){
tax1=order.totalItem();
tax2=order.totalItem()+(tax1*order.salestaxrate);
return tax2;
}
return order;
}



module.exports = salesorder;