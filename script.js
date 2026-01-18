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

function fact(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculate() {
    try {
        let expression = display.value;

        // power support
        expression = expression.replaceAll("^", "**");

        // factorial support (e.g. 5! -> fact(5))
        expression = expression.replace(/(\d+)!/g, "fact($1)");

        display.value = eval(expression);
    }
    catch (error) {
        display.value = "Error";
    }
}



// try{
//      display.value =eval(display.value);
// }
// catch(error){
//     display.value ="Error";
// }
