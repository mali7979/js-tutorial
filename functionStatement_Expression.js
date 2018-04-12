/*Function Expression return a value;
-------------------------------------

example: 1 + 2; it will return 3 which is value. a value can be anything e.g string, number, object.*/

var annonymousGreet = function(){ // An Object is created and in result in value
    console.log('Hello!');
}
annonymousGreet();
//Result: Hello!

//Now we will invoke the annonymousGreet() before the function expression and it will return undefined, think
//about the hosting and execution context varible will put in the memory and will be assign a value undefined
/*annonymousGreet()

var annonymousGreet = function(){ //Function Expression
    console.log('Hello!');
}*/

function log(a) {
    a();
}
log(function(){ //Function Expression
    console.log('Hi!!!')
})

//Result: Undefined


/*Function Statement
---------------------
Statement just work and expression return in value*/

greet()

function greet(){
    console.log('Hi!');
}

/*As you can see from the above statement example that statment didn't return in value but it does a special thing
during the execution context and hosted put the function in memory and avaliable head of time, and I call greet() 
before I make the function statement and its avalible in the memory heads of time. */

//Result: Hi!
