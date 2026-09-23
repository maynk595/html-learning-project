//check the output in console of inspect .
console.log(5>2);
console.log(5<2);
console.log(typeof(5<2));
console.log(typeof('true'));
console.log(typeof(true));
console.log(5==5);
console.log(5==4);

console.log(5.0==5); // true
console.log(5=='5.0'); // true "in this both value have to same but not the same datatype."
console.log(5=='five');
console.log(5=='5');  // true
console.log(5===5);  // true

console.log(5==='5'); //false
console.log(5==='5'); // false "===" in this both value have to be same and their datatype also have to same.

// We use (===) to check the equality in Java script.

// order of comparision operators is less than arithematic operator.

// if-else :-
// let age = Number(prompt("Enter your age"));
let age = 66;
if(age>=65){
    console.log("please ask someone to drive");
}
else if(age>=18){
    console.log("You can Drive.");
}
else{
    console.log("Grow up");
}