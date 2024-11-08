// This function is triggered when the "Place Order" button is clicked
function getReceipt() {
    // Initialize the receipt text and running total cost
    let text1 = "<h3>You Ordered:</h3>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let selectedSize;

    // Retrieve the selected pizza size and calculate its price
    const sizeArray = document.getElementsByName("size");
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
        }
    }

    // Determine price based on selected pizza size
    switch (selectedSize) {
        case "Personal Pizza":
            sizeTotal = 6;
            break;
        case "Small Pizza":
            sizeTotal = 8;
            break;
        case "Medium Pizza":
            sizeTotal = 10;
            break;
        case "Large Pizza":
            sizeTotal = 14;
            break;
        case "Extra Large Pizza":
            sizeTotal = 16;
            break;
        default:
            sizeTotal = 0; // Set to 0 if no size is selected
    }

    // Add the pizza size cost to the running total
    runningTotal = sizeTotal;
    console.log(`${selectedSize} = $${sizeTotal}.00`);
    console.log("Subtotal: $" + runningTotal + ".00");

    // Pass the running total and receipt text to the topping function
    getTopping(runningTotal, text1);
}

// This function calculates the cost of the selected toppings
function getTopping(runningTotal, text1) {
    // Initialize the topping total and an array to hold selected toppings
    let toppingTotal = 0;
    const selectedTopping = [];
    const toppingArray = document.getElementsByName("Topping");

    // Loop through toppings, adding each selected topping to the array
    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: (" + toppingArray[j].value + ")");
            text1 += toppingArray[j].value + "<br>";
        }
    }

    // Calculate the cost of toppings (first topping is free)
    const toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1; // First topping is free
    } else {
        toppingTotal = 0; // No charge if only one topping is selected
    }

    // Add the topping total to the running total
    runningTotal += toppingTotal;
    console.log("Total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping(s) - 1 free topping = $" + toppingTotal + ".00");
    console.log("Purchase Total: $" + runningTotal + ".00");

    // Display the receipt text and total price on the webpage
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
