function spellchecker(wordlist, queries) {

}

// Test cases
const test1 = {
    wordlist: ["KiTe", "kite", "hare", "Hare"],
    queries: ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"]
};
const test2 = {
    wordlist: ["yellow"],
    queries: ["YellOw"]
};
const test3 = {
    wordlist: ["APPLE", "orange", "Banana"],
    queries: ["apple", "Orange", "banana", "APPLE", "OrAnGe", "bAnAna"]
};
const test4 = {
    wordlist: ["vowel", "matcher", "CaseInsensitive"],
    queries: ["Vowel", "MAtcher", "caseinsensitive", "vwl", "mtchr", "cseinsensitve"]
};

console.log(spellchecker(test1.wordlist, test1.queries)); 
// Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]

console.log(spellchecker(test2.wordlist, test2.queries)); 
// Output: ["yellow"]

console.log(spellchecker(test3.wordlist, test3.queries)); 
// Output: ["APPLE", "orange", "Banana", "APPLE", "orange", "Banana"]

console.log(spellchecker(test4.wordlist, test4.queries)); 
// Output: ["vowel", "matcher", "CaseInsensitive", "", "", ""]
