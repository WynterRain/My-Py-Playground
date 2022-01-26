// const isUserLoggedIn = true

// if (isUserLoggedIn) console.log("User is logged In")
// // If statement on one line!!
// // recommended that you put on multiple lines, easier to read

const isUserLoggedIn = false

// if (isUserLoggedIn) { 
//     console.log("Logged In")
// } else { 
//     console.log("Not Logged In")
// }

// Tenary Operators (more condense)

isUserLoggedIn ? console.log("Logged In") : console.log("Not Logged In")
// not recommendd for common use,,., 
// reccommended that only use when value is either true or false

const welcMsg = isUserLoggedIn ? "welc" : "bye"

console.log(welcMsg)