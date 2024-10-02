function sumOfProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
    
  
    while (str1.length < str2.length) {
        str1 = '0' + str1;
    }
    while (str2.length < str1.length) {
        str2 = '0' + str2;
    }

    let sum = 0;
    for (let i = 0; i < str1.length; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
    return sum;
}


console.log(sumOfProducts(6, 34));   
console.log(sumOfProducts(123, 456));
console.log(sumOfProducts(10, 99));  