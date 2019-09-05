
let coffeeIsGrinding = 1

const pressGrindBeans = () =>  {
    if(coffeeIsGrinding){
 console.log("Grinding for 20 seconds");
 coffeeIsGrinding = 0;
} else {
    console.log("Grinding is about to start")
    coffeeIsGrinding = 1
}
}
pressGrindBeans()

//const takeOrder = (size, drinkType) => {
   // console.log(`order received: ${size} ${drinkType}`);
//}
//takeOrder(large, coffee)
//

let accNumber=5523436

const cashWithdrawal = (amount, accnum) => {
    console.log(`withdraw ${amount} from ${accnum}`)

}
    

cashWithdrawal(-300, accNumber)
    
const addUp = (num1, num2) => {
    return (num1 + num2);
}
addUp (7,3);
console.log(addUp(2,5));

const multiplyByNineFifths = (celsius) =>{
    return  midNumber= (celsius - 32);
};

const getFahrenheit =(midNumber) =>{
    return multiplyByNineFifths(midNumber*(5/9)) ;
};
console.log("The temperature is " + multiplyByNineFifths(59) + "F");


let orderCount = 0;

const takeOrder = (topping) => {
    console.log(` Pizza with ${topping}`);
    orderCount++;
    return orderCount;
}
takeOrder("pineapple");
console.log(`${orderCount}`);
//let pin = "7549";
//let amount = 10;


//pinok = false;
const cashMachine = (pin, amount) =>{
    if(pin=="7549") 
    {
        console.log("pin is ok");
        pinok = true
        }
    if(pin!="7549"){
        console.log(" incorrect pin");
        pinok = false;
 }

 if(pinok==false){
    console.log("sorry no cash");
 }
if(pinok = true){
    if(amount>10){
            console.log("sorry not enough funds in your account");
    }
            if(amount<=10){
                console.log( "Please take your cash")
                

            }
    }
    if(pinok==false){
        console.log("sorry no cash");
    }
}     
    
cashMachine(7544, 10);



const sandwichFiller = ( main, salad, side, sauce, garnish) =>{
    console.log( " Your sanwich has the following ingredients" +
    main + salad + side + sauce +garnish );
}

sandwichFiller(" ham , ", "lettuce , ", "raddish , ", "mayo ,", " and mustard ")