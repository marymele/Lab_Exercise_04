var account={
    Name:"",
    acc_no:"",
    balance:"3000"

};

var account2={
    Name:"",
    acc_no:"",
    balance:"5000"

};

(function(){


    account.Name=prompt("Enter your name");
    account.acc_no=prompt("Enter your account number");
    var service=prompt("Choose the number of the service you want \n1--Deposit\n2--Withdraw\n3--Balance\n4--Transfer");
    if(service==1){Deposit();}
    else if(service==2){Withdraw();}
    else if(service==3){Balance();}
    else if(service==4){Transfer();}


})();


function Deposit(){   
    var depo=parseFloat(prompt("Enter the amount you are depositing"));
    account.balance+=depo;

}

function Withdraw(){
    var wd=parseFloat(prompt("Enter the amount you are withdrawing"));
    var min=50;
    if(account.balance<=min){
        console.log("You can't withdraw. Your balance is low ");
    }
    else{account.balance-=wd;}
    
}
function Balance(){
    console.log("Your balance is "+account.balance);

}
function Transfer(){
    var trs=parseFloat(prompt("Enter the amount you are transfering"));
    
    var recepant=prompt("Choose an account (1/2)");
    if(recepant==2){
        account.balance-=trs;
        account2.balance+=trs;
    }
    else{
        account.balance+=trs;
        account2.balance-=trs;
    }
    return "Your transfer is succesful.";
}
