//For of loops
// const users = [{name:'Ben'},{name:'Hungry'},{name:'John'}]

// // for (let i = 0; i < items.length; i++) {
// //     console.log(items[i])
// // }

// // for (const item of items) {
// //     console.log(item)
// // }

// for (const user of users) {
//     console.log(user.name)
// }

// const str = 'Hello World';

// for (const letter of str) {
//     console.log(letter)
// }

// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);

// for (const [key, value] of map){
//     console.log(key, value);
// }



// For in loops 
// Loops through objects values 

const colorObj = {
    color1: 'red',
    color2: 'purple',
    color3: 'blue',
    color4: 'yellow',
};

// for (const key in colorObj) {
//     console.log(key, colorObj[key])
// }

const colorArr = ['red', 'green', 'yellow', 'purple'];

for (const key in colorArr) {
    console.log(colorArr[key])
}

