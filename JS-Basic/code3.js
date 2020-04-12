var bill = new Array(124,48,268);
function calctip(bill){
    if(bill < 50){
        return 0.20*bill;
    }
    else if(bill > 50 && bill <200){
        return 0.15*bill;
    }else{
        return 0.10*bill;
    }
}

var tip = [calctip(124),calctip(48),calctip(268)];
console.log(bill);
console.log(tip);
var totalArray = [bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]];
console.log(totalArray);
var total = totalArray[0]+totalArray[1]+totalArray[2];
console.log(total);
