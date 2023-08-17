// Map Problems
// Problem 1
// Create a function that doubles the age property of each object in an array

// Input: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]

// Output: [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }]
function doubleAge(objects) {
    const doubledArray = objects.map((obj) => {
        const newObj = {};
        newObj.name = obj.name;
        newObj.age = obj.age * 2;
        return newObj;
    });

    return doubledArray;
}

const inputArray = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
console.log(doubleAge(inputArray));
// Problem 2
// Create a function that capitalizes the first letter of each string in an array
// Input: ['apple', 'banana']
// Output: ['Apple', 'Banana']
function capitalizes(string) {
    const capitalizedString = string.map((str) => {
        const newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    });
    return capitalizedString;
}
const words = ["apple", "banana"];
console.log(capitalizes(words));

// Problem 3
// Create a function that returns the square of the first element of each sub-array

// Input: [[2, 3], [4, 5], [6, 7]]

// Output: [4, 16, 36]
function square(array) {
    const squaredArr = array.map((arr) => {
        const firstIdx = arr[0] * arr[0];
        return firstIdx;
    });
    return squaredArr;
}
const someArray = [
    [2, 3],
    [4, 5],
    [6, 7]
];
console.log(square(someArray));

// Problem 4
// Create a function that concatenates a specific string to each property in an object array
// Input: [{ word: 'cat' }, { word: 'dog' }], string = 's'
// Output: [{ word: 'cats' }, { word: 'dogs' }]

function concatenates(string) {
    const concatedStr = string.map((str) => {
        const newWord = {};
        newWord.word = str.word + "s";
        return newWord;
    });
    return concatedStr;
}
const newStr = [{ word: "cat" }, { word: "dog" }];
console.log(concatenates(newStr));
// Problem 5
// Create a function that calculates the price with tax for each product object

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 1 }], tax = 0.1

// Output: [{ name: 'Book', price: 22 }, { name: 'Pen', price: 1.1 }]

function calculatePrice(products, tax) {
    const pricedWithTax = products.map((product) => {
        const newProduct = {
            name: product.name,
            price: product.price * (1 + tax)
        };
        return newProduct;
    });

    return pricedWithTax;
}

const inputProducts = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 1 }
];
const taxRate = 0.1;
console.log(calculatePrice(inputProducts, taxRate));
