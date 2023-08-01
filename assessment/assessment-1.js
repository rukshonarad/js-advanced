// // 1. Write a function magicCipher(sentence, cipher) that takes in a string sentence and an object cipher. Return a string where every character is replaced with its corresponding value in the cipher. If the character doesn't exist in the cipher, use the character itself.
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

// // console.log(magicCipher("add me on facebook", { a: "c", d: "q" })); // Output: "cqq me on fccebook"
// // console.log(magicCipher("where are you?", { v: "l", "?": "!" })); // Output: "where are you!"
// // console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" })); // Output: "dance"
// // // 2 Write a function hipsterfy(sentence) that takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.
function hipsterfy(sentence) {
    let vowel = ["aeiou"];
    for (let i = sentence.length - 1; i > 0; i--) {
        if (vowel.includes(sentence[i])) {
            return sentence;
        }
    }
    return sentence;
}

// // Example

// console.log(hipsterfy("proper")); // => "propr"//
// // hipsterfy("proper tonic panther") => "propr tonc panthr"
// // hipsterfy("towel flicker banana") => "towl flickr banan"
// // hipsterfy("runner anaconda") => "runnr anacond"
// // hipsterfy("turtle cheeseburger fries") => "turtl cheeseburgr fris"

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
// console.log(countAdjacentSums([1, 5, 1], 6));
// console.log(countAdjacentSums([7, 2, 4, 6], 7));
// console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));

// // 4 Write a function longestLetterStreak(str, searchLetters) that takes in two arguments:

// // str: A string of uppercase characters.
// // searchLetters: An array of uppercase single-character strings (e.g., ["A", "F", "K"])
// // The function should return the length of the longest streak of letters (consecutive letters) in the str that are in the searchLetters.
function longestLetterStreak(str, searchLetters) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (searchLetters.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(longestLetterStreak("ACCA", ["C"]));
console.log(longestLetterStreak("YACCADCA", ["C", "A"]));
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]));
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"]));
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
    let vowels = "aeiou";

    for (let i = 0; i < sentence.length; i++) {
        let firstSentence = sentence[0];
        if (vowels.includes(firstSentence)) {
            return sentence + "yay";
        } else {
            !vowels.includes(firstSentence);
        }
        return sentence + "ay";
    }
    return sentence;
}
console.log(inPigLatin("Shmanthony is the best teacher"));
console.log(inPigLatin("let us Dance"));
console.log(inPigLatin("this is the time of my life"));
