// Addition function
function add() {
    var result = 5 + 3;
    document.getElementById("addResult").innerHTML = "5 + 3 = " + result;
}

// Subtraction function
function subtract() {
    var result = 10 - 4;
    document.getElementById("subtractResult").innerHTML = "10 - 4 = " + result;
}

// Multiplication function
function multiply() {
    var result = 6 * 7;
    document.getElementById("multiplyResult").innerHTML = "6 * 7 = " + result;
}

// Modulus function
function modulus() {
    var result = 25 % 4;
    document.getElementById("modulusResult").innerHTML = "25 % 4 = " + result;
}

// Increment function
function increment() {
    var number = 9;
    number++;
    document.getElementById("incrementResult").innerHTML = "Increment of 9 is " + number;
}

// Decrement function
function decrement() {
    var number = 5;
    number--;
    document.getElementById("decrementResult").innerHTML = "Decrement of 5 is " + number;
}

// Random number function
function randomNumber() {
    var result = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    document.getElementById("randomResult").innerHTML = "Random number (1-100): " + result;
}