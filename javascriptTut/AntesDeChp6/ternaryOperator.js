const age = 17;

// Using an if statement
if(age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You cant vote yet...');
}

// Using a ternary operator, three parts
// The condition
// If (ternary operator)

age >= 18 ? console.log('You can vote!') : console.log('You cant vote yet...');



// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote)

const canVote2= age >= 18 ? 'You can Vote!' : 'You cant vote yet...';
console.log(canVote2)


//Mutliple statements

const auth = true;
// let redirect;

// if (auth) {
//     alert('Welcome to the Dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('Access Denied');
//     redirect = '/login';
// }

// const redirect = auth 
//     ? (alert('Welcome to the Dashboard'), '/dashboard') 
//     : (alert('Access Denied'), '/login');

// console.log(redirect)

// auth ? console.log('Welcome to the Dashbaord!') : null;

auth && console.log('Welcome!');





