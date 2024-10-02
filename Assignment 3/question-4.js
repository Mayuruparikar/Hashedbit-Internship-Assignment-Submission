let longString = "This is a simple sentence with more than twenty characters";
let vowels = longString.match(/[aeiouAEIOU]/g) || [];
let consonants = longString.match(/[^aeiouAEIOU\s\d\W]/g) || [];

console.log(`Vowels: ${vowels.length}, Consonants: ${consonants.length}`);