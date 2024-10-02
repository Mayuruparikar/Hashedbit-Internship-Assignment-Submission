let string = 'INDIA'.split('');
string.splice(5, 0, 'O', 'N', 'E', 'S', 'I', 'A');
let newString = string.join('');
console.log(newString); 