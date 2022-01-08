// setTimeout(() => {
//     console.log("inside")
//     setTimeout(() => {
//         console.log("haha")
//         setTimeout(() => {
//             console.log("haha")
//             setTimeout(() => {
//                 console.log("haha")
//             }, 100)
//         }, 100)
//     }, 100)
// }, 1000);

// ^^ call back hell

const promise = new Promise((resolve, reject) => {
    const sum = 2
    if (sum ===2) {
        resolve("successs!") // called if succeeded

    } else {
        reject('Errorss') // called if failed
    }

})

//resolve + reject are naming conventions
// res = when you successfully complete prom
// rej = when you unsuccessfully complete prom

// use xyz.then to run a promise function
// promise.then(message => {
//     console.log(message)
// })
// .catch(message => {
//     console.log(message)
// })



// setTimeout(() => {
//     console.log("here")
// },250)

// setTimeoutPromise(250)
// .then(() => {
//     console.log("1")
//     return setTimeoutPromise(250)
// })
// .then(() => {
//     console.log("2")
// })
// .then(() => {
//     console.log("2")
// })

  
// function setTimeoutPromise(duration) {
//     return new Promise((resolve,reject)=> {
//         setTimeout(resolve, duration)
//     })
// }


// exercise
// const button = document.querySelector('button')
// function addEventListenerPromise(element, method) {
//     return new Promise((resolve, reject) => {
//         element.addEventListener(method, resolve)
        
        
//     })
// }

// addEventListenerPromise(button, 'click').then(e  => {
//     console.log('clicked')
//     console.log(e)
// })

//

Promise.all([ // it will only call if everything inside promise succeeds!
    Promise.resolve('1'),
    Promise.reject('sobbi'),
    Promise.resolve('3')
]).then(messages => {
    console.log(messages)
    //returns an array with all promises in order from top to bottom
}) .catch(error => {
    console.error(error )
})

// run multiple promises!! ^^

Promise.any([ // only calls the first promise that succeeeds
    Promise.reject('1'),
    Promise.reject('sobbi'),
    Promise.resolve('3')
]).then(message => {
    console.log(message)

}) .catch(error => {
    console.error(error )
})

Promise.race([ // gets the first promise; doesn't care whether success or fail
    Promise.reject('1'),
    Promise.reject('sobbi'),
    Promise.resolve('3')
]).then(message => {
    console.log(message)

}) .catch(error => {
    console.error(error )
})

Promise.allSettled([ // just runs all promises and logs out their status + shows reasons and value

    Promise.reject('1'),
    Promise.reject('sobbi'),
    Promise.resolve('3')
]).then(messages => {
    console.log(messages)

}) .catch(error => {
    console.error(error )
})

// ---------------------------
// or 

// Promise.resolve('logie').then(message => console.log(message))

// or vice versa

// -------- Promise.reject('sob').catch(message => console.error(message))



// +++++++++++++

const promise = Promise.resolve('here')

promise.then(message => {
    console.log(message)
}) .catch (error => {
    console.log(error)
}).finally(() => { // something always runs afterward no matter its reject or resolve
    console.log('final')
})