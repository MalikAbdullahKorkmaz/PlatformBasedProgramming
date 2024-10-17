let {addNumber,mulNumber,subNumber} = require('./arithmatic')

let number1 = 100
let number2 = 9

let result = addNumber(number1,number2)
console.log(`${number1} + ${number2} = ${result}`);

let result1 = mulNumber(number1,number2)
console.log(`${number1} * ${number2} = ${result1}`);

let result2 = subNumber(number1,number2)
console.log(`${number1} - ${number2} = ${result2}`);