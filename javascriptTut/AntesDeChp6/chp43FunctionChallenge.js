// (9/5 × °C) + 32.

// function getCelcius(f) {
//     const celsius = ((f - 32) * 5) / 9;
//     return celsius;
// }

// const getCelcius = (f) => ((f - 32) * 5) / 9;

// console.log(`The temp is ${getCelcius(32)}`)

// //Challenge 2
// function minMax(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     return{
//         min, 
//         max
//     }
// }

// console.log(minMax([1, 2, 3, 5, 4]));


//Challenge 3
((length, width) => {
    const area = length * width;
    const output = `The area of a rectangle with a legth of ${length} and a width of ${width} is ${area}`

    console.log(output);
})(20, 10)



