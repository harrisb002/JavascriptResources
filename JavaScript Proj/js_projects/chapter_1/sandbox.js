// //Function expression (Cannot be hoisted-i.e must be defined before used
// const speak = function(){
//      console.log('good day');
// };

// speak();
// speak();

//Callbacks and foreach

// people.forEach(function(person){
//      console.log(person);
// });

//Can be written with arrow function
// people.forEach((person, index) =>{
//      console.log(index, person);
// });

//Callback functions are used as arguements to other function calls
// const logPerson = (person, index) => {
//      console.log('${index} - hello ${person}');
// };

// people.forEach(logPerson);

//Use css selector to grab people class
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu'];

let html = '';

people.forEach(person => {
     html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
