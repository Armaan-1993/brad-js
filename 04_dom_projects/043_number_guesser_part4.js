/*
GAME FUNCTION:
* Player must guess a number between a min and a max.
* Player gets a certain number of guesses.
* Notify player of the guesses remaining.
* Notify the player of the correct answer if he loose the game.
* Let the player chose to play again
*/

//GUESSES ELEMENTS

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements

const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//play again? Here we need to use an event listener to change the play again value back to submit

game.addEventListener("mousedown", function (e) {
    //mousedown event is used here rather than click since we want to reload the page and get the initial submit value of guess button
    if (e.target.className === "play-again") {
        window.location.reload(); //this is used to reload the page . We are reloading the page since we want to get back the submit value of the guess button
    }
});

//Listen for guess
guessBtn.addEventListener("click", function () {
    // console.log(guessInput.value); //since the output we see in condole.log is black in color , we undersytand that it is a string and not a number. Hence we need to parse it to number.
    let guess = parseInt(guessInput.value); // it should provide naN if you submit without any value now that we have parsed it to number.
    // console.log(guess);

    //Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }
    //check if he won
    if (guess === winningNum) {
        // //game over - won
        // //disable input
        // guessInput.disabled = true;
        // //change border color
        // guessInput.style.borderColor = "green";
        // //set message
        // setMessage(`${winningNum} is correct ,you WIN! `, "green");
        //game won!

        gameOver(true, `${winningNum} is correct ,you WIN`);
    } else {
        //wrong answer
        guessesLeft = guessesLeft - 1;
        if (guessesLeft === 0) {
            //game over - lost
            // guessInput.disabled = true;
            // //change border color
            // guessInput.style.borderColor = "red";
            // //set message
            // setMessage(
            //     `Game Over! You Lost. The correct number was ${winningNum}`,
            //     "red"
            // );

            gameOver(
                false,
                `Game Over! You Lost. The correct number was ${winningNum}`
            );
        } else {
            //game continues evn after the answer was wrong

            //change border color
            guessInput.style.borderColor = "red";

            //Clear input
            guessInput.value = "";

            setMessage(
                `${guess} is not the correct answer. There are ${guessesLeft} guesses left`,
                "red"
            );
        }
    }
});

//game over function

function gameOver(won, msg) {
    let color;
    won === true ? (color = "green") : (color = "red");

    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //set message color
    message.style.color = color;
    //set message
    setMessage(msg);

    //Play again?
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
}

//get winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1 + min)); //Math.random generates a random decimal number , which needs to be multiplied in this manner to get random numbers between the max and min numbers. However , they also need to be converted to whole numbers using Math.floor .
}

//set message function

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
