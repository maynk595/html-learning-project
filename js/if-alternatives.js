let age = 31;
let result;
// if(age > 18){
//     result = 'adult';
// }
// else{
//     result = 'kid';
// }

// Ternary operator :- (shothand of if-else)
// result = age > 18 ? result = 'adult' : result = 'kid';
// console.log(result);

// Guard operator :- use when fallback value is needed. 
// let age1;
// let finalAge = age1 || 18;  take age value or take 18 
// console.log(age1);
// console.log(finalAge);  if age1 is not defined so it give 18 as a output.

// default operator :- use when you want to considered only null and undefined as falsy.
// if first value is falsy , so it will return other value.
let age2;
let finalAge = age2 ?? 18; 
console.log(age2);
console.log(finalAge);