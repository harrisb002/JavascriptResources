// const words = ['touch','hey', 'dont', 'fine', 'exclamation', 'me', 'nevermind'];

// const result = words.filter(word => word.length >= 1)

// console.log(...result)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// })


//Short way
// const evenNumbers = numbers.filter(number => number % 2 === 0)

// console.log(...evenNumbers)

// Long way
// //Same w/forEach 
// const evenNumbers = [];

// numbers.forEach(number => {
//     if(number%2 === 0){
//         evenNumbers.push(number)
//     }
// }) 
// console.log(...evenNumbers)


const companies = [
    { name: 'Company 1', category: 'Finance', start: 1981, end: 2020},
    { name: 'Company 2', category: 'Buisness', start: 1931, end: 2010},
    { name: 'Company 3', category: 'Fun', start: 1941, end: 2005},
    { name: 'Company 4', category: 'Retail', start: 1911, end: 2015},
    { name: 'Company 5', category: 'Fun', start: 1961, end: 1990},
    { name: 'Company 6', category: 'Auto', start: 1990, end: 2005},
    { name: 'Company 7', category: 'Tech', start: 2001, end: 2014},
    { name: 'Company 8', category: 'Finance', start: 2008, end: 2009},
]

// Get only Fun Companies

const funCompanies = companies.filter(company => company.category === 'Fun');

console.log(...funCompanies)


//Get companies that:
//  started in or after 1980 
//  and ended in or before 2010
const compArr = companies.filter(comapany => comapany.start >= 1980 && comapany.end <= 2010);

console.log(...compArr);

// Get companies that lasted 50 years or more
const lastedCompanies = companies.filter(company => (company.end - company.start) >= 50)

console.log(...lastedCompanies)

























