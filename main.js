console.log("Hello World");

var myFirstVar = "hello world";

//ECMA 6 var not used so much more specific scope

//var is hoisted

//use these
let mySecondvar = "can be modified";
const neverChangingValue ="a constant";

//numerical variables are all Number
// command typeof
let myNumber = 2.3;
console.log(myNumber);
//arrays
let myArray = [1, 5, "hello"]; //indexing starts at zero
//arrays are mutable and can contain a mixture of data types
//make extra spaces in an array
myArray[50] = "51st place";
console.log(myArray[50]);
//now has 51 components

//types
//number, string, null, undefined, array, object
//concatenation of strings + makes the thing that follows also a string
let str = "10 + 10" + 10;
console.log(str);
//be careful about doing math in your concatenation
let str2 = "10+10" + 10 + 10;
console.log(str2);
let str3 = `this is a literal using the variable ${myArray[2]}` ;
console.log(str3);
//use that type of camel - default for javascript and java

//using css in the console command put a  comma and then the css as text
let myTxt = "This could be useful!";

console.log("this is a %c a message with some CSS."+str3,"color: yellow; font-style: italic; background-color: blue;padding: 2px");

console.log( "%c" + str3,"color:red; font-style:bold;");
console.log("This is now %c the end of the exercises.","color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");

function myFunction(){
    console.log(`hello world`);

}
myFunction();
