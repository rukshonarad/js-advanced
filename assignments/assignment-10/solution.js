// Filter Problems
// Problem 1:
// Create a function that filters objects with a specific property value

// Input: [{ type: 'fruit', name: 'apple' }, { type: 'vegetable', name: 'carrot' }], type = 'fruit'

// Output: [{ type: 'fruit', name: 'apple' }]
function filterObjects(object, name, value) {
    return object.filter((obj) => obj[name] === value);
}

const input = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" }
];

console.log(filterObjects(input, "type", "vegetable"));

// Problem 2
// Create a function that filters all sub-arrays with a specific length

// Input: [[1, 2], [3, 4, 5]], length = 2

// Output: [[1, 2]]
function filterSubArr(arrays, length) {
    return arrays.filter((arr) => arr.length === length);
}

const output2 = filterSubArr(
    [
        [1, 2],
        [3, 4, 5]
    ],
    2
);
console.log(output2);

// Problem 3
// Create a function that filters products with a price within a specific range

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], min = 15, max = 20

// Output: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }]
function filterByPrice(pro, min, max) {
    return pro.filter(
        (product) => product.price >= min && product.price <= max
    );
}
const min = 15;
const max = 20;

console.log(
    filterByPrice(
        [
            { name: "Book", price: 20 },
            { name: "Pen", price: 15 }
        ],
        min,
        max
    )
);

// Problem 4
// Create a function that filters words that start with a specific letter from an array of objects

// Input: [{ word: 'cat' }, { word: 'dog' }], letter = 'c'

// Output: [{ word: 'cat' }]

function filterWords(words, letter) {
    return words.filter((wordObj) => wordObj.word.startsWith(letter));
}

console.log(filterWords([{ word: "cat" }, { word: "dog" }], "c"));

// Problem 5
// Create a function that filters dates before a specific date from an array of objects

// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-02'

// Output: [{ date: '2023-01-01' }]
function filterDate ()