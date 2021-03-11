import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

//import QuestionSlide from './QuestionSlide'

const QuizShow = () => {
  const [questions, setQuestions] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [possibleAnswers, setPossibleAnswers] = useState([])
  
  const params = useParams()
  const history = useHistory()

  console.log('params ->', params)

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get(`https://trivia.willfry.co.uk/api/questions?categories=${params.category}&limit=10`)
      setQuestions(response.data)
    }
    getData()
  }, [])


  useEffect(() => {
    if (!questions) return 
    setCorrectAnswer(questions[questionNumber].correctAnswer)
    setIncorrectAnswers(questions[questionNumber].incorrectAnswers)
    // ! Randomise Array and account for numbers
    //const possibleAnswersArray = (correctAnswer + ',' + incorrectAnswers.slice(0,3)).split(',')
    const possibleAnswersArray = (questions[questionNumber].correctAnswer + ',' + questions[questionNumber].incorrectAnswers).split(',')
    setPossibleAnswers(possibleAnswersArray)
  }, [questions, questionNumber, incorrectAnswers])

  
  const handleSlide = () => {
    setQuestionNumber(questionNumber + 1)
    if (questionNumber >= 9) {
      history.push('/quiz/results')
    }
    // setCorrectAnswer(questions[questionNumber].correctAnswer)
    // setIncorrectAnswers(questions[questionNumber].incorrectAnswers)
    // const possibleAnswersArray = (correctAnswer + ',' + incorrectAnswers.slice(0,3)).split(',')
    // setPossibleAnswers(possibleAnswersArray)
  }

  // console.log('questions', questions)
  // console.log('questionNumber', questionNumber)
  // console.log('correctAnswer', correctAnswer)
  // console.log('incorrectAnswers', incorrectAnswers)
  // console.log('possibleAnswers', possibleAnswers)


  const handleAnswerSelection = (event) => {
    const userSelect = event.target.innerText
    console.log('userSelect', userSelect)

    if (userSelect === correctAnswer) {
      console.log('CORRECT')
      //VICTORY GIF HERE
      // ? ADD to score
    } else {
      console.log('INCORRECT')
      // ? LOSS GIF HERE
    }
  }

  if (!questions) return null
  return (
    <>
      <h2>QuizShow</h2>
      {questions.map((question, index) => {
        if (questionNumber === index) {
          return  <div key={index}> 
            <p>{index + 1}/10</p>
            <div>
              <div>
                <h1>{question.question}</h1>
                <h4>Correct Answer: {question.correctAnswer}</h4>
                {possibleAnswers.map((choice, index) => {
                  return <button 
                    key={index} 
                    onClick={handleAnswerSelection}
                  > {choice} </button>
                })}
              </div>
              <hr/>
            </div>
          </div>
        }
      })}
      <button onClick={handleSlide}>NEXT Q</button>
    </>
  )
}

export default QuizShow