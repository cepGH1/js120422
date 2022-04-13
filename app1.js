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
    //let myString = count + "- ";
    //result.textContent += myString;
    //let myString2 =count;
     //li.innerText += myString2;
    //listElement.append(li);
    result.innerHTML = " ";
    clickHistory.push(count);
    for(let i=0;i<clickHistory.length; i++){
        result.innerHTML += "<li>" + clickHistory[i] + "</li>";
    }
    count = 0;
    countEl.textContent = 0;
         
}

function postResultsAsBullets(){
let myString2 =count;
li.innerText += myString2;
listElement.append(li);
}

//put eventlisteners at the bottom
plusOne.addEventListener("click", increment);
saveButton.addEventListener("click", postResults);