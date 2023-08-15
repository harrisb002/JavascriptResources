// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const intialValue = 0;
// const sumWithInitial = array1.reduce(
//     (previousValue, currentValue) => previousValue + currentValue, intialValue
// );

// console.log(sumWithInitial);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;

}, 0);
console.log(sum);

const sum2 = numbers.reduce((acc, curr) => acc + curr, 10);
console.log(sum2);

//Using a for loop
const sum3 = () => {
    let acc = 0;
    for (const curr of numbers) {
        acc += curr;
    }
    return acc;
};

console.log(sum3())


const cart = [
    { id: 1, name: 'Product 1', price: 100}, 
    { id: 2, name: 'Product 2', price: 200}, 
    { id: 3, name: 'Product 3', price: 300}, 
]

const totalPrice = cart.reduce(function (acc, product) {
    return acc + product.price;
}, 0);

console.log(totalPrice);