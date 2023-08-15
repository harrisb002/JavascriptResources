// Unlike const and let, var is not blocked scoped!
// Var is function scoped'

// const x = 100;

// if(true) {
//     const y = 200;
//     console.log(x+y);
// }

// // console.log(x+y);

// if(true) {
//     const a = 100;
//     let b = 150;
//     var c = 200;
// }


function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y); //Children inherit parent variables
    }
    console.log(x);
    // console.log(y); //Function scope
    second();
}

first();


if(true) {
    const x = 100;

    if(x === 100) {
        const y = 200;
        console.log(x + y);
    }

    console.log(x);
    // console.log(y); Block Scope
}