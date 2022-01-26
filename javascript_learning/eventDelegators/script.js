const buttons = document.querySelectorAll('button')

// document.addEventListener('click', () => {
//     console.log("Clicked Document")
// }, )

// document.body.addEventListener('click', e => {
//     e.stopPropagation()
//     console.log("Clicked Body")
// },{ capture: false })

// buttons.forEach(buttons => {
//     buttons.addEventListener('click', e => {
//         e.stopPropagation()
//         console.log("Click Button")
//     })
// }, { capture: true })

// this  ^ is delegation... js looks for the farthest thing that you clicked
// which is the document then the body then the button. but produces them in clg
// from closest to farthest from you

// bubbling - closest to the farthest

// capture -- if true, then from outer to inner| if false, then inner to outer.
// xyz.addEventListener(xyz mumbo jumbo{ yadayada }, {capture: true / false})

// to stop it from going to other events use e.stopPropagation() ++ prevents bubbling

// if you want to just do it by itself use the capture - true and stopPropagation

buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        console.log("CLicked")
    })
})

document.addEventListener('click', e => {
    if (e.target.matches('button')) {
        console.log("CLICKEDD")
    }
    
})

const newButton = document.createElement('button')
newButton.innerText = "Button 5"
document.body.append(newButton)