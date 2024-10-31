// Global variable
var globalVar = "I am a global variable!";

// Function demonstrating a local variable and if statement
function variableScopeDemo() {
    // Local variable
    var localVar = "I am a local variable!";
    
    // Using if statement to check the length of the global variable string
    if (globalVar.length > 10) {
        console.log("Global variable length is greater than 10.");
    } else {
        console.log("Global variable length is 10 or less.");
    }

    // Attempting to use the local variable outside of its scope will cause an error.
    console.log(localVar); // This will work fine as it’s inside the function.
}

variableScopeDemo();

// Function with an intentional error for debugging
function errorDemo() {
    try {
        // Intentionally misspelled variable name to create an error
        console.log(loclVar); // Should be "localVar" but misspelled
    } catch (error) {
        console.log("Error caught: " + error.message);
    }
}

errorDemo();

// Function to display a message based on the time of day
function Time_function() {
    var time = new Date().getHours(); // Get the current hour
    var greeting;

    // Determine the appropriate greeting based on the current time
    if (time < 12) {
        greeting = "Good morning!";
    } else if (time < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Display the greeting in the HTML element with id "timeResult"
    document.getElementById("timeResult").innerHTML = greeting;
}
