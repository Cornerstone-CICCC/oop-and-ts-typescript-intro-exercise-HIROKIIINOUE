"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    const arrayOfWord = word.split("");
    const findVowels = arrayOfWord.filter((element) => {
        if (element === "a" ||
            element === "e" ||
            element === "i" ||
            element === "o" ||
            element === "u") {
            return element;
        }
    });
    const vowelsAmount = findVowels.length;
    return vowelsAmount;
}
// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
