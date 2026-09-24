document.getElementById('btn1').onclick = function () {

    let randomNumber = Math.random() * 3;
    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Ball';
    }
    else {
        computerChoice = 'Stump';
    }

    let resultMsg;

    if (computerChoice === 'Ball') {
        resultMsg = 'You Won.';
    }
    else if (computerChoice === 'Bat') {
        resultMsg = "It's a tie.";
    }
    else if (computerChoice === 'Stump') {
        resultMsg = 'Computer won.';
    }

    alert(`You have chosen Bat. Computer choice is ${computerChoice} and ${resultMsg}`);
};


document.getElementById('btn2').onclick = function () {

    let randomNumber = Math.random() * 3;
    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Ball';
    }
    else {
        computerChoice = 'Stump';
    }

    let resultMsg;

    if (computerChoice === 'Ball') {
        resultMsg = "It's a tie.";
    }
    else if (computerChoice === 'Bat') {
        resultMsg = 'Computer won.';
    }
    else if (computerChoice === 'Stump') {
        resultMsg = 'You won.';
    }

    alert(`You have chosen Ball. Computer choice is ${computerChoice} and ${resultMsg}`);
};


document.getElementById('btn3').onclick = function () {

    let randomNumber = Math.random() * 3;
    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Ball';
    }
    else {
        computerChoice = 'Stump';
    }

    let resultMsg;

    if (computerChoice === 'Ball') {
        resultMsg = 'Computer won.';
    }
    else if (computerChoice === 'Bat') {
        resultMsg = 'You won.';
    }
    else if (computerChoice === 'Stump') {
        resultMsg = "It's a tie.";
    }

    alert(`You have chosen Stump. Computer choice is ${computerChoice} and ${resultMsg}`);
};