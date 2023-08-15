
//Global Variables
const x = 100;

console.log(x, 'in global')

function run() {
    console.log(window.innerHeight)
    console.log(x, 'in function')
}

if(true)
console.log(x, 'in block')


function add() {
    const y = 50;
    console.log(y)
}

//Error function scope for y
// console.log(y)

run();