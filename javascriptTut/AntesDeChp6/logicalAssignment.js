// Check to see if falsey value, most common
// ||= assigns the right side value only if the left is a falsy value.

let a = 10;

// if(!a) {
//     a = 10;
// }

// a = a || 10

a ||= 10

console.log (a)

// Check to see if truthy value
// &&= assigns the right side value only if the left is a truthy value

let b = 10;

if(b) {
    b = 20;
}

//checking to see if its truthy
b = b && 20;

// b &&= 20

console.log(b)


// Only check for undefined or null values
// ??=  assigns the right side value only if the left value is null or undefined.

let c = false;

// if (c === null || c === undefined) {
//     c = 30;
// }

// c = c ?? 20;

c ??= 20

console.log(c);