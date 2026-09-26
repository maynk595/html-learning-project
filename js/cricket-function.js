function generateComputerChoice(){
    // This will generate a number Between 0 to 3
    let computerMove;
    let randomNumber = Math.random()*3;
    if( randomNumber > 0 && randomNumber <= 1){
        computerMove = 'Bat';
    }
    else if( randomNumber > 1 && randomNumber <= 2){
        computerMove = 'Ball';
    }
    else{
        computerMove = 'Stump';
    }
    return computerMove;
}

function getResult(userMove , computerChoice){

    let resultMsg;

    if(computerChoice === userMove){
        resultMsg = "it's a tie";
    }
    else if(computerChoice == 'Bat' && userMove === 'Ball'){
        resultMsg = 'computer won';
    }
    else if(computerChoice == 'Ball' && userMove === 'Bat'){
        resultMsg = 'User won.';
    }
    else if(computerChoice == 'Stump' && userMove === 'Bat'){
        resultMsg = 'Computer won.';
    }
    else if(computerChoice == 'Bat' && userMove === 'Stump'){
        resultMsg = 'User won.';
    }
    else if(computerChoice == 'Ball' && userMove === 'Stump'){
        resultMsg = 'Computer won.';
    }
    else if(computerChoice == 'Stump' && userMove === 'Ball'){
        resultMsg = 'User won.';
    }
    return resultMsg;
}

document.getElementById('btn1').onclick = function(){
    
    let computerChoice = generateComputerChoice();

    let resultMsg = getResult('Bat',computerChoice);

    alert(`Your choice is Bat and computer choice is ${computerChoice}.So the result is ${resultMsg}.`);
}

document.getElementById('btn2').onclick = function(){
    
    let computerChoice = generateComputerChoice();

    let resultMsg = getResult('Ball',computerChoice);

    alert(`Your choice is Ball and computer choice is ${computerChoice}.So the result is ${resultMsg}.`);
}

document.getElementById('btn3').onclick = function(){
    
    let computerChoice = generateComputerChoice();

    let resultMsg = getResult('Stump',computerChoice);

    alert(`Your choice is stump and computer choice is ${computerChoice}.So the result is ${resultMsg}.`);
}