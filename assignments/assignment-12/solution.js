// Problem 1
// Create a function that checks if any object in an array contains a null value

// Input: [{ value: 3 }, { value: null }]

// Output: true

function anyNull(obj) {
    return obj.some((arr) => arr.value === null);
}
console.log(anyNull([{ value: 3 }, { value: null }]));

// Problem 2
// Create a function that checks if any element in a matrix is a specific value

// Input: [[1, 2], [3, 4]], value = 4

// Output: true
function isAnyNumMatch(matrix, value) {
    return matrix.some((numbers) => numbers.some((num) => num === value));
}
console.log(
    isAnyNumMatch(
        [
            [1, 2],
            [3, 4]
        ],
        4
    )
);

// Problem 3
// Create a function that checks if any object in an array has a property with a specific length

// Input: [{ word: 'cat' }, { word: 'elephant' }], length = 8

// Output: true
function isObjectsLengthMatch(objects, length) {
    return objects.some((value) => value.word.length === length);
}
console.log(isObjectsLengthMatch([{ word: "cat" }, { word: "elephant" }], 8));

// Problem 4
// Create a function that checks if any sub-array contains a specific number

// Input: [[1, 2], [3, 4, 5]], number = 5

// Output: true
function isSubArrIncludeNum(arr, num) {
    return arr.some((value) => value.some((number) => number === num));
}
console.log(
    isSubArrIncludeNum(
        [
            [1, 2],
            [3, 4, 5]
        ],
        5
    )
);

// Problem 5
// Create a function that checks if any date in an array of objects is after a specific date

// Input: [{ date: '2023-01-01' }, { date: '2023-01-04' }], date = '2023-01-02'

// Output: true
function filterDate(dates, specificDate) {
    return dates.some((value) => value.date < specificDate);
}
console.log(
    filterDate([{ date: "2023-01-01" }, { date: "2023-01-04" }], "2023-01-02")
);
