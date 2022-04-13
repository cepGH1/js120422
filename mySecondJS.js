// javascript classes

class salary{
    constructor(money){
        this.money = money;
        console.log("salary created");
    }

    calculateTax(){
        let result;
        if(this.money < 15000){
            result ="0%";
            return result;
        }
        else if(this.money < 20000){
            result = this.money*0.1;
            return "10%";
        }
        else if(this.money < 30000 ){
            result = this.money*0.15;
            return "15%";
        }
        else if(this.money < 45000){
            result = this.money*0.2;
            return  "20%";
        }
        else{
            result = this.money*0.25;
            return "25%";
        }
    }
    calculateTaxPayable(){
        let result;
        if(this.money < 15000){
            
            return 0;
        }
        else if(this.money < 20000){
            result = this.money*0.1;
            return result;
        }
        else if(this.money < 30000 ){
            result = this.money*0.15;
            return result;
        }
        else if(this.money < 45000){
            result = this.money*0.2;
            return  result;
        }
        else{
            result = this.money*0.25;
            return result;
        }
    }
}
console.log("hello world");
let jane = new salary(14000);
console.log(jane.calculateTax());
console.log("Jane has to pay £" + jane.calculateTaxPayable() + " in tax");
let john = new salary(25000);
console.log( "John pays " + john.calculateTax() + " tax rate");
console.log( "John has to pay £" + john.calculateTaxPayable() + " in tax");

