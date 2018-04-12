 var myObject = {
     firstName: 'Mary',
     developer: true
 }

 //Convert Object to JSON by using JS build-in feature JSON.stringify();

 console.log(JSON.stringify(myObject));

 //Result: {"firstName":"Mary","developer":true}

 //Convert JSON to Object by using JS build-in feature JSON.parse('')

 var jsonValue = JSON.parse('{"firstName":"Mary","developer":true}');
 console.log(jsonValue);

 //Result: {firstName: "Mary", developer: true}