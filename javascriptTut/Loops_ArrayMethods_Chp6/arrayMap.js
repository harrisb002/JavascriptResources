const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const companies = [
    { name: 'Company 1', category: 'Finance', start: 1980, end: 2020},
    { name: 'Company 2', category: 'Buisness', start: 1931, end: 2010},
    { name: 'Company 3', category: 'Fun', start: 1941, end: 2005},
    { name: 'Company 4', category: 'Retail', start: 1911, end: 2015},
    { name: 'Company 5', category: 'Fun', start: 1961, end: 1990},
    { name: 'Company 6', category: 'Auto', start: 1990, end: 2005},
    { name: 'Company 7', category: 'Tech', start: 2001, end: 2014},
    { name: 'Company 8', category: 'Finance', start: 2008, end: 2009},
]

// const arr1 = [ 1, 2, 3, 4, 5];

// // pass a function to map
// const map1 = arr1.map(x => x * 2);

// console.log(...arr1)


// const doubleNumbers = numbers.map((number) => number * 2);
// // const doubleNumbers = numbers.map((number) => 'Number ' + number);

// console.log(...doubleNumbers)

// // Long way
// const doubleNumbers2 = [];

// numbers.forEach((number) => {
//     doubleNumbers2.push(number * 2);
// });

// console.log(...doubleNumbers2)



// // Create an array of company Names
// const companyNames = companies.map((company) => company.name)

// console.log(...companyNames)

// //Create an array with just company and category
// // const companyInfo = companies.map((company) => `${company.name}, ${company.category}`)
// const companyInfo = companies.map((company) => {
//     return {
//         name: company.name,
//         category: company.category
//     };
// });

// console.log(...companyInfo)



// //Create an array of the length of each company in years
// const comapanyYears = companies.map((company) => {
//     return {
//         name: company.name,
//         years: company.end - company.start,
//     };
// });

// console.log(...comapanyYears)


// Chain map Methods
// const squareAndDouble = numbers
//     .map((number) => Math.sqrt(number))
//     .map((sqrt) => sqrt * 2)

// const squareAndDouble2 = numbers
//     .map(function (number) {
//         return Math.sqrt(number);
//     })
//     .map(function (sqrt) {
//         return sqrt * 2;
//     })
//     .map(function (sqrtDoubled){
//         return sqrtDoubled * 2;
//     })

// console.log(...squareAndDouble);

// console.log(...squareAndDouble2);


//Chaining different methods
const evenDouble = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);
console.log(...evenDouble)




























