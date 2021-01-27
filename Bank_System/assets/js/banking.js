var account={
    Name:"",
    acc_no:"",
    balance:""

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
    account.balance-=wd;
}
function Balance(){
    console.log("Your balance is "+account.balance);

}
function Transfer(){
    var trs=parseFloat(prompt("Enter the amount you are transfering"));
    account.balance-=trs;
    var recepant=new account();
    recepant.Name=prompt("Enter the recepant's name");
    recepant.acc_no=prompt("Enter the recepant's account number");
    recepant.balance+=trs;
}
