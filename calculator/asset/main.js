function calculation(){
   let result = "";
   let numberOne = Number(document.getElementById('numberOne').value);
   let numberTwo = Number(document.getElementById('numberTwo').value);
   let operation = document.getElementById('operation').value;

   if(!isNaN(numberOne) && !isNaN(numberTwo)){
     if(operation === "+"){
          result = numberOne + numberTwo;       
     }else if(operation === '-'){
          result = numberOne - numberTwo;
     }else if(operation === "*"){
          result = numberOne * numberTwo;
     }else if(operation === "/"){
          result = numberOne / numberTwo;
     }
   }else{
     alert('Check input number');
   }
   

   document.getElementById("result").value= String(result)
}