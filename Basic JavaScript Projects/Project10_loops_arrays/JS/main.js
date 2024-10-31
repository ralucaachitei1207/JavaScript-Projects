// Function that utilizes a while loop
function whileLoopExample() {
    let count = 1;
    let result = "";

    // Using a while loop to count from 1 to 5
    while (count <= 5) {
        result += "Count: " + count + "<br>";
        count++;
    }

    // Display the result in the paragraph with id "whileResult"
    document.getElementById("whileResult").innerHTML = result;
}

// Function that utilizes a for loop
function forLoopExample() {
    let result = "";

    // Using a for loop to iterate through numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
        result += "Iteration: " + i + "<br>";
    }

    // Display the result in the paragraph with id "forResult"
    document.getElementById("forResult").innerHTML = result;
}

// Function that utilizes an array
function arrayExample() {
    // Creating an array of colors
    let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
    let result = "";

    // Looping through the array to list all colors
    for (let i = 0; i < colors.length; i++) {
        result += "Color " + (i + 1) + ": " + colors[i] + "<br>";
    }

    // Display the result in the paragraph with id "arrayResult"
    document.getElementById("arrayResult").innerHTML = result;
}

// Function to create an object using the let keyword
function objectExample() {
    // Creating an object to represent a car
    let car = {
        make: "Toyota",
        model: "Camry",
        year: 2021,
        color: "Black"
    };

    // Displaying object properties
    let result = "Car Make: " + car.make + "<br>" +
                 "Model: " + car.model + "<br>" +
                 "Year: " + car.year + "<br>" +
                 "Color: " + car.color;

    // Display the result in the paragraph with id "objectResult"
    document.getElementById("objectResult").innerHTML = result;
}
