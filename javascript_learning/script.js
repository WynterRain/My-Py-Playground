// // let my_name = "Heona" // type = string

// // console.log('Hello My Name Is ' + my_name )

// // let a = true
// // let b = false

// // console.log(a && b ) // comment - returns false (&& = and)
// // console.log(a || b ) // comment - returns true (|| = or)
// // console.log(!a) // comment - returns false (! = opposite of current value, you can put multiple '!' and it will invert however many times)

// // //comment - exercise 

// // happy = true
// // fun = false

// // console.log(happy && fun)

// // // comment -  null & undefined

// // undefined_var = undefined // comment - no value => type = undefined
// // null_var = null // comment - no value => type = object 

// // // comment - undefined : if you create a var [e.g : let xyz] with no val.. then type = undefined
// // //comment -  null : you specifically gave the variable no value by putting it's value to null

// // // comment - compare variables

// // let int_1 = 1
// // let int_2 = 2

// // console.log(int_1 == int_2) // comment - double = signs for comparison-- returns true / false {LIKE PYTHON}
// // console.log(int_1 != int_2) // comment - != signs for not equivelent to each other {LIKE PYTHON}
// // console.log(int_1 > int_2) // comment - use greater or less than symbols for comparison {LIKE PYTHON}
// // console.log(int_1 <= int_2) // comment - <= check less than or equal to/ greater than or equal to{LIKE PYTHON}

// // console.log(undefined_var == null_var) // comment - both have the same value with having the lack of a value so it's TRUE

// // // comment - functions

// // function sayHello() {
// //     console.log("helloo")
// // }

// // sayHello()

// // //comment - functions - exercise

// // function my_name_exer() {
// //     console.log("Heona")
// // }

// // my_name_exer()

// // function sum(numb1, numb2) {
// //     sum = numb1 + numb2

// //     return numb1
// // }

// // let s = sum(1,2)
// // console.log(s)

// // function sumcallback(a,b,callback) {
// //     callback(a+b)
// // }

// // function handlesum(sum) {
// //     console.log(sum)
// // }

// // sumcallback(1,2,handlesum )


// // function sum(a,b) {
// //     return a + b
// // }

// // let sumArrow = (a, b) => {
// //     return a+b
// // }

// // // comment - let sumArrow = (a, b) => a+b   // << this is also equal to ^


// // //comment -  exercise - 1

// // let printName = (myName) => {
// //     console.log(myName)
// // }

// // printName("Heona")

// // // comment - exercise -2 

// // let printHi = name => "Hi " + name

// // console.log(printHi("mei"))

// // comment -  hoisting


// // function sum(a,b) {
// //     return a+b
// // }
 
 
// // console.log(sum(1,2))

// // comment - hoisting moves all your functions to the very top.. so if you put your function AFTER it is called; will still work
// // comment - hoisting DOES NOT WORK with arrow functions (LET VARIABLES DO NOT GET HOISTED)



// // comment -  idea of scope

// // function sayHi(name) {
// //     let result = "Hi " + name + a
// //     console.log(result)
// // }
// // let a =1


// // sayHi("me")


// // comment - closures

        

// // function print(variable) {
// //     return function func(variable2) {
// //         console.log(variable)
// //         console.log(variable2)
// //     }
// // }

// // let a = print(1)
// // a(2)

// // comment - new types of variables

// // comment - const = can not redefine the value... IT IS CONSTANT
// // comment - var = not reccomemnded [var is available EVERYWHERE-- breaks scoping rules.] - does hoisting 

// // comment - type coersion

// // let a = "1"
// // console.log(a) // comment - << string
// // console.log(typeof a)

// // comment - parseInt < turn into an int
// // comment - parseFloat < turn into an float
// // comment - x.toString() < turn into an string -- x = variable

// // let intA = parseInt(a)
// // console.log(typeof intA)

// // comment - === => tells java script not to convert the type
// // const a = 1
// // const b =2
// // console.log(a !== b)

// // comment - side effects of type coersion + NaN (NOT A NUMBER)
// // const a = parseInt("asdfd")

// // console.log(parseInt(a)) // comment - this will result in NaN because asdfd is NOT a real NUMBER
// /* console.log((a) == NaN) 
//               or
// console.log((a) === NaN ) is ALWAYS FALSE  
// because NaN is NEVER EQUAL TO ANYTHING!! */

// // comment - to check if not a number us console.log(isNaN(a)) << will return true

// //-0-------- comment - arrays

// // const a = [1,2,3,4,5,6,7,8,9,10]
// // console.log(a[2]) // comment - just like python

// //a.push(11) // comment - like append but .push is to add element to the END of the list
// // a.push(["mei", "kay"]) // you can even add a list in side another list

