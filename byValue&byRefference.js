//Primitive by value Primitive(String, number, boolean....)
//By Value Example
//Primitive type sits in memory or have a address/location in the memory e.g 3 (00*0011) 
var a = 3; //Primitive value
var b;

b = a; //Copy of Primitive value in different memory location

console.log('var a = ' + a);
console.log('var b = ' + b);

//Result:
//var a = 3;
//var b = 3;

a = 2;//I Mutate the value and now again we pass the varibles and see the changes

console.log('var a = ' + a);
console.log('var b = ' + b);

//Result:
//var a = 2;
//var b = 3;

//By Refference 
//Object by Refference 

var c = {greeting: 'Hello'};
var d;

d = c;

console.log('var c = ' + c.greeting);
console.log('var d = ' + d.greeting);

//Result: 
//var c = Hello;
//var d = Hello;

c.greeting = 'Hola!'; //I mutate the value

console.log('var c = ' + c.greeting);
console.log('var d = ' + d.greeting);

//Result: 
//var c = Hello;
//var d = Hello;

function log(obj) {
    obj();
}
log(function(){
    console.log('Passing' + d);
});

c.greeting = 'Hi!!!!!!'; // = create new memory location

console.log('var c = ' + c.greeting);