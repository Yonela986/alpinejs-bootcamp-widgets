function totalPhoneBill(bill){
    var billList = bill.split(', ');
    //console.log(billList)
   var total = 0; 
   for(var i = 0; i < billList.length; i++){
     var eachItem = billList[i]
    if(eachItem === "call"){
      total += 2.75;
        }
     else if(eachItem === "sms"){
         total += 0.65;
         }
     }
    //console.log(total)
    return "R" + total.toFixed(2);
  }