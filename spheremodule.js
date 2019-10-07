function Sphere(sphere_radius) {
  let sphere={};
  sphere.sphere_radius = sphere_radius;
  sphere.volume=function(){

  return 4/3 * Math.PI * sphere_radius * sphere_radius* sphere_radius;
}
return sphere;
}
//let mySphere=new Sphere(8);
//console.log(mySphere.volume());
module.exports=Sphere;

