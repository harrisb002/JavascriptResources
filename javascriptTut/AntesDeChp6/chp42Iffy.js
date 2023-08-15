
// Iffy declared (not in the global scope anymore)
// Second set of parenthesis to invoke the function

// (function(){
//     const user = 'John'
//     console.log(user)

//     const hello = () => console.log('Hello from the Iffy!')
//     hello();
// }())

(function(name) {
    console.log('hello ' + name);
})('Shawn');

(function hello() {
    console.log('Hello');
    
})();