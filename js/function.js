let age;
function printAge(){  // Function defining
     console.log(`Your age is ${age}`);
}

age = 3;
  printAge(age); // function calling
age = 20;
  printAge(age); // function calling

function generateRandomMove(){
    let random = Math.random();
    let randomMove = random * 4;
    return randomMove;   // it will return the random move.
}

   let computerMove = generateRandomMove();
   console.log(computerMove);
   console.log(generateRandomMove());
   console.log(generateRandomMove());
   console.log(generateRandomMove());

function driveStatus(){
    let age ;
    if(age === undefined){
        return 'Who are you?';
    }
    console.log('checking driver status :-');
    let status;
    if(age > 18){
       status = "You can drive."
    }
    else{
        status = "Use a Bicycle."
    }
    return status;
}
 
 console.log(driveStatus());

 function sum(a ,b){ // a , b are the arguments.
    let sum = a + b;
    return sum;
 }

 console.log(sum(5,3)); // 5,3 are the arguments.
 console.log(sum(5,8));
 console.log(sum(9,3));

 function greeting(name = 'Rohit'){ // it only work on when we don't pass the argument.
    console.log(`Namaste ${greeting} Uncle.`);
 }
  greeting();