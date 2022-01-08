// function setTimeoutPromise(delay) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             reject(`reject!!`)
//         }, delay)
//     })
// }

// setTimeoutPromise(250)
// .then ((message) => {
//     console.log(message)
//     console.log("1")
//     return setTimeoutPromise(250)
// })
// .then ((message) => {
//     console.log(message)
//     console.log("2")
// }) .catch(error => {
//     console.error(error)
// })

// async function doStuff() {
//     await setTimeoutPromise(250)
//     // asyncronous.. doesn't come back to this promise till code is done...
//     console.log(1) //prints 1 after 250 milseconds
//     // easier to read
// }

// async function doStuff() {
//     try {
//         const message = await setTimeoutPromise(250)
//         console.log(message)
//         console.log(1) 
//         const message2 = await setTimeoutPromise(250)
//         console.log(message2)
//     } catch(error) {
//         console.error(error)

//     }
    
// }
// try and catch are used in async func if everything in try runs successfully
// then catch will be ignored otherwise if something in try is  not right
// then will jump to catch

// exercise

function valueWithDelay( value, delay) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}


function valueWithDelayError(delay) {
    return new Promise ((reject) => {
        setTimeout(() => {
            reject("ERRRRORRR")
        }, delay)
    })
}


async function exercise() {
    try {
        const message = await valueWithDelay(13, 500)
        console.log(message)
        const message2 = await valueWithDelay(9, 500)
        console.log(message2)
        const message3 = await valueWithDelayError( 250)
        console.log(message3)
    } catch (e) {
        console.error(e)

    } finally {
        console.log("weee")
    }
}

exercise()