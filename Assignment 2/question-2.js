function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
            break;
    }
    return result;
}

// Example usage
console.log(calculate('add', 10, 5));      
console.log(calculate('subtract', 10, 5)); 
console.log(calculate('multiply', 10, 5)); 
console.log(calculate('divide', 10, 5));   