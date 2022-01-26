const form = document.getElementById('quiz-form')
const answers = Array.from(document.querySelectorAll('.answer'))
const questionItems = document.querySelectorAll(".question-item")
const alert = document.querySelector('#alert')


form.addEventListener("submit", e => {
    // prevent reloading on submit
    e.preventDefault()

    questionItems.forEach(questionItem => {
        questionItem.classList.add("incorrect")
        questionItem.classList.remove("correct")
    })

    // filtered the clicked answers
    const checkedAnswers = answers.filter(answer => answer.checked)


    // go through checked answers and check the value
    checkedAnswers.forEach(answer => {
        const isCorrect = answer.value === "true"
        const questionItem = answer.closest('.question-item')

        // adds the necessary color if correct or incorrect
        if (isCorrect) {
            questionItem.classList.add("correct")
            questionItem.classList.remove("incorrect")
        } else {
            questionItem.classList.add("incorrect")
            questionItem.classList.remove("correct")
        }

        const allTrue = checkedAnswers.every(answer => answer.value === "true")
        const allAnswered = checkedAnswers.length = questionItems.length

        if (allTrue === true) {
            console.log("all true")
        }
         if (allTrue && allAnswered) {
             alert.classList.add("active")
             setTimeout(() => {
                alert.classList.remove("active")
             }, 1000)

         }
    })


})