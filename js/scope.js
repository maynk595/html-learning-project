let age = 34;
let userMessage; // This is the global scope that we declared outside all the fuction or blocks.
if(age > 18){
    userMessage = 'You can drive.'; // if we define variable here it's a block scope or a local scope.
    console.log(userMessage);
}
else{
    userMessage = 'Use a bicycle.';
    console.log(userMessage);
}
 console.log(userMessage);