// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {
    // Ensures a square hasn't been selected already.
    if (selectedSquares.some(element => element.includes(squareNumber))) {
        return;
    }
    // Retrieves the HTML element that was clicked.
    let select = document.getElementById(squareNumber);
    // Places X or O and sets background image styling.
    if (activePlayer === 'X') {
        select.style.backgroundImage = 'url("images/x.png")';
    } else {
        select.style.backgroundImage = 'url("images/o.png")';
    }
    select.style.backgroundSize = 'contain';
    select.style.backgroundRepeat = 'no-repeat';
    select.style.backgroundPosition = 'center';

    // Concatenates square number and active player and adds to the array.
    selectedSquares.push(squareNumber + activePlayer);
    // Calls a function to check for any win conditions.
    checkWinConditions();
    // Switches the active player.
    activePlayer = (activePlayer === 'X') ? 'O' : 'X';

    // Plays placement sound.
    audio('./media/place_icon.mp3');
    // If it's the computer's turn, disables click and calls computersTurn.
    if (activePlayer === 'O') {
        disableClick();
        setTimeout(() => computersTurn(), 1000);
    }
    return true;
}

// This function checks win conditions and draws a win line if needed.
function checkWinConditions() {
    // Horizontal win conditions
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 550, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 300, 550, 300); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 500, 550, 500); }

    // Vertical win conditions
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 550); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(300, 50, 300, 550); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(500, 50, 500, 550); }

    // Diagonal win conditions
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(50, 50, 550, 550); }
    else if (arrayIncludes('2X', '4X', '6X')) { drawWinLine(550, 50, 50, 550); }

    // Repeat the same checks for "O"
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 550, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 300, 550, 300); }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 500, 550, 500); }

    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 550); }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(300, 50, 300, 550); }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(500, 50, 500, 550); }

    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(50, 50, 550, 550); }
    else if (arrayIncludes('2O', '4O', '6O')) { drawWinLine(550, 50, 50, 550); }

    // Check for a tie if all squares are filled and no win condition met
    else if (selectedSquares.length >= 9) {
        audio('./media/tie_game.mp3');
        setTimeout(() => resetGame(), 500);
    }
}

// Helper function to check if the array includes three specified values.
function arrayIncludes(squareA, squareB, squareC) {
    return selectedSquares.includes(squareA) && selectedSquares.includes(squareB) && selectedSquares.includes(squareC);
}

// Temporarily disables clicking.
function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(() => document.body.style.pointerEvents = 'auto', 1000);
}

// Plays an audio file.
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

// Draws a line on the canvas for a win.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2;
    let x = x1, y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();

        // Increment x and y toward the end coordinates
        if (x < x2) x += Math.min(10, x2 - x);
        if (y < y2) y += Math.min(10, y2 - y);
        if (x > x2) x -= Math.min(10, x - x2);
        if (y > y2) y -= Math.min(10, y - y2);

        // Stop the animation when reaching the end coordinates
        if (x === x2 && y === y2) {
            cancelAnimationFrame(animationLoop);
        }
    }

    // Function to clear the canvas
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();
    audio('./media/win_game.mp3');
    animateLineDrawing();
    setTimeout(() => { clear(); resetGame(); }, 1000);
}

// Resets the game board.
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}

// Computer randomly selects an available square.
function computersTurn() {
    let success = false;
    let pickASquare;
    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXOrO(pickASquare)) {
            success = true;
        }
    }
}
