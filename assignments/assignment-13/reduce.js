// .reduce() Problems
// Problem 1
// Create a function called organizeBooks that takes an array of book objects as an argument. Each book object contains title, author, and genre. The function should return an object where each key is a genre and each value is an array of titles belonging to that genre.

// Example Input:

// const books = [
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
//   { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' }
// ];
// Example Output:

// {
//   'Classic': ['To Kill a Mockingbird', 'The Great Gatsby'],
//   'Science Fiction': ['1984']
// }
function organizeBooks(books) {
    return books.reduce((result, book) => {
        if (!result[book.genre]) {
            result[book.genre] = [];
        }
        result[book.genre].push(book.title);
        return result;
    }, {});
}

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic"
    }
];
console.log(organizeBooks(books));

// Problem 2
// Create a function called vowelFrequency that takes an array of strings and returns an object that represents the frequency of each vowel (a, e, i, o, u) in all the words combined

// Example Input:

// const words = ['apple', 'orange', 'grape'];
// Example Output:

// { 'a': 2, 'e': 2, 'i': 0, 'o': 1, 'u': 0 }
function vowelFrequency(words) {
    const vowel = "aeiou";
    return words.reduce((result, word) => {
        for (const char of word) {
            if (vowel.includes(char)) {
                if (!result[char]) {
                    result[char] = 1;
                } else {
                    result[char]++;
                }
            } else {
                result[char] = 0;
            }
        }
        return result;
    }, {});
}
const words = ["apple", "orange", "grape"];
console.log(vowelFrequency(words));

// Problem 3
// Create a function called numericalAnalysis that takes an array of numbers as an argument. This function should return an object containing the sum of all numbers, the product of all numbers, and the count of negative numbers in the array.

// Example Input:

// const numbers = [1, -1, 2, -2, 3, -3];
// Example Output:

// { sum: 9, product: 6, negativeCount: 3 }
function numericalAnalysis(numbers) {
    return numbers.reduce((result, number) => {
        result.sum = number++;
        result.product = numbers.length;
        result.negativeCount = (result.negativeCount || 0) + (number < 0);
        return result;
    }, {});
}

const numbers = [1, -1, 2, -2, 3, -3];
console.log(numericalAnalysis(numbers));
