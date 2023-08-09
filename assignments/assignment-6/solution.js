function filterOddNumbers(nums) {
    const odds = [];
    let i = 0;
    while (i < nums.length) {
        if (nums[i] % 2 !== 0) {
            odds.push(nums[i]);
        }
        i++;
    }
    return odds;
}

console.log(filterOddNumbers([1, 2, 3, 4, 5]));

function filterDivisibleByThree(nums) {
    const odds = [];
    let i = 0;
    while (i < nums.length) {
        if (nums[i] % 3 === 0) {
            odds.push(nums[i]);
        }
        i++;
    }
    return odds;
}
console.log(filterDivisibleByThree([3, 6, 7, 9, 12]));

function filterPrimeNumbers(nums) {
    const primes = [];
    let i = 0;
    while (i < nums.length) {
        if (isPrimeNumber(nums[i])) {
            primes.push(nums[i]);
        }
        i++;
    }
    return primes;
}
function isPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }
    let i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}
console.log(filterPrimeNumbers([2, 3, 4, 5, 6]));

function isPerfectSquare(num) {
    return Math.sqrt(num) === Math.floor(Math.sqrt(num));
}

function filterPerfectSquares(nums) {
    const perfectSquares = [];
    let i = 0;

    while (i < nums.length) {
        if (isPerfectSquare(nums[i])) {
            perfectSquares.push(nums[i]);
        }

        i++;
    }

    return perfectSquares;
}

console.log(filterPerfectSquares([1, 4, 5, 9, 16]));

//  Part 2//
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
function filterPalindromes(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterPalindromes(["racecar", "madam", "apple"]));

function filterLowercase(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let startLowerCase = arr[i].toLowerCase();
        if (startLowerCase.includes(arr[i])) {
            result.push(arr[i].toLowerCase());
        }
    }
    return result;
}
console.log(filterLowercase(["apple", "Banana", "cherry"]));

function filterConsonantWords(arr) {
    let result = [];
    let vowels = "aeiou";
    for (let i = 0; i < arr.length; i++) {
        if (!vowels.includes(arr[i][0])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterConsonantWords(["rhythm", "sky", "fly", "apple"]));

function filterOneVowelWords(arr) {
    let result = [];
    let vowels = "aeiou";
    for (let i = 0; i < arr.length; i++) {
        let vowelCount = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (vowels.includes(arr[i][j])) {
                vowelCount++;
            }
        }
        if (vowelCount === 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterOneVowelWords(["cat", "dog", "apple"]));
