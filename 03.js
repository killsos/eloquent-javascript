function Person(){}

//console.log(Object.prototype.toString.call(new Person()).slice(8,-1));

var obj = new Person();

var flag = Object.getPrototypeOf(obj).constructor;

console.log(flag);
