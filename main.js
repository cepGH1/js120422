console.log("helo world");

let myArray = [1,2,3,4,5,6,7,8,9];
let total = 0;
//for loop
for(let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
    total += myArray[i];
}
console.log(total);

//while loop
let total2 = 0;
let message = 1;
while(total2 < 4){

   console.log("hello" + message);
   message ++;
    total2 = total2 + 1;
}

//exercise 1
let A = 100;
while(A < 201){
    console.log(""+ A);
    A++
}

//Exercise 2
let a = 100;
while (a <= 200) {
  if (a % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
  a++;
}

// exercise 3
//nested for loops
for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(i);
    }
 }  

 for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
  }
// a for loop for the modulus exercise
  for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
      console.log("even number");
    } else {
      console.log("odd number");
    }
  }

let today = new Date();
let theDay = today.getDay();

switch(theDay){
    case 0:
        console.log(`It's Sunday`);
    break;
    case 6:
        console.log(`It's Saturday`);
    break;
    case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}

// testing whether we now about random in javascript - nothing to do with logic
function selectANumber(){
    let myNum = Math.random();
    return myNum;
}
// generate two integers below 50 randomly
function blackJack(){
    firstCard = Math.floor(Math.random() * 50);
    secondCard = Math.floor(Math.random() * 50);
    console.log(firstCard + ", " + secondCard);
    firstResult = 21 - firstCard;
    secondResult = 21 - secondCard;
    if(firstResult <0 && secondResult <0){
        console.log(0);
    } 
    else if(firstResult < 0 ){
        console.log(secondCard);
    }
    else if(secondResult <0){
        console.log(firstCard);
    }
    else if(firstResult > secondResult){
        console.log(secondCard);
    }
    else{
        console.log(firstCard);
    }
}
blackJack();

//add three integers if they are different, ignore duplicates, use each different number once
function adder(num1, num2, num3){
    let satArray = [num1, num2, num3];
    let satSet = new Set(satArray);
    let total = 0;
    satSet.forEach(function(value){
        total = total + value;
    } )
    console.log(total);  

}
adder(2, 5, 5);

//add all different numbers
function adder2(num1, num2, num3){
    let myArray = [num1, num2, num3];
    if(num1=== num2 && num1 === num3){
        console.log(0);
        
    }
    else if(num1===num2){
        console.log(num3);
    }
    else if(num1 === num3){
        console.log(num2);
    }
    else if (num2 === num3){
        console.log(num1);
    }
    else{
        let total = 0
        for(let i =0; i<myArray.length; i++){
            total = total + myArray[i];
        }
        console.log(total);
    }
}

adder2(8,4,6);




