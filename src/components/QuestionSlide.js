import React from 'react'

const QuestionSlide = (props) => {


  //need to merge correct answer w/ incorrect answers into array of possible answers
  //need to pull only 3 incorrect answers.
  const correctAnswer = props.correctAnswer
  const incorrectAnswers = props.incorrectAnswers.map(answer => {
    return answer
  })
  const possibleAnswers = (correctAnswer + ',' + incorrectAnswers.slice(0,3)).split(',')
  
  //ScoreCount Function!

  // console.log('correctAnswer ->', correctAnswer)
  // console.log('incorrectAnswers ->', incorrectAnswers)
  // console.log('possibleAnswers ->', possibleAnswers)

  // ! then have event handler for checking if answer is correct on user click

  const handleAnswerClick = (event) => {
    const userSelect = event.target.innerText
    console.log('userSelect', userSelect)

    if (userSelect === correctAnswer) {
      console.log('CORRECT')
    } else {
      console.log('INCORRECT')
    }

  }



  return (
    <div>
      <div>
        <h1>{props.question}</h1>
        <h4>Correct Answer: {props.correctAnswer}</h4>
        {possibleAnswers.map((answer, index) => {
          return <button key={index} onClick={handleAnswerClick}> {answer} </button>
        })}
      </div>
      <hr/>
      <button>NextSlide</button>
      <hr />
    </div>
  )
}

export default QuestionSlide
