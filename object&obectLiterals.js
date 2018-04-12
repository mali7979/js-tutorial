var anything = {} // Object Literal
var person = {
    firstName: 'Tony',
    LastName: 'Alica', 
}

function myFunction(info){
    console.log(info.firstName);
}
myFunction(person); // Calling person object into myFunction aurgument & it will return person.firstName 'Tony'

//On the fly 
myFunction({firstName:'Joe'}) //Passing object is no difference than passing a number myFunction(3) or passing a string myFunction('Person')

person.address = {
    Street: '123 street, UK'
}// you Can add new properties on the fly