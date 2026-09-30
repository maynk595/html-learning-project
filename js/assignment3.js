// Check even or Odd :-
function oddOrEven(num){
    if(num % 2 == 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
let yourChoice = oddOrEven(2);
console.log(yourChoice);
yourChoice = oddOrEven(18);
console.log(yourChoice);
yourChoice = oddOrEven(23);
console.log(yourChoice);

// Larger of the two number :-
function largerOfTwo(num1,num2){
    // if(num1 > num2){
    //     return num1 + ' is larger';
    // }
    // else{
    //     return num2 + ' is larger';
    // }
    return num1 > num2 ? num1 + ' is larger.' : num2 +' is larger.' ;
}
let userChoice = largerOfTwo(2,3);
console.log(userChoice);
userChoice = largerOfTwo(12,3);
console.log(userChoice);

// Con
function toFahrenheit(celsiusValue){
   return (9/5)*celsiusValue + 32;
}
let userValue = toFahrenheit(3);
console.log(userValue);
userValue = toFahrenheit(0);
console.log(userValue);
userValue = toFahrenheit(100);
console.log(userValue);