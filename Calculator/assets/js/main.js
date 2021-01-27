

(function(){
    const opr=prompt("Choose an operator (+,-,*,/)");
   
    var firstNumber;
    var secondNumber;


    if(opr=="-"){
        firstNumber=prompt("Enter the first number");
        secondNumber=prompt("Enter the second number");
        subtractNum(firstNumber,secondNumber);}
    else if(opr=="+"){addNum();}
    else if(opr=="/"){
        firstNumber=prompt("Enter the first number");
        secondNumber=prompt("Enter the second number");
        divideNum(firstNumber, secondNumber);}
    else if(opr=="*"){multiplyNum()};

    
}) ();

function addNum(){
    var Sum=0;
    var value= new Array();
    var nums=prompt("Enter the number of values to be added")
    for(var i=0;i<nums;i++){
        x=prompt("Enter a value");
        value[i]=x;
    }

   for(var i=0;i<nums;i++){
       Sum+=parseInt(value[i]);
   }
   
   console.log("Sum = " +Sum)
}

function subtractNum(firstNumber,secondNumber){
    let Dif= firstNumber - secondNumber;

    console.log("Difference = "+Dif)
}

function multiplyNum(){
    var Prd=1;
    var value= new Array();
    var nums=prompt("Enter the number of values to be multiplied ")
    for(var i=0;i<nums;i++){
        x=prompt("Enter a value");
        value[i]=x;
    }

   for(var i=0;i<nums;i++){
       Prd*=parseInt(value[i]);
   }

    console.log("Product = " +Prd)
}


function divideNum(firstNumber,secondNumber){
    while(secondNumber==0){
      secondNumber=prompt("Enter a none-zero number for denominator");
    }
    let Quot= parseFloat(firstNumber) /parseFloat(secondNumber);

    console.log("Quotient = " +Quot)
}


















