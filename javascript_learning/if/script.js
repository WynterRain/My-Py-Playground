// const userIsLoggedIn = false
// const isOnDashboard = true
// if (userIsLoggedIn && isOnDashboard) {
//     console.log("This is true")
// } else {
//     console.log("false")
// }

// if statement does type coersion!! so if you have a value of 0 / null / undefined / '' ; that will be false


const totalPrice = 100

if (totalPrice == null) {
    console.log("no such var")
} else if (totalPrice < 10 ) {
    console.log("less than 10")
} else if (totalPrice > 99) {
    console.log("expensiiiiiivvveee")
} else {
    console.log("WHOOWEE")
}

//exercise


array = [1,2,3,4,5,6.3,4,5,4,3,3,3]

if (array.length === 0) {
    console.log("Empty!")
} else if (array.length < 5) {
    console.log("Small")
} else if (array.length < 10) {
    console.log("Medium")
} else {
    console.log("Large")
}