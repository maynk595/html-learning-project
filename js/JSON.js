const product = {
        name: "T-shirt",
        price: 19.99,
        rating: {
        star: 4.5,
        noOfReviews: 100 ,
    }
};
console.log(typeof product);
console.log(product);
let str = JSON.stringify(product); // it will convert the object into string
console.log(typeof str);
console.log(str);

let newProduct = JSON.parse(str); // it will convert the string into object
console.log(typeof newProduct);
console.log(newProduct);

localStorage.setItem("product", str); // it will store the string in local storage
localStorage.setItem("price", product.price); // it will store the price in local storage

console.log(localStorage.getItem("product")); // it will get the string from local storage
console.log(localStorage.getItem("price")); // it will get the price from local storage

localStorage.setItem("price", '20.99'); // it will update the price in local storage
console.log(localStorage.getItem("price")); // it will get the updated price from local storage

localStorage.setItem("product" , JSON.stringify(product)); // it will store the object in local storage but it will convert the object into string
console.log(localStorage.getItem("product")); // it will get the string from local storage

let product2 = JSON.parse(localStorage.getItem("product")); // it will convert the string into object
console.log(typeof product2);
console.log(product2);

localStorage.removeItem("price"); // it will remove the price from local storage
console.log(localStorage.getItem("price")); // it will return null because the price is removed from local storage

localStorage.clear(); // it will remove all the items from local storage
console.log(localStorage.getItem("product")); // it will return null because the product is removed from local storage