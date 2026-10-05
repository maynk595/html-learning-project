const SCORE_STORAGE_KEY = 'cricketScore';

function readSavedScore() {
    try {
        const savedValue = localStorage.getItem(SCORE_STORAGE_KEY);
        const parsedValue = savedValue ? JSON.parse(savedValue) : {};
        return parsedValue && typeof parsedValue === 'object' ? parsedValue : {};
    } catch (error) {
        return {};
    }
}

const savedScore = readSavedScore();
const score = {
    Win: Number.isFinite(Number(savedScore.Win)) ? Number(savedScore.Win) : 0,
    Lose: Number.isFinite(Number(savedScore.Lose)) ? Number(savedScore.Lose) : 0,
    Tie: Number.isFinite(Number(savedScore.Tie)) ? Number(savedScore.Tie) : 0
};

let gameDisplay;

function saveScore() {
    try {
        localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(score));
    } catch (error) {
        // The game can still run when browser storage is unavailable.
    }
}

function updateGameDisplay({ userMove, computerChoice, result } = {}) {
    if (!gameDisplay) return;
    if (userMove !== undefined) gameDisplay.userChoice.textContent = userMove;
    if (computerChoice !== undefined) gameDisplay.computerChoice.textContent = computerChoice;
    if (result !== undefined) gameDisplay.result.textContent = result;
    gameDisplay.score.textContent = `Wins: ${score.Win}, Losses: ${score.Lose}, Ties: ${score.Tie}`;
}

function clearScore() {
    score.Win = 0;
    score.Lose = 0;
    score.Tie = 0;
    try {
        localStorage.removeItem(SCORE_STORAGE_KEY);
    } catch (error) {
        // Keep the in-memory reset even when browser storage is unavailable.
    }
    updateGameDisplay({ userMove: '-', computerChoice: '-', result: 'Score reset.' });
}

function generateComputerChoice() {
    const choices = ['Bat', 'Ball', 'Stump'];
    const cryptoSource = window.crypto;

    if (cryptoSource && cryptoSource.getRandomValues) {
        // Reject the small range that would make one of the three choices
        // very slightly more likely than the others.
        const range = 0x100000000;
        const limit = range - (range % choices.length);
        const randomValue = new Uint32Array(1);
        let value;

        do {
            cryptoSource.getRandomValues(randomValue);
            value = randomValue[0];
        } while (value >= limit);

        return choices[value % choices.length];
    }

    return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(userMove, computerChoice) {
    if (userMove === computerChoice) {
        score.Tie += 1;
        saveScore();
        return "It's a tie.";
    }

    // Bat beats Ball, Ball beats Stump, and Stump beats Bat.
    const winningMoves = { Bat: 'Ball', Ball: 'Stump', Stump: 'Bat' };
    if (winningMoves[userMove] === computerChoice) {
        score.Win += 1;
        saveScore();
        return 'You won.';
    }

    score.Lose += 1;
    saveScore();
    return 'Computer won.';
}

document.addEventListener('DOMContentLoaded', function () {
    gameDisplay = {
        userChoice: document.getElementById('user-move'),
        computerChoice: document.getElementById('computer-move'),
        result: document.getElementById('result'),
        score: document.getElementById('score')
    };

    updateGameDisplay({ userMove: '-', computerChoice: '-' });

    const moveButtons = document.querySelectorAll('[data-move]');
    moveButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.disabled) return;

            const userMove = button.dataset.move;
            moveButtons.forEach(function (moveButton) {
                moveButton.disabled = true;
            });
            const resetButton = document.getElementById('btn4');
            if (resetButton) resetButton.disabled = true;
            updateGameDisplay({ userMove, computerChoice: '...', result: 'Computer is choosing...' });
            gameDisplay.result.classList.add('thinking');

            window.setTimeout(function () {
                const computerChoice = generateComputerChoice();
                const result = getResult(userMove, computerChoice);
                updateGameDisplay({ computerChoice, result });
                gameDisplay.result.classList.remove('thinking');
                moveButtons.forEach(function (moveButton) {
                    moveButton.disabled = false;
                });
                if (resetButton) resetButton.disabled = false;
            }, 500);
        });
    });

    const resetButton = document.getElementById('btn4');
    if (resetButton) resetButton.addEventListener('click', clearScore);
});