// // exercise 1

// // const alpha = ["a","b","c","d","e","f"]

// // console.log(alpha[2])


// // exercise 2

// // const nestnumb = [
// //     [1,2,3,4,5],
// //     [6,7,8,9,10],
// //     [11,12,13,14,15]
// // ]

// // console.log(nestnumb[0][3])
// // console.log(nestnumb[1][2])
// // console.log(nestnumb[2][0])

// // const num = [1,2,3,4,5]
// // console.log(num.length) // commment- find the length of a array


// // OBJECTS ________________________________



// // let person = {
// //     name : "Heona", 
// //     age: 13, 
// //     favNumber : 7,
// //     sayHi: function () {
// //         console.log("hi")
// //     },
    
// // }

// // let egFunc = { 
// //     sayHi: function () {
// //         console.log("hi")
// //     },
// // // comment -  ^ and v are the same thing but v is what people prefer
// //     sayHi2() {
// //         console.log("hi ver2")
// //     }
    
// // }

// // // person.sayHi() // comment - [array].[key] (then prints the value)
// // // console is actually a objec
// // egFunc.sayHi2()


// // // exercise -------

// // let car = {
// //     make : "Subaru",
// //     model : "W0w0",
// //     isUsed : false,
// //     makeNoise() {
// //         console.log("vroom")
// //     }
// // }

// // console.log(car.make) // comment - equivelent to console.log(car["make"])
// // console.log(car.model)
// // console.log(car.isUsed)
// // console.log(car.makeNoise())

// // let person = {
// //     name : "Heona", 
// //     hobby : ["pinano", "math"],
// //     adderss : {
// //         street : '2121 wowo st',
// //         city: "wowo love town"
// //     }
    
// // }

// // console.log(person.hobby[0])
// // console.log(person.adderss.city)

// // exercise....

// // let book = {
// //     title : "meimei is best wowo caretaker",
// //     author : {
// //         authName : "Heona",
// //         age : "13"
// //     }

// // }

// // modify properties 
// // book.title = "best wowo in da world"

// // references and vals ----------------

// // let a = 10
// // let b = "Hi"
// // let c = [1,2] // comment = location x
// // // let d = c // -comment --- also points to  x location
// // // therefore if c or d changes then they BOTH change
// // d = [3,4,5] // comment - creates a new location in memory
// // let e = {mName = "mei"}
// // console.log("a="+a)
// // console.log("b="+b)
// // console.log("c="+c)
// // console.log("d="+d)
// // console.log("e="+ JSON.stringify(e)) // turns object in a readable string

// // const a = [1,2]
// // const b = [1,2]

// // you can do a.push(xyz) because you are adding to it even if its a const!!!
// // const error will only occur when you REDEFINE the whole variable... not push it

// // console.log(a === b) // comment - returns FALSE because they are comparing memory adresses.. and 2 seprate arrays even though they have the same value are NOT the same!!



// // comment -array methods

// const a = [1,2,3,4,5]
// const b = [2,4,6,8,10]

// a.forEach((number, indexz) => { // comment - LIK E A FOR LO0OASODASFPOP
//     console.log(number + " " + indexz)
// })

// const newA =    a.map(number => {
//     return number * 2 // comment -does operations wwith and arratyg!!!

// })

// console.log(newA)


// const newfilter = a.filter(number  =>  {
//     return number <=2 // comment -will only  return if it is true..l/.
// })

// console.log(newfilter)




// const n = a.find(number => { //comment -ashows the fi rst one that matyches the scenario...l and st op executinjgl...
//     return number > 2
// })


// console.log(n)

// const somecheck = a.some(number => {
//     return number > 2 // comment -will return true or false if at least one of  the elements kis greater than 2!!
// })

// console.log(somecheck)

// const everycheck = a.every(number => {
//     return number > 2 // comment -will return true or false IF EVERY number matches the statement
// })

// console.log(everycheck)

// const sum = a.reduce((sum, number) => {
// a.includes(2) // comment -does a include xyz... and wil return true or false
//     return sum + number // comment -0 + 1 = 1 = newsum then 1 + 2 = 3 = newsum2 then 3 + 3 = 6 newsum3 then 6 + 4 = 10 = newsum then 10 + 5 = 15 = value!!
// }, 0) // 0 = default for sum ;

// console.log(sum)


// // comment -exercise
// const items = [
//     { price : 10 },
//     { price : 20 },
//     { price : 14 },
//     { price : 1 },
//     { price : 6 },
// ]

// const total = items.reduce((sum, item) => {
//     return sum + item.price
// },  0)

// console.log(total)

// a.includes(2) // comment -does a include xyz... and wil return true or false