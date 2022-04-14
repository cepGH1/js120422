'use strict'
//button clicker
const countEl = document.querySelector("#countEl");
const plusOne = document.querySelector("#plusOne");
const result = document.querySelector("#result");
const saveButton = document.querySelector("#saveButton");
const history = document.querySelector("#history");



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