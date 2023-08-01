// // // 1. Write a function magicCipher(sentence, cipher) that takes in a string sentence and an object cipher. Return a string where every character is replaced with its corresponding value in the cipher. If the character doesn't exist in the cipher, use the character itself.
function magicCipher(sentence, cipher) {
    let letters = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (cipher[char]) {
            letters += cipher[char];
        } else {
            letters += char;
        }
    }
    return letters;
}

console.log(magicCipher("add me on facebook", { a: "c", d: "q" })); // Output: "cqq me on fccebook"
console.log(magicCipher("where are you?", { v: "l", "?": "!" })); // Output: "where are you!"
console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" })); // Output: "dance"
console.log("_________________________");
// // // 2 Write a function hipsterfy(sentence) that takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.
function removeLastVowel(word) {
    let vowel = "aeiou";
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowel.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

function hipsterfy(sentence) {
    let words = sentence.split(" ");
    for (let j = 0; j < words.length; j++) {
        let word = words[j];
        words[j] = removeLastVowel(word);
    }
    return words.join(" ");
}

// // Example

console.log(hipsterfy("proper"));
console.log(hipsterfy("proper tonic panther"));
console.log(hipsterfy("towel flicker banana"));
console.log("_________________________");

// //  3 Write the function countAdjacentSums(arr, n) which takes an array and a number n. It should count the number of times that two adjacent numbers in an array add up to n.

function countAdjacentSums(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }
    return count;
}
// // Example
console.log(countAdjacentSums([1, 5, 1], 6));
console.log(countAdjacentSums([7, 2, 4, 6], 7));
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));
console.log("_________________________");

// // // 4 Write a function longestLetterStreak(str, searchLetters) that takes in two arguments:

// // // str: A string of uppercase characters.
// // // searchLetters: An array of uppercase single-character strings (e.g., ["A", "F", "K"])
// // // The function should return the length of the longest streak of letters (consecutive letters) in the str that are in the searchLetters.
function longestLetterStreak(str, searchLetters) {
    let longestWord = 0;
    let currentWord = 0;

    for (let i = 0; i < str.length; i++) {
        if (searchLetters.includes(str[i])) {
            currentWord++;
            if (currentWord > longestWord) {
                longestWord = currentWord;
            }
        } else {
            currentWord = 0;
        }
    }

    return longestWord;
}

console.log(longestLetterStreak("ACCA", ["C"])); // Output: 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // Output: 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // Output: 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])); //
console.log("_________________________");
// 5 Write a function inPigLatin(sentence) that translates a sentence into its pig Latin equivalent. The rules for the translation are as follows:

// For words that begin with consonants, all letters before the initial vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
// "pig" → "igpay"
// "banana" → "ananabay"
// "trash" → "ashtray
// For words that begin with vowels, just add "yay" to the end.
//  "eat" → "eatyay"
//  "omelet" → "omeletyay"
//  "are" → "areyay"
// Words that were originally caplitalized must remained caplitalized
// Assume no punctuation
// 'y' is not a vowel
// Examples

function inPigLatin(sentence) {
    let vowels = "aeiouAEIOU";
    let words = sentence.split(" ");
    let newWord = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetter = word[0];
        if (vowels.includes(firstLetter)) {
            newWord.push(word + "yay");
        } else {
            let firstVowelIndex = -1;
            for (let i = 0; i < word.length; i++) {
                if (vowels.includes(word[i])) {
                    firstVowelIndex = i;
                    break;
                }
            }

            if (firstVowelIndex >= 0) {
                let firstPart = word.slice(0, firstVowelIndex);
                let leftPart = word.slice(firstVowelIndex);
                newWord.push(firstPart + leftPart + "ay");
            } else {
                newWord.push(word + "ay");
            }
        }
    }
    return newWord.join(" ");
}
console.log(inPigLatin("Shmanthony is the best teacher"));
console.log(inPigLatin("banana"));
console.log(inPigLatin("this is the time of my life"));
