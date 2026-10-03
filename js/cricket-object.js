// This object stores the scoreboard for the game.
let score = {
    Win: 0,
    Lose: 0,
    Tie: 0,
    displayScore: function() {
        console.log(`Score : Win = ${this.Win} , Lose = ${this.Lose} , Tie = ${this.Tie}`);
    }
};

// This function creates a random computer move: Bat, Ball, or Stump.
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    // 0 = Bat, 1 = Ball, 2 = Stump
    if (randomNumber === 0) {
        return 'Bat';
    }
    if (randomNumber === 1) {
        return 'Ball';
    }
    return 'Stump';
}

// This function compares the user move with the computer move and updates the score.
function getResult(userMove, computerChoice) {
    // If both choose the same move, it is a tie.
    if (computerChoice === userMove) {
        score.Tie++;
        return "It's a tie.";
    }

    // Bat beats Ball, Ball beats Stump, and Stump beats Bat.
    if (computerChoice === 'Bat' && userMove === 'Ball') {
        score.Win++;
        return 'User won.';
    }
    if (computerChoice === 'Ball' && userMove === 'Bat') {
        score.Lose++;
        return 'Computer won.';
    }
    if (computerChoice === 'Ball' && userMove === 'Stump') {
        score.Win++;
        return 'User won.';
    }
    if (computerChoice === 'Stump' && userMove === 'Ball') {
        score.Lose++;
        return 'Computer won.';
    }
    if (computerChoice === 'Stump' && userMove === 'Bat') {
        score.Win++;
        return 'User won.';
    }
    if (computerChoice === 'Bat' && userMove === 'Stump') {
        score.Lose++;
        return 'Computer won.';
    }

    // If something unexpected happens, show an invalid move message.
    return 'Invalid move.';
}

// This function attaches a click event to each button for a specific move.
function handleChoice(userMove, buttonId) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    // When the button is clicked, generate computer move and decide the result.
    button.onclick = function () {
        const computerChoice = generateComputerChoice();
        const resultMsg = getResult(userMove, computerChoice);

        // Show the current score in the console.
        score.displayScore();

        // Display the move result to the user with an alert.
        alert(`Result: ${resultMsg}\nYour choice: ${userMove}\nComputer choice: ${computerChoice} \nScore: Win = ${score.Win}, Lose = ${score.Lose}, Tie = ${score.Tie}`
        );
    };
}

// This runs after the HTML is loaded, so the buttons are ready to receive events.
document.addEventListener('DOMContentLoaded', function () {
    // Connect each button to its related move.
    handleChoice('Bat', 'btn1');
    handleChoice('Ball', 'btn2');
    handleChoice('Stump', 'btn3');
});