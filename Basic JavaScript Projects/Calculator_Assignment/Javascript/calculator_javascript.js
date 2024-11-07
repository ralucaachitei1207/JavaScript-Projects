// Creates an object to keep track of values.
const Calculator = {
    // This will display 0 on the calculator screen.
    Display_Value: '0',
    // This will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    // This checks whether or not the second operand has been inputted by the user.
    Wait_Second_Operand: false,
    // This will hold the operator, we set it to null for now.
    operator: null,
};

// This modifies values each time a button is clicked on.
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // If `Wait_Second_Operand` is true, reset `Display_Value` to the digit that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // Append the digit to the current `Display_Value`
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// This section handles decimal points.
function Input_Decimal(dot) {
    // If `Wait_Second_Operand` is true, reset `Display_Value`.
    if (Calculator.Wait_Second_Operand === true) {
        Calculator.Display_Value = '0.';
        Calculator.Wait_Second_Operand = false;
        return;
    }

    // If `Display_Value` does not already include a decimal point, add it.
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// This section handles operators.
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    const Value_of_Input = parseFloat(Display_Value);

    // When an operator is pressed and `First_Operand` is null, store the `Value_of_Input`
    // as `First_Operand` and set `Wait_Second_Operand` to true.
    if (First_Operand == null && !isNaN(Value_of_Input)) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        // If an operator already exists, calculate the result and store it as `First_Operand`
        const result = Perform_Calculation[operator](First_Operand, Value_of_Input);
        Calculator.Display_Value = `${parseFloat(result.toFixed(9))}`; // Fix any rounding issues
        Calculator.First_Operand = result;
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

// Object that holds functions for each operation.
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

// Resets the calculator to its default state.
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// Updates the calculator screen with the contents of `Display_Value`.
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

// Initialize display
Update_Display();

// Event listener for all calculator button clicks.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;

    // If the element clicked is not a button, exit the function.
    if (!target.matches('button')) return;

    // If the operator button was clicked, handle the operator
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    // If the decimal button was clicked, add the decimal
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    // If the all-clear button was clicked, reset the calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    // Handle digit input
    Input_Digit(target.value);
    Update_Display();
});
