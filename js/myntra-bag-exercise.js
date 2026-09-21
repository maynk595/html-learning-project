let cartQuantity = 0;
document.querySelector('#add_item').innerText = `Your bag has ${cartQuantity}  items`;

let moveToWishlist = 0;
document.querySelector('#move_item').innerText = `Your Wishlist has ${moveToWishlist}  items`;


//you have to create variable const by default but if you know you have to change in future you can make it let.In most cases we use let or const , var is less used generally but we can access var form outside the function we can't access let or const outside the function.
const pi=3.14159265359; // if we use const , we can't change this value
let r = 4 ; // if we use let , we can change this value 
// pi = 2;
console.log(pi*r*r);