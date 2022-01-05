let display = "0";
let operand1 = null;
let operand2 = null;
let operator = null;

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return +((num1 / num2).toFixed(5));
}

function operate(operator, num1, num2){
    if(operator == "+"){
        return add(num1, num2);
    } else if (operator == "-"){
        return subtract(num1, num2);
    } else if (operator == "x"){
        return multiply(num1, num2);
    } else if (operator == "/"){
        return divide(num1, num2);
    }
}

function clear(){
    let displayContainer = document.querySelector("#display");
    display = "0";
    operand1 = null;
    operand2 = null;
    operator = null;
    displayContainer.textContent = display;
}

function displayCalculation(){
    let displayContainer = document.querySelector("#display");

    // Check for bad numbers
    if(operand1 == null || operand2 == null || operator == null){
        clear();
        displayContainer.textContent = "ERROR";
        return;
    }
    
    operand2 = +display;

    // Don't divide by zero
    if (operator == "/" && +operand2 == 0){
        clear();
        displayContainer.textContent = "NO DIVISIONS BY ZERO >:(";
        return;
    } 

    // Do calculation
    console.log(operator, operand1, operand2);
    let total = operate(operator, operand1, operand2);

    // Display result
    operand1 = total;
    display = `${total}`;
    displayContainer.textContent = `${total}`;
    operand2 = null;
}

let numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
    button.addEventListener('click', function(){
        let displayContainer = document.querySelector("#display");
        if(display == "0") {
            display = this.textContent;
        } else {
            display = display + this.textContent;
        }
        displayContainer.textContent = display;
    });
});

let symbolButtons = document.querySelectorAll(".symbols");
symbolButtons.forEach((button) => {
    button.addEventListener('click', function(){
        if (!operator) {
            operand1 = +display;
            operator = this.textContent;
        } else {
            displayCalculation();
            operator = this.textContent;
        }
        display = "0";
    });
});

let clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', clear);

let equalButton = document.querySelector("#equal");
equalButton.addEventListener('click', function(){
    displayCalculation();
});