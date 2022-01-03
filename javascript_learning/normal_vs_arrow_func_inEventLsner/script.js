const button = document.querySelector('button')

button.addEventListener('click', e => {
    console.log("Arrow This")
    console.log(this) // === windows because they follow the rules of scoping 
})

button.addEventListener('click', function (e) {
    console.log("Function this") 
    console.log(this) // based on where this function is called
    // this == button because it is triggered in the button object
    // use e.target instead if you need
})

