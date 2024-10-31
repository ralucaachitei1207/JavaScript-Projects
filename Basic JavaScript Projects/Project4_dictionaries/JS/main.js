// Define a function to display a key-value pair from a dictionary
function displayAnimalInfo() {
    // Create a dictionary (object) for an animal
    var animal = {
        type: "Dog",
        name: "Buddy",
        age: 5,
        color: "Brown"
    };

    // Delete the age property before displaying the dictionary
    delete animal.age;

    // Output the dictionary information (type and name) to an HTML element
    document.getElementById("output").innerHTML = "Animal: " + animal.type + ", Name: " + animal.name;
}
