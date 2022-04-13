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


let count = 0;
let countHistory;



function test(){
countEl.textContent= "hello world";
}

function increment(){
    count ++;
    countEl.textContent= count;

}


function postResults(){
     para.innerText = countEl.textContent; 
    li.innerText = countEl.textContent;
    result.append(li);
    document.body.appendChild(para);
    countEl.textContent = 0;
    count = 0;
    appender.appendChild(para);
    
    
     
}

//put eventlisteners at the bottom
plusOne.addEventListener("click", increment);
saveButton.addEventListener("click", postResults);