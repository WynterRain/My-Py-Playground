const favorateAnimal = 'puppy'

// if (favorateAnimal === 'dog') {
//     console.log('dog rule')
// } else if (favorateAnimal === 'cat') {
//     console.log('really terrible choice >n<')
// } else if (favorateAnimal === 'shark') {
//     console.log('interesting')
// } else {
//     console.log('wot?')
// }

switch (favorateAnimal) {
    case 'puppy': // checks if favanimal is puppy OR dog
    case "dog":
        console.log('dog rule')
        break
    case "cat":
        console.log('really terrible choice >n<')
        break
    case "shark":
        console.log('intereseting')
        break
    default: // else version 
        console.log('WOT???')
}

// switch = if (favanimal == 'dog') x 3

//exercise

const number = 2

switch (number) {
    case 0:
        console.log('It is zero')
        break
    case 1:
    case 2:
        console.log("smallsie")
        break
    case 3:
    case 4:
        console.log("mediumsie")
        break
    case 5:
        console.log("big foot")
        break
    default:
        console.log("try again dude")
        break

}