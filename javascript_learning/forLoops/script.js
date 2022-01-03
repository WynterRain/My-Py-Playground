// // older code ----
// const a = ['a', 'b', 'c']
// for (let i = 0; i<a.length; i++ )
// const element = a[i]
// console.log()
// ----------------
for (let i = 0; i<5; i++ ) { // i++ = i=i+1
    // code we want to repeat
    console.log("hi")
}
// i = starting position  or index or iteratable --- must be a let var bc it will change
// ; seperates ending point and starting point
// check, if (x;y) if y is still true then it will keeping going else it will stop
// x ; y ; z | z = incrememnts!! so that loop won't go on forever!

// for (let i = 0; i<5; i++ ) console.log("hi")
// just like if statemennts you can write it in one line if you only have one line of code

for (let i = 0; i<5; i++ ) {
    if (i > 2) break // you can use break or continue
    console.log("hi")
}

// exercise 1 
for (let i = 0; i<=10; i++) {
    console.log(i)
}

// exercise 2
for (let i = 0; i<=10; i++) {
    if (i === 5) break
    console.log(i)
}