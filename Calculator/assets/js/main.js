var firstNumber;
var secondNumber;

function addNum(firstNumber,secondNumber){
    var Sum= firstNumber + secondNumber;

    console.log("Sum = " +Sum)
}

function subtractNum(firstNumber,secondNumber){
    let Dif= firstNumber - secondNumber;

    console.log("Difference = "+Dif)
}

function multiplyNum(firstNumber,secondNumber){
    let Prd= firstNumber * secondNumber;

    console.log("Product = " +Prd)
}


function divideNum(firstNumber,secondNumber){
    let Quot= firstNumber / secondNumber;

    console.log("Quotient = " +Quot.toFixed(2))
}


(function(){
    let opr=prompt("Choose an operator (+,-,*,/)");
    if(opr=="-"){subtractNum(firstNumber,secondNumber);}
    else if(opr=="/"){divideNum(firstNumber, secondNumber)}
    firstNumber=prompt("Enter the first number");
    secondNumber=prompt("Enter the second number")

    
}) ();