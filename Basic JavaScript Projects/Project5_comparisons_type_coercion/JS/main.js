// Step 1: Using document.write() and typeof operator
var myVariable = "Hello, world!";
document.write("The type of myVariable is: " + typeof myVariable + "<br>");

// Step 2: Expression combining a string and a number
var combined = "The answer is: " + 42;
document.write(combined + "<br>");

// Step 3: Using comparison operators (==, ===, >, <, &&, ||, !)
var a = 5;
var b = "5";
var c = 10;

// == operator: checks if values are equal, disregarding type
document.write("a == b: " + (a == b) + "<br>");

// === operator: checks if values and types are equal
document.write("a === b: " + (a === b) + "<br>");

// > operator: checks if a is greater than c
document.write("a > c: " + (a > c) + "<br>");

// < operator: checks if a is less than c
document.write("a < c: " + (a < c) + "<br>");

// && operator: checks if both conditions are true
document.write("a == b && a < c: " + (a == b && a < c) + "<br>");

// || operator: checks if at least one condition is true
document.write("a == b || a > c: " + (a == b || a > c) + "<br>");

// ! operator: negates the result
document.write("!false: " + (!false) + "<br>");
