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
//methods for arrays
let myNextArray = [1,2,3,4,5,6,7,8,9];
//push, pop, add and remove from end of array and in case of pop returns that value
//push returns the length of the array
//shift, unshift removes and adds to front of array and in case of shift returns that value
let myNum = myNextArray.pop();
console.log(myNum)
console.log(myNextArray);
let myLength = myNextArray.push(11,12,13);
console.log(myLength);
console.log(myNextArray);
let mySecondNum = myNextArray.shift();
console.log(mySecondNum);
console.log(myNextArray);
//comparitors
// compare the values ==  loose equality
let num5 = 3;
console.log(num5 == 2);
console.log(num5 == 3);
let boo = true;
let boohoo = true;
console.log(boo == boohoo);
boohoo = 1;
console.log(boo == boohoo);// still true
// === is strict equality and takes the type into account as well - use this
console.log(boo===boohoo);
// if statements
if(boo){
    console.log(`this is true`);
}
else{
    console.log(`this is false`);
}
//(var) does an == comparison
if(boohoo === true){
    console.log(`this is true`);
}
else{
    console.log(`this is false`);
}
// and &&
if(boo && boohoo){
    console.log(`both true`);
}
// else if, before the final else to give extra checks
let strokes; 
let par;
strokes = 2;
par = 5;
let golfScoreArray =["hole in one", "albatross", "eagle", "birdie", "par", "bogey", "double bogey"];
let score;
//make a function for this
function checkScore(par, strokes){
    if(strokes === 1){
        console.log(golfScoreArray[0]);
        score= score - par;
    }
    else if(strokes === (par-3)){
        //let result = par-strokes;
        console.log(golfScoreArray[1]);
        score = score - 3;
    }
    else if(strokes === (par-2)){
        console.log(golfScoreArray[2]);
    
    }
    else if(strokes ===(par -1)){
        console.log(golfScoreArray[3]);
    
    }
    else if(strokes === par){
        console.log(golfScoreArray[4]);
    
    }
    else if(strokes === (par + 1)){
        console.log(golfScoreArray[5]);
    
    }
    else if(strokes === (par + 2)){
        console.log(golfScoreArray[6]);
    }
    else{
        console.log(`you lost`);
    
    }
}
checkScore(5,3);
console.log("hello");
//while loops - when we dont know how many times we need to do this. Needs a counter. Or a finished condition if searching an array
let array3 = ["fan", "cran", "diss"];
for(let i=0; i<array3.length;i++){
    console.log(array3[i]);
}
//read about switches