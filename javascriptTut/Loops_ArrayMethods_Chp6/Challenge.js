// for (let i = 1; i <= 100; i++){
//     if((i % 5 === 0) && (i % 3 === 0)){
//         console.log('FizzBuzz')
//         continue;
//     }
//     if(i % 3 === 0){
//         console.log('Fizz')
//         continue;
//     }
//     if(i % 5 === 0){
//         console.log('Buzz')
//         continue;
//     }
//     console.log(i);
// }

for (let i = 1; i <= 100; i++){
    if((i % 15=== 0)){
        console.log('FizzBuzz')
    }
    else if(i % 3 === 0){
        console.log('Fizz')
        continue;
    }
    else if (i % 5 === 0){
        console.log('Buzz')
        continue;
    }
    else
    console.log(i);
}