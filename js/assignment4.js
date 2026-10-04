let product = {
    name: "T-shirt",
    size: "medium",
    price: "$19.99",
    color: "blue",
    'delivery-time': "3-5 business days" ,
};
let copyProduct = product; // This creates a reference to the original product object
console.log(product); // Output: { name: 'T-shirt', size: 'medium', price: '$19.99', color: 'blue' }
copyProduct.price = "$17.99"; // Modifying the price property of the copyProduct object
console.log(copyProduct); // Output: { name: 'T-shirt', size: 'medium', price: '$17.99', color: 'blue' }
copyProduct.size = "Large"; // Modifying the size property of the copyProduct object
console.log(copyProduct); // Output: { name: 'T-shirt', size: 'Large', price: '$17.99', color: 'blue' }

console.log(product['delivery-time']); // Output: 3-5 business days

let obj = {
    message : "Hello, World!",
    status : "success",
}
console.log(obj);
let { message , status } = obj;
console.log(message);
console.log(status);

function isIdenticalproducts(product1, product2) {

    if(typeof product1 !== 'object' || typeof product2 !== 'object') {
        console.warn("Parameter passed is not an object");
        return false;
    }

    if (product1 === product2) {
        return true;
    }

    if (product1.name === product2.name &&
    product1.size === product2.size &&
    product1.price === product2.price &&
    product1.color === product2.color ){
        return true;
    }
    else{
        return false;
    }
}

let product2 = {
    name: "T-shirt",
    size: "small",
    price: "$19.99",
    color: "red",
    'delivery-time': "3-5 business days" ,
};

let product3 = {
    name: "T-shirt",
    size: "small",
    price: "$19.99",
    color: "red",
    'delivery-time': "3-5 business days" ,
};

console.log(isIdenticalproducts(product, product2)); // Output: false
console.log(isIdenticalproducts(product, 'not an object')); // Output: false
console.log(isIdenticalproducts(product, product)); // Output: true
console.log(isIdenticalproducts(product2, product3)); // Output: true
console.log(isIdenticalproducts(product3, product2)); // Output: true
console.log(isIdenticalproducts(product2, product2)); // Output: true