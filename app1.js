'use strict'
//button clicker
const countEl = document.querySelector("#countEl");
const plusOne = document.querySelector("#plusOne");
const result = document.querySelector("#result");
const saveButton = document.querySelector("#saveButton");
const history = document.querySelector("#history");
const li = document.createElement("li");
const para = document.createElement("p");
const appender = document.querySelector("#appender");
const listElement = document.querySelector('ul')
//const listItem = document.createElement("li");
//const listItemCheckbox = document.createElement("input");
//const listItemLabel = document.createElement("label");

//listElement.append(listItem, listItemCheckbox, listItemLabel);

let count = 0;
let countHistory;
let clickHistory = [];



function test(){
countEl.textContent= "hello world";
}

function increment(){
    count ++;
    countEl.textContent= count;

}


function postResults(){
   //creates an element
    const li = document.createElement("li");
    li.textContent = count;
    result.append(li);
    count = 0;
    countEl.textContent = 0;
         
}



//put eventlisteners at the bottom
plusOne.addEventListener("click", increment);
saveButton.addEventListener("click", postResults);