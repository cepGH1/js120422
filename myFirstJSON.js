`use strict`
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
