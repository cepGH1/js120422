function calculateChange(tendered, cost){
    //how much change do we need to give
    let change = tendered - cost;
    //turn change into pence
   let penceChange = change*100;

   if(tendered === cost){
       let changegiven = 0;
       return "correct money tendered, 0 change to give";
   }
   else{
       if(change > 1000){
           let tens = Math.floor(change/1000);
           change = change - (tens*1000);
       }
       if(change > 500){
           let fives = Math.floor(change/500);
           change = change - (fives*500);
       }
       if(change>100){
           let ones = Math.floor(change/100);
           change = change - (ones*100);
       }
       if(change > 50){
           
       }
       

       }
   
}