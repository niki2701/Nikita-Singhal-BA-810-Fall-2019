let Sphere = require ('./spheremodule');
let shape1 = new Sphere(8);

let Cone = require ('./conemodule');     
let shape2 = new Cone(5,10);  

let Shape = require ('./shapemodule')

let shapes = Shape();
shapes.addShape(shape1);
shapes.addShape(shape2);

console.log(shapes.totalVol());