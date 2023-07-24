// // String prototype//
// // //1 reverse(): This method returns a reversed version of the string.
// // Example: "Hello".reverse() should return "olleH".
// // Example: "world".reverse() should return "dlrow".

// String.prototype.reverse = function () {
//     return this.split("").reverse().join("");
// };
// console.log("hello".reverse());
// console.log("book".reverse());
// console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
// // 2 . removeVowels(): This method removes all vowels from the string.
// // Example: "Hello".removeVowels() should return "Hll".
// // Example: "world".removeVowels() should return "wrld".
// String.prototype.removeVowels = function () {
//     let vowels = "aeiouAEUIOU";
//     let newStr = "";
//     for (let i = 0; i < this.length; i++) {
//         if (!vowels.includes(this[i])) {
//             newStr += this[i];
//         }
//     }
//     return newStr;
// };
// console.log("Hello".removeVowels());
// console.log("Awesome".removeVowels());
// console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");

// // 3 . countWords(): This method counts the number of words in a string.
// // Example: "Hello World".countWords() should return 2.
// // Example: "One word".countWords() should return 1.
// String.prototype.countWords = function () {
//     let words = this.split(" ");

//     return words.length;
// };
// console.log("Hello Word".countWords());
// console.log("Hello".countWords());
// console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");

// // 4 . wrapInTags(tag): This method wraps the string in the given HTML tag.
// // Example: "Hello".wrapInTags("b") should return "<b>Hello</b>".
// // Example: "world".wrapInTags("i") should return "<i>world</i>".

// String.prototype.wrapInTags = function (tag) {
//     return `<${tag}>${this}</${tag}>`;
// };
// console.log("Hello".wrapInTags("b"));
// console.log("world".wrapInTags("i"));
// console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");

// // 5 . isPalindrome(): This method checks if the string is a palindrome (same forwards as backwards, ignoring case).
// // // Example: "racecar".isPalindrome() should return true.
// // Example: "Hello".isPalindrome() should return false.
// String.prototype.isPalindrome = function () {
//     let lowerCase = this.toLowerCase();
//     let newStr = lowerCase.split("").reverse().join("");

//     return lowerCase === newStr;
// };
// console.log("hello".isPalindrome());
// console.log("recacer".isPalindrome());
// console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
// // Number.prototype
// // 1 . isPrime(): This method checks if the number is a prime number.
// // Example: (7).isPrime() should return true.
// // Example: (4).isPrime() should return false.
// Number.prototype.isPrime = function () {
//     let num = this;
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log((7).isPrime());
// console.log((8).isPrime());
// console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
// // 2 . toFactorial(): This method returns the factorial of the number.
// // Example: (5).toFactorial() should return 120.
// // Example: (3).toFactorial() should return 6.
// Number.prototype.toFactorial = function () {
//     let sum = 1;
//     for (let i = 2; i <= this; i++) {
//         sum *= i;
//     }
//     return sum;
// };
// console.log((5).toFactorial());
// console.log((3).toFactorial());
// console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
// // 3 .findFactors(): This method returns an array of all factors of the number.
// // Example: (10).findFactors() should return [1, 2, 5, 10].
// // Example: (16).findFactors() should return [1, 2, 4, 8, 16].
// Number.prototype.findFactors = function () {
//     let newNum = [];
//     for (let i = 0; i <= this; i++) {
//         if (this % i === 0) {
//             newNum.push(i);
//         }
//     }
//     return newNum;
// };
// console.log((10).findFactors());
// console.log((16).findFactors());
// console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
// // 4 .isPerfectSquare(): This method checks if the number is a perfect square.
// // Example: (9).isPerfectSquare() should return true.
// // Example: (8).isPerfectSquare() should return false.

// Number.prototype.isPerfectSquare = function () {
//     const num = this.valueOf();
//     for (let i = 0; i <= this; i++) {
//         if (i * i === num) {
//             return true;
//         }
//     }
//     return false;
// };
// console.log((9).isPerfectSquare());
// console.log((8).isPerfectSquare());
// 5 isOdd(): This method checks if a number is odd.
// Example: (5).isOdd() should return true.
// Example: (6).isOdd() should return false.

// Number.prototype.isOdd = function () {
//     return this % 2 !== 0;
// };

// console.log((7).isOdd()); // Output: true
// console.log((8).isOdd());
// Array.prototype

// // 1.findMax(): This method returns the maximum value in an array of numbers.
// // Example: [1, 2, 3].findMax() should return 3.
// // Example: [-1, -2, -3].findMax() should return -1.
// Array.prototype.findMax = function () {
//     let max = this[0];
//     for (let i = 1; i < this.length; i++) {
//         if (this[i] > max) {
//             max = this[i];
//         }
//     }
//     return max;
// };
// console.log([1, 2, 5, 3].findMax());
// console.log([-2, -5, -3].findMax());
// // 2.findMin(): This method returns the minimum value in an array of numbers.
// // Example: [1, 2, 3].findMin() should return 1.
// // Example: [-1, -2, -3].findMin() should return -3.
// Array.prototype.findMax = function () {
//     let max = this[0];
//     for (let i = 1; i < this.length; i++) {
//         if (this[i] < max) {
//             max = this[i];
//         }
//     }
//     return max;
// };
// console.log([1, 2, 3].findMax());
// console.log([-1, -2, -3].findMax());

// // 3. average(): This method returns the average of all the numbers in the array.
// // Example: [1, 2, 3, 4].average() should return 2.5.
// // Example: [5, 10, 15, 20].average() should return 12.5.

// Array.prototype.average = function () {
//     let num = this[0];
//     for (let i = 0; i < this.length; i++) {
//         num += this[i];
//     }
//     return num / this.length;
// };
// console.log([1, 2, 3, 4].average());
// console.log([5, 10, 15, 20].average());
// // 4.  removeDuplicates(): This method returns a new array with duplicates removed.
// // Example: [1, 2, 2, 3].removeDuplicates() should return [1, 2, 3].
// // Example: ["a", "b", "b", "c"].removeDuplicates() should return ["a", "b", "c"].
// Array.prototype.removeDublicate = function () {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (!newArr.includes(this[i])) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// };
// console.log([1, 2, 2, 3, 4, 4].removeDublicate());

// shuffle(): This method returns a new array with the order of the elements randomized.
// Example: [1, 2, 3].shuffle() could return [3, 1, 2].
// Example: ["a", "b", "c"].shuffle() could return ["c", "a", "b"].
Array.prototype.shuffle = function () {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let shuffle = Math.floor(Math.random() * this.length);
        if (this.length.includes(shuffle)) {
            newArr.push(shuffle);
        }
    }
    return newArr;
};
console.log([1, 2, 3].shuffle());
