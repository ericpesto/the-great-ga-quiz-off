import React from 'react'

const QuestionSlide = (props) => {

  //need to merge correct answer w/ incorrect answers into array of possible answers

  const correctAnswer = props.correctAnswer
  const incorrectAnswers = props.incorrectAnswers.map(answer => {
    return answer
  })
  const possibleAnswers = (correctAnswer + ',' + incorrectAnswers).split(',')

  // console.log('correctAnswer ->', correctAnswer)
  // console.log('incorrectAnswers ->', incorrectAnswers)
  // console.log('possibleAnswers ->', possibleAnswers)

  // ! then have event handler for checking if answer is correct on user click

  return (
    <div>
      <div>
        <h1>{props.question}</h1>
        {/* <h4>{props.correctAnswer}</h4> */}
        {possibleAnswers.map(answer => {
          return <button key={answer}> {answer} </button>
        })}
      </div>
      <hr/>
      <button>NextSlide</button>
      <hr />
    </div>
  )
}

export default QuestionSlide
