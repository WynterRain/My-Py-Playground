// let my_name = "Heona" // type = string

// console.log('Hello My Name Is ' + my_name )

// let a = true
// let b = false

// console.log(a && b ) // comment - returns false (&& = and)
// console.log(a || b ) // comment - returns true (|| = or)
// console.log(!a) // comment - returns false (! = opposite of current value, you can put multiple '!' and it will invert however many times)

// //comment - exercise 

// happy = true
// fun = false

// console.log(happy && fun)

// // comment -  null & undefined

// undefined_var = undefined // comment - no value => type = undefined
// null_var = null // comment - no value => type = object 

// // comment - undefined : if you create a var [e.g : let xyz] with no val.. then type = undefined
// //comment -  null : you specifically gave the variable no value by putting it's value to null

// // comment - compare variables

// let int_1 = 1
// let int_2 = 2

// console.log(int_1 == int_2) // comment - double = signs for comparison-- returns true / false {LIKE PYTHON}
// console.log(int_1 != int_2) // comment - != signs for not equivelent to each other {LIKE PYTHON}
// console.log(int_1 > int_2) // comment - use greater or less than symbols for comparison {LIKE PYTHON}
// console.log(int_1 <= int_2) // comment - <= check less than or equal to/ greater than or equal to{LIKE PYTHON}

// console.log(undefined_var == null_var) // comment - both have the same value with having the lack of a value so it's TRUE

// // comment - functions

// function sayHello() {
//     console.log("helloo")
// }

// sayHello()

// //comment - functions - exercise

// function my_name_exer() {
//     console.log("Heona")
// }

// my_name_exer()

// function sum(numb1, numb2) {
//     sum = numb1 + numb2

//     return numb1
// }

// let s = sum(1,2)
// console.log(s)

// function sumcallback(a,b,callback) {
//     callback(a+b)
// }

// function handlesum(sum) {
//     console.log(sum)
// }

// sumcallback(1,2,handlesum )


// function sum(a,b) {
//     return a + b
// }

// let sumArrow = (a, b) => {
//     return a+b
// }

// // comment - let sumArrow = (a, b) => a+b   // << this is also equal to ^


// //comment -  exercise - 1

// let printName = (myName) => {
//     console.log(myName)
// }

// printName("Heona")

// // comment - exercise -2 

// let printHi = name => "Hi " + name

// console.log(printHi("mei"))

// comment -  hoisting


// function sum(a,b) {
//     return a+b
// }
 
 
// console.log(sum(1,2))

// comment - hoisting moves all your functions to the very top.. so if you put your function AFTER it is called; will still work
// comment - hoisting DOES NOT WORK with arrow functions (LET VARIABLES DO NOT GET HOISTED)