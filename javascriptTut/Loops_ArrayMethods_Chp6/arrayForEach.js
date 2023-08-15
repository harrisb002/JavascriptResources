const socials = ['Facebook', 'Twitter', 'Google', 'LinkedIn'];

// console.log(socials.__proto__)  // Shows all properties on object(in this case array methods)

//Gets run for every item in array
// socials.forEach(function (item) {
//     console.log(item)
// }) 

//Convert to arraw function
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr))

// function logSocials(social) {
//     console.log(social)
// }
// socials.forEach(logSocials)


const socialsObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Google', url: 'https://google.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'Discord', url: 'https://discord.com'},
]

socialsObjs.forEach((item) => {
    console.log(item.name, item.url)
})





