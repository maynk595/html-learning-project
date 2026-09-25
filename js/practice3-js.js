let age = 28;
let gender = 'male' ;
let finalDiscount ;
if(age <= 5){
    finalDiscount = '100 % off';
}
else if(age <= 8 || gender === 'female'){
    finalDiscount = '50 % off';
}
else if(age >= 65){
    finalDiscount = '30 % off';
}
else{
    finalDiscount = '0 % off' ;
}

console.log(`Your final discount is ${finalDiscount}`);