const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;

}

function clearDisplay() {
    display.value = "";

}

function calculate(){
try{
let expression = display.value;
expression = expression.replaceAll("^" , "**");
display.value = eval(expression);
}
catch(error){
    display.value = "Error";
}
}



// try{
//      display.value =eval(display.value);
// }
// catch(error){
//     display.value ="Error";
// }
