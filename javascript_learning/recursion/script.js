// for (let = 1;i <= 10; i++) {
//     console.log(i)
// }

// function printNumber(number) {
//     if ( number > 10) return  
//     console.log(number)
// }

// printNumber(1)
// let sum = 0
// for (let i = 0;i <= 10; i++) {
//     sum = sum +i
// }

// console.log(sum)

// function sumNumbersBelow(numb) {
     
// }

const person = { 
    name : 'mei',
    friend: {
        name: 'kayb',
        friend: {
            name: 'micheele'
        }
    }
}

// let currentPerson = person
// while (currentPerson != null) {
//     console.log(currentPerson.name)
//     currentPerson = currentPerson.friend
// }

function printNames(currentPerson) {
    if (currentPerson == null) return
    console.log(currentPerson.name)
    printNames(currentPerson.friend)
}

printNames(person)