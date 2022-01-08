function test() {
    console.log("hi")
    console.log("hi2")
    new Promise((resolve, reject) => resolve('promisohi')).then (message => console.log(message)) // runs right after function is finisbhed
    setTimeout(() => console.log("hi3"), 10)
    setTimeout(() => console.log("hi4"),0)// none of the set timeout code can run while it is waiting
    // setTimeout is the final things in the queue
    console.log("hi5")
}

test()