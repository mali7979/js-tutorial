//Adding a Property to a Function

function greet() {
    console.log('Hi!')
}

//Function are objects, so you add properties to a function the way you attach a properties to an object;

greet.english = 'Hi!';

console.log(greet);
//Result
//It will return whole function : greet() {console.log('Hi!')}

//So better you can use .operator to attach a property and get the string:

console.log(greet.english);
//Result: Hi!