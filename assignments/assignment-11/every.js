// Problem 1
// Create a function that checks if all objects have a specific property

// Input: [{ name: 'Alice' }, { name: 'Bob' }], property = 'name'

// Output: true
function hasAllProperty(objects, property) {
    return objects.every((obj) => obj[property] !== undefined);
}

const objects = [{ name: "Alice" }, { name: "Bob" }, { name: "Bob", age: 23 }];
console.log(hasAllProperty(objects, "name"));

// Problem 2
// Create a function that checks if all elements in a matrix are positive
// Input: [[1, 2], [3, 4]]
// Output: true

function isPositive(matrix) {
    return matrix.every((nums) => nums.every((num) => num > 0));
}

const matrix = [
    [1, 2],
    [3, 4]
];
console.log(isPositive(matrix));

// Problem 3
// Create a function that checks if all sub-arrays have a specific length

// // Input: [[1, 2], [3, 4]], length = 2

// // Output: true
function isSameLength(arr, length) {
    return arr.every((array) => array.length === length);
}
console.log(
    isSameLength(
        [
            [1, 2],
            [3, 4]
        ],
        2
    )
);
// Problem 4
// Create a function that checks if all dates in an array of objects are before a specific date

// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-03'

// Output: true
function filterDate(dates, specificDate) {
    return dates.every((obj) => obj.date < specificDate);
}

console.log(
    filterDate([{ date: "2023-01-01" }, { date: "2023-01-02" }], "2023-01-03")
);
// Problem 5
// Create a function that checks if all products have a price greater than a specific value

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], price = 10

// Output: true
function graderPrice(prices, specificPrice) {
    return prices.every((obj) => obj.price > specificPrice);
}
console.log(
    graderPrice(
        [
            { name: "Book", price: 20 },
            { name: "Pen", price: 15 }
        ],
        10
    )
);
