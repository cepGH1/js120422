'use strict'
console.log("hello world");
// jason object 1
let plato = {
    name: "jason",
    job: "argonaut",
    age: 4006
};

console.log(plato);
//exercises 1 and 2
let darthVader ={
    allegience: "empire",
    weapon: "lightsabre", 
    sith:  true
};;
console.log(`Darthvader's allegiance is to the ${darthVader.allegience}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? false : true}`);

//add to json objects with . notation
plato.furtherKey = "new value";
console.log(plato);

let daveCar ={
    make:"ford",
    model: "T",
    colour:"black",
    name: "chunk"
};

let clareCar ={
    make:"volkswagen",
    model: "polo",
    colour:"blue",
    name: "toffee"
};
//an array of json objects, can add other objects manually
let garage = [daveCar, clareCar, {name:"liver", model:"mondeo", make:"ford", colour:"red"}];

//enhanced for loop
for(let car in garage){
    console.log(garage[car].make);
};

//nested array
let massiveJSON = {
    smallerJSON:{
        "students":[{
            "clare": "liverpool",
            "seer": "burnley",
            "fred": "warrington"
        },
    {chancer:"villian", dodger:"rishi"}],
    "heros":["angel", "superman", "leon"]
    }
};

//stringify retrives data from JSON and changes it to a string
console.log(JSON.stringify(plato));
let myString = JSON.stringify(plato);
console.log(myString);

console.log(JSON.stringify(massiveJSON.smallerJSON.students));
let myStudents = massiveJSON.smallerJSON.students;
console.log(JSON.stringify(myStudents));
console.log(myStudents)
let myFavouriteStudent = massiveJSON.smallerJSON.students[0].clare;
let mfs = JSON.stringify(myFavouriteStudent);


//JSON objects don't allow single quotes

//parse strings into JSON objects - I can't get this to work
//let secondString = `{name:"clare"}`;
//let theJSON = JSON.parse(secondString);
//console.log(theJSON);

//Falsey 
//making our own notes and doing the exercises
function ageCheck(myAge){
 let age = myAge;
if(age>17 && age<66){
  return "welcome to the world of work";
}
else if(age <18){
    return "underage";
}
else{
    return "senior";
}
}

let myNextString = ageCheck(45);
console.log(myNextString);

//function scope - hoisting - global - can be run anywhere in the code
function multiply(a,b){
    console.log(a*b);
}
//anonymous functions are not hoisted only can be run after appearance in code
const divide = function(a,b){
    console.log(a/b);
}

//can only be run below here

// arrow function =>

const message1 = () => console.log("have you got the message");

message1();
