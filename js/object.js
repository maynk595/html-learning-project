let User = {
    name : "John",
    age : 30 ,
    Gender : "Male" ,
    'How-are-you' : "Fine",
};
console.log(typeof User);
console.log(User);

// Using dot notation to access the properties of object.
console.log(User.age); // accesing the property of object.
console.log(User.Gender); // accesing the property of object.
console.log(User.name); // accesing the property of object.

User.age = 35; // Updating the property of object.
console.log(User.age); // accesing the property of object.

// Using bracket notation to access the properties of object.But the property passed as a string.
console.log(User["age"]);
// We use bracket notation when the property name has special characters or spaces in it.
console.log(User["How-are-you"]);

let propertyName = 'age';

console.log(User[propertyName]); // When we use bracket notation, we can pass a variable that holds the property name as a string. In this case, propertyName is a variable that holds the string 'age', so User[propertyName] is equivalent to User['age'] which returns 35.

console.log(User.propertyName); // undefined because propertyName is not a property of User object. It is a variable that holds the string 'age'.

delete User.age; // Deleting the property of object.
console.log(User); // The property age has been deleted from the User object.
console.log(User.age); // undefined because the property age has been deleted from the User object.

let product = {
    company : "Apple",
    price : 86349,
    color : "Silver",
    'Model Name' : "iPhone 14 Pro Max",
    'Model Number' : "A2890",
    rating:{
        '1 star' : 100,
        '2 star' : 200,
        '3 star' : 300
    } ,
    display : function(){
        console.log(`Company : ${this.company}`);
        console.log(`Price : ${this.price}`);
        console.log(`Color : ${this.color}`);
        console.log(`Model Name : ${this['Model Name']}`);
        console.log(`Model Number : ${this['Model Number']}`);
        console.log(`Rating : ${this.rating['1 star']} , ${this.rating['2 star']} , ${this.rating['3 star']}`);
    }
};

product.display(); // Calling the display method of the product object to show its properties.
console.log(product);  // . dot notation means we are calling object's method.

// AutoBoxing :- it means that when we call a method on a primitive value, JavaScript automatically wraps the primitive value in an object so that we can call methods on it. For example, when we call the length property on a string, JavaScript automatically wraps the string in a String object so that we can access the length property.
console.log('Hello Guys Who are you'.length);
console.log('Hello Guys Who are you'.toUpperCase());
console.log('Hello Guys Who are you'.replace('Guys','Girls').toLowerCase());

let a = 5;
let b = a;
console.log(`${a} , ${b}`);
a = 8 ;
console.log(`${a} , ${b}`); // 8 , 5 because b is a copy of a and not a reference to a.

let x = {value : 10};
let y = x;
console.log(`${x.value} , ${y.value}`);
x.value = 20;
console.log(`${x.value} , ${y.value}`); // 20 , 20 because y is a reference to x, not a copy.

let p = {num : 10};
let q = {num : 10};
console.log(p == q); // false because p and q are two different objects in memory, even though they have the same properties and values.
console.log(p === q); // false because p and q are two different objects in memory, even though they have the same properties and values.

// deep equality check :- it means that we check if the properties and values of two objects are the same, even if they are different objects in memory. We can use JSON.stringify() to convert the objects to strings and then compare the strings.
console.log(JSON.stringify(p) === JSON.stringify(q)); // true because the properties and values of p and q are the same.

let product1 = {
    company : "Apple",
    price : 86349,
    'item name' : "iPhone 14 Pro Max",
}

let {company, price, 'item name' : itemName} = product1; // Destructuring assignment :- it means that we can extract the properties of an object and assign them to variables with the same name as the properties. We can also assign them to variables with different names by using the colon syntax.
console.log(company);

// property shorthand :- it means that when we create an object, we can use the variable name as the property name if they are the same. For example, if we have a variable called company and we want to create an object with a property called company, we can just write {company} instead of {company: company}.
let price1 = 100;
let product2 = {
    company : "Apple",
    price1, // property shorthand
    'item name' : "iPhone 14 Pro Max",
}
console.log(product2);

//Method shorthand :- it means that when we create an object, we can define methods without using the function keyword. For example, instead of writing display: function() { ... }, we can just write display() { ... }.
let product3 = {
    company : "Apple",
    price : 86349,
    'item name' : "iPhone 14 Pro Max",
    display(){ // Method shorthand
        console.log(`Company : ${this.company}`);
        console.log(`Price : ${this.price}`);
        console.log(`Item Name : ${this['item name']}`);
    }
};
product3.display(); // Calling the display method of the product3 object to show its properties.