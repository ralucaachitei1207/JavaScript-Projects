// Function using a ternary operator to check if the user is an adult based on age input
function checkAge() {
    // Get the user's age from the input field
    var age = document.getElementById("ageInput").value;

    // Use a ternary operator to check if the age is 18 or older
    var result = (age >= 18) ? "You are an adult." : "You are not an adult yet.";

    // Display the result in the "ageResult" paragraph
    document.getElementById("ageResult").innerHTML = result;
}

// Constructor function to create a Car object
function Car(make, model, year) {
    // The "this" keyword refers to the current instance of the Car object
    this.make = make;
    this.model = model;
    this.year = year;
}

// Function to display the Car object details in an HTML element
function displayCar() {
    // Create a new instance of the Car object
    var myCar = new Car("Toyota", "Camry", 2021);

    // Display the car details in the "carResult" paragraph
    document.getElementById("carResult").innerHTML = 
        "Car: " + myCar.make + " " + myCar.model + ", Year: " + myCar.year;
}

// Function with a nested function inside
function outerFunction() {
    // Define a variable in the outer function
    var outerMessage = "Outer message: ";

    // Nested function that accesses a variable from the outer function
    function innerFunction() {
        // Define a variable in the nested (inner) function
        var innerMessage = "Inner message!";
        return outerMessage + innerMessage;
    }

    // Call the nested function and display its result in the "nestedResult" paragraph
    document.getElementById("nestedResult").innerHTML = innerFunction();
}
