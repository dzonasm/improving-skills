// Regexp golf
// Code golf is a term used for the game of trying to express a particular program
// in as few characters as possible. Similarly, regexp golf is the practice of writing
// as tiny a regular expression as possible to match a given pattern, and only that
// pattern.
// For each of the following items, write a regular expression to test whether any
// of the given substrings occur in a string. The regular expression should match
// only strings containing one of the substrings described. Do not worry about
// word boundaries unless explicitly mentioned. When your expression works, see
// whether you can make it any smaller.
// 1. car and cat
// 2. pop and prop
// 3. ferret, ferry, and ferrari
// 4. Any word ending in ious
// 5. A whitespace character followed by a period, comma, colon, or semicolon
// 6. A word longer than six letters
// 7. A word without the letter e (or E)

// 1. car and cat
let firstRegExp = /ca[rt]/;

// 2. pop and prop
let secondRegExp = /pr?op/;

// 3. ferret, ferry, and ferrari
let thirdRegExp = /ferr(et|y|ari)/;

// 4. Any word ending in ious
let fourthRegExp = /ious\b/;

// 5. A whitespace character followed by a period, comma, colon, or semicolon
let fifthRegExp = /\s[.,;:]/;

// 6. A word longer than six letters
let sixthRegExp = /\w{7}/;

// 7. A word without the letter e (or E)
let seventhRegExp = /\b[^\We]+\b/i;

console.log(seventhRegExp.test('sd'))


// Quoting style
// Imagine you have written a story and used single quotation marks throughout
// to mark pieces of dialogue. Now you want to replace all the dialogue quotes
// with double quotes, while keeping the single quotes used in contractions like
// aren’t.
// Think of a pattern that distinguishes these two kinds of quote usage and
// craft a call to the replace method that does the proper replacement.


