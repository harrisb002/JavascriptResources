const library = [
    {
        title: 'Calling the Wind',
        author: 'Alan Hunt', 
        status: {
            own: true, 
            reading: false, 
            read: false
        }
    },
    {
        title: 'Stilling the Stillness',
        author: 'Richard Ferguson', 
        status: {
            own: true, 
            reading: false, 
            read: false
        }
    },
    {
        title: 'Killer in the Night',
        author: 'Steven King', 
        status: {
            own: true, 
            reading: false, 
            read: false
        }
    }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

const { title: firstBook } = library[0];

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);







