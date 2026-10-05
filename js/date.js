let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());

let button = document.createElement("button");
button.textContent = "Click Me";
document.querySelector('.my-div').appendChild(button);
document.querySelector('.my-div').removeChild(button);