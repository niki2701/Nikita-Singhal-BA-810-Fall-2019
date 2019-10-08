let salesOrder1 = require("./JsExamItem");
let SalesOrder2 = require("./salesorder");

let widget = new salesOrder1("Widget", 2.5, 10);
let gidget = new salesOrder1("Gidget", 1.0, 20);

order = new SalesOrder2("customer",0.10, [widget, gidget]);
console.log(order.totalTax());