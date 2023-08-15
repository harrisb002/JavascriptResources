function registerUser(user = "(Default) John Doe") {
    return user + ' is registered';
}

// Rest Op
function sum(...numbers) {
    let total = 0;

    for(const num of numbers) {
        total += num;
    }
    return total;
}

const user = {
    id: 1232123,
    name: 'John Doe'
}

function loginUser(user) {
    return `The user has an ID of ${user.name} with the ID of ${user.id}
    is logged in`;
}
console.log(registerUser())

console.log(sum(1, 2, 3, 4, 5))

console.log(loginUser(user));



// Arrays as Params
function randomNum(...arr) {
    const ranIndx = Math.floor(Math.random() * arr.length)

    const item = arr[ranIndx];
    
    console.log(item);
}

// Rand num thu 10
// let arr = [1 ,2 ,3, 4, 5, 6, 7, 8, 9, 10]
randomNum(1 ,2 ,3, 4, 5, 6, 7, 8, 9, 10);
























































