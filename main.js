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
