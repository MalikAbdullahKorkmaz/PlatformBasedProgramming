console.log('Hello');
console.log("John")
console.log('you can call me "Santy"');
console.log("Go away,I'm coding");
console.log(`I am sorry\nplease forgive me`);

//what is output display??
let number1 = 3;
let number2 = 9;
let number3 = 7;
let number4 = 6;
let number5 = 2;
console.log(number1 + number2 - number3 * number4 / number5);
console.log(number1 + (number2 - number3) * number4 / number5);


let conditionA = true;
let conditionB = false;
let conditionC = true;
let conditionD = false;
console.log(conditionA && conditionB || conditionC && !conditionD);



let age = 9;
let result = (age > 17) ? "Adults" : (age >10) ? "Teenagers" : "Children";
console.log(result);



let numA = 176;
let numB = 103;

console.log(numA & numB);
console.log(numA | numB);
console.log(numA ^ numB);
console.log(numA >> 2);
console.log(numB >> 2);
console.log(numA << 2);
console.log(numB << 2);

let numC = 1;
console.log(numC << 1);
console.log(numC << 2);
console.log(numC << 3);
console.log(numC << 4);
console.log(numC << 5);
console.log(numC << 6);
console.log(numC << 7);
console.log(numC << 8);

let fullname = (fn,mn,ln) => {
    return `${fn} ${mn} ${ln}, &{getTitle()}`;
}

let getTitle = () =>{
    return "B.Sc"

}

console.log(fullname("John","Dream","Myung"));

// Using the == operator (loose equality)
console.log(5 == "5");  // true, because "5" is converted to the number 5

// Using the === operator (strict equality)
console.log(5 === "5"); // false, because the types are different (number vs string)
// Calculator constructor function
function Calculator() {
  this.num1 = 10;
  this.num2 = 20;

  // Regular function: 'this' context depends on how the function is called
  this.addRegular = function() {
    console.log("Regular Function 'this':", this); // 'this' refers to the Calculator instance
    return this.num1 + this.num2; // 'this' points to the Calculator object
  };

  // Arrow function: 'this' is lexically bound to the surrounding context
  this.addArrow = () => {
    console.log("Arrow Function 'this':", this); // 'this' still refers to the Calculator instance
    return this.num1 + this.num2; // 'this' points to the Calculator object
  };

  // Regular function: has access to 'arguments' object
  this.multiplyRegular = function() {
    console.log("Regular Function 'arguments':", arguments); // 'arguments' is available
    return arguments[0] * arguments[1];
  };

  // Arrow function: does not have access to 'arguments' object
  this.multiplyArrow = (...args) => {
    console.log("Arrow Function 'arguments':", args); // Uses rest parameters instead of 'arguments'
    return args[0] * args[1];
  };
}

// Create a new Calculator object
const calc = new Calculator();

console.log("Regular Function Add:", calc.addRegular());  // 30
console.log("Arrow Function Add:", calc.addArrow());      // 30

console.log("Regular Function Multiply:", calc.multiplyRegular(3, 4));  // 12
console.log("Arrow Function Multiply:", calc.multiplyArrow(3, 4));      // 12






