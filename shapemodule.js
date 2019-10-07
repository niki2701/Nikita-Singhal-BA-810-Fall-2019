function Shape()
{
    let shape=[];
    //shape.volume=volume;
    
    shape.addShape = function (newShape) {
        shape.push(newShape);
    }
    shape.totalVol=function(){
        let SP=0;
        shape.forEach(item=>{
            SP=SP+item.volume();
              });
              return SP;
    }
    return shape;
}
module.exports=Shape;