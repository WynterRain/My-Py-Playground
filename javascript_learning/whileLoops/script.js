for (let i = 0; i<5; i++) {
    console.log(i)
}
let i = 0

while (i<5) {
    console.log(i)
    i++
}

const person = { 
    name : 'mei',
    friend: {
        name: 'kayb',
        friend: {
            name: 'micheele'
        }
    }
}
let currentPerson = person
while (currentPerson != null) {
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend
}