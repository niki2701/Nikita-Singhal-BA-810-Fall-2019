function Cone(cone_radius,cone_height) {
  let cone={};
  cone.cone_radius = cone_radius;
  cone.cone_height=cone_height
  cone.volume=function(){

  return 1/3 * Math.PI * cone_radius * cone_radius* cone_height;
}
return cone;
}
//let myCone= new Cone(5,10);
//console.log(myCone.volume());
module.exports=Cone;