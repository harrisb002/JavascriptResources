//Challenge 1
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

//   const youngPeople = people.map((person) => {
//     if(person.age <= 25) {
//         return {
//             name: `${person.firstName} ${person.lastName}`,
//             email: person.email,
//         }            
//     }
//   });

//   console.log(...youngPeople)


const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
        name: person.firstName + ' ' + person.lastName,
        email: person.email,
    }));

console.log(...youngPeople);


//Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

// let total = 0;
// for(i = 0; i<= numbers.length; i++){
//     if(numbers[i] >= 0){
//         total += numbers[i];
//     }
// }

// console.log(total);

const positiveSum = numbers 
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum); // 79

// **Instructions:**

// Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.
const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length));

console.log(...capitalizedWords); // ['Coder', 'Programmer', 'Developer']

// ```

// **Hint:**

// Remember back a few sections, we had a challenge to capitalize the first letter of a string. You are doing the same thing here, but for each word in the array.

//Challenge 3
// const words = ['coder', 'programmer', 'developer'];

// const cWords = words
//     .map((words) => {

//     })















