let welcomeMessage = "Hello Friends";
console.log('Hello Friends');
console.log(welcomeMessage);
console.clear();

let bagPrice = (15599-(10/100*15599))-272;
let jeansPrice =   (2499-(41/100*2499));

let TotalValue = Math.round((jeansPrice+bagPrice-29+25+20)*118/100);

let bagSummary = `Your final Myntra Bag amount is ₹${TotalValue}`;
console.log(bagSummary);

let noOfStudent = 5;
noOfStudent = noOfStudent + 1;
console.log(noOfStudent);

let money = 1;
console.log(money); // money = 1
money+=2;
console.log(money); // money = money + 2 => 1 + 2 => 3
money-=2;
console.log(money); // money = money - 2 => 3 - 2 => 1
money*=2;
console.log(money); // money = money * 2 => 1 * 2 => 2
money/=2;
console.log(money); // money = money / 2 => 2 / 2 => 1
money++;
console.log(money); // money = money + 1 => 1 + 1 => 2
money%=2;
console.log(money); // money = money % 2 => 2 % 2 => 0
money--;
console.log(money); // money = money - 1 => 0 - 1 => -1