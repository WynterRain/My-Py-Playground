/* Broswer Storage Table -------------------------------------
- Name         | Local Storage| Cookies       | Session Storage
- Storage Size |        10 MB |     4KB       |    5 MB
- Expiration   | Never Expires| Manual        | Tab Closed 
- Availability | Client       | Client/Server | Client
- Difficulty   | Easy         | Hard          | Easy
-------------------------------------------------------------- */


localStorage.setItem('Name', "Heona")
            //       ^ Key   ^ Value

sessionStorage.setItem('Age', "13")
            //         ^ Key   ^ Value

// localStorage.setItem('Name', "KB")
// // update the item, if item already exists it will update it

// localStorage.removeItem('Name', "KB")
// remove items

console.log(localStorage.getItem("Name"))


// cookies
const date = new Date(9999,0,1).toUTCString()
const pastDate = new Date(1999,0,1).toUTCString()

document.cookie = `name = Heona; expires =${date}`
document.cookie = `age = 13; expires =${date}`
console.log(document.cookie)

document.cookie = `name =; expires =${pastDate}`
console.log(document.cookie)