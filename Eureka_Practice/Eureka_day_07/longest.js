// 5. WAP to find longest word in a sentence
// input:- 'this is javascript class'
// output:- javascript
let str = 'this is javascript class';
let longestWord = str.split(' ').reduce((longest, word) => {
return word.length > longest.length ? word : longest;
});
console.log(longestWord);