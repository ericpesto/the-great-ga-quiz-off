import React from 'react'


const QuestionSlide = (props) => {
  //const [score, setScore] = useState(0)



  const correctAnswer = props.correctAnswer
  const incorrectAnswers = props.incorrectAnswers.map(answer => {
    return answer
  })

  // ! RANDOMISE ARRAY
  const possibleAnswers = (correctAnswer + ',' + incorrectAnswers.slice(0,3)).split(',')
  
  // ! ScoreCount Function!

  // console.log('correctAnswer ->', correctAnswer)
  // console.log('incorrectAnswers ->', incorrectAnswers)
  // console.log('possibleAnswers ->', possibleAnswers)

  const handleAnswerClick = (event) => {
    const userSelect = event.target.innerText
    console.log('userSelect', userSelect)

    if (userSelect === correctAnswer) {
      console.log('CORRECT')
      //VICTORY GIF HERE
      //ADD to score
    } else {
      console.log('INCORRECT')
      //LOSS GIF HERE
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
    </div>
  )
}

export default QuestionSlide
