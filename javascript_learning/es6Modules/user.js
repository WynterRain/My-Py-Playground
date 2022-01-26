export const me = { 
    name : "Heona",
    age: 13,
}

export const kayb = {
    name : "Kaybrianna",
    age: 9
}

function printUser(user) {
    console.log(`Name: ${user.name} | Age: ${user.age}`)
}

export default printUser
// You can only have 1 export default