 var greet = 'Hello';
 var greet = 'Hola';

 console.log(greet); // Return will be Hola
//How to Avoid it!
//1, Create 2 Object literal
var english = {}
var spainsh = {}

english.greet = 'Hello';
spainsh.greet = 'Hola';

console.log(english.greet);
console.log(spainsh.greet);

//You can add more properties to it:

//Wrong Way
//english.greeting.greet = 'hello';
//console.log(english.greeting.greet); // It will return undefined because english.greeting is 'Undefined'

//#Right way todo it:
english.greeting = {};
english.greeting.greet = 'Hello!'
console.log(english.greeting.greet);
//OR it's same as you write:

spainsh = {
    greeting : {
        greet: 'Hola!' 
    }
};
//spainsh.greeting.greet = 'Holaaa'
console.log(spainsh.greeting.greet)