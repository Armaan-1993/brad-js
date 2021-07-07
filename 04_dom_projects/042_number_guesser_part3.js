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
    winningNum = 2,
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
}

//set message function

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
