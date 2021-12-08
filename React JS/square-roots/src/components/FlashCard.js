import React, { useState, useEffect } from 'react'
import _ from 'lodash'
// import './Modal.css'

const FlashCard = () => {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [answerNumber, setAnswerNumber] = useState()
  const [answerShow, setAnswerShow] = useState(false)

  const generateNumber = () => {
    const test = _.random(1, 30, false)
    setQuestionNumber(test)
    setAnswerNumber(test * test)
  }

  const showAnswer = () => {
    setAnswerShow(!showAnswer)
  }

  useEffect(() => {}, [questionNumber, answerNumber, answerShow])

  return (
    <div>
      {/* <div className = 'wrapper'>
          <div className = 'modal'>
            <div className = 'modal-content'>
              <h3>I am MODAL</h3>
            </div>
          </div>
      </div> */}
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '80px' }}
      >
        <h3 className="ui header">Square Testing</h3>
        <div>
          <span>
            What square of this number <b>{questionNumber}</b>?
          </span>
          <button className="ui button" onClick={generateNumber}>
            Get Random Number
          </button>
          <div>
            <button className="ui button" onClick={showAnswer}>
              Show Answer
            </button>
            {/* {showAnswer ? <div>{answerNumber}</div> : null} */}
          </div>
        </div>

        <p></p>
      </div>
    </div>
  )
}

export default FlashCard
