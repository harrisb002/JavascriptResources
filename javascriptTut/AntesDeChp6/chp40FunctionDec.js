// Hoisted and therefore can print 
// Only declarations are available before-hand

console.log(addDollarSign(100)); 

// Function Declaration
function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(100));

// Function exp
const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(200));