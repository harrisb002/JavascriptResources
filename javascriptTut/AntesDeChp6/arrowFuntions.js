// Arrow funstions have these adv:
// More compact, implicit return and lexical scope

// function add(a, b) {
//     return a + b;
// }
// console.log(add(1, 2))

// Arrow function 
const add = (a, b) => {
    return a + b;
};

// Implicit return
const subtract = (a, b) => a -b;

// Dont need Parenthesis w/one parameter
const double = a => a * 2;

// Retunring an object(Suround curly braces with parenthesis)
const createObj = () => ({
    name: 'Ben',
})


const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (number) {
    console.log(number);
})


numbers.forEach((n) => {
    console.log(n)
})

numbers.forEach((n) => console.log(n))
numbers.forEach(n => console.log(n))

console.log(add(1, 2));
console.log(subtract(5, 3));
console.log(double(5));
console.log(createObj())