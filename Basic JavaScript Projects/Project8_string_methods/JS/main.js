// Function to demonstrate the concat() method
function concatExample() {
    // Define two strings
    var str1 = "Hello";
    var str2 = "World";
    
    // Use concat() to join the two strings
    var result = str1.concat(" ", str2, "!");
    
    // Display the result in the paragraph with id "concatResult"
    document.getElementById("concatResult").innerHTML = result;
}

// Function to demonstrate the slice() method
function sliceExample() {
    // Define a string to slice
    var text = "The quick brown fox jumps over the lazy dog.";
    
    // Use slice() to extract "quick brown fox"
    var result = text.slice(4, 19);
    
    // Display the result in the paragraph with id "sliceResult"
    document.getElementById("sliceResult").innerHTML = result;
}

// Function to demonstrate the toString() method
function toStringExample() {
    // Define a number
    var num = 12345;
    
    // Use toString() to convert the number to a string
    var result = num.toString();
    
    // Display the result in the paragraph with id "toStringResult"
    document.getElementById("toStringResult").innerHTML = "Number as string: " + result;
}

// Function to demonstrate the toPrecision() method
function toPrecisionExample() {
    // Define a floating-point number
    var num = 123.456789;
    
    // Use toPrecision() to format the number to 4 significant digits
    var result = num.toPrecision(4);
    
    // Display the result in the paragraph with id "toPrecisionResult"
    document.getElementById("toPrecisionResult").innerHTML = "Number with precision: " + result;
}
