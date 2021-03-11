import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ResultsShow from './ResultsShow'


// ! HANDLE ANSWER CHOICE, display next Q button only if correct answer is chosen
// ! if correct button chosen, display next Q button, add to score, show gif, make correct button green and incorrect buttons red
// ! if inccorect button chosen, display next Q, show correct button in greena n rest in red
// ! on last Q, hide next q button, have a results LINK once choice is made
// ! pass score and name through to results page

const QuizShow = () => {
  const [questions, setQuestions] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [possibleAnswers, setPossibleAnswers] = useState([])
  const [score, setScore] = useState(0)
  
  const params = useParams()
  console.log('params ->', params)

  useEffect(() => {
    const getData = async() => {
      try {
        const response = await axios.get(`https://trivia.willfry.co.uk/api/questions?categories=${params.category}&limit=11`)
        setQuestions(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    if (!questions) return 
    setCorrectAnswer(questions[questionNumber].correctAnswer)
    setIncorrectAnswers(questions[questionNumber].incorrectAnswers)
    const possibleAnswersArray = (questions[questionNumber].correctAnswer + ',' + questions[questionNumber].incorrectAnswers.slice(0,3)).split(',')
    const shuffleAnswers = () => {
      return 0.5 - Math.random()
    }
    const shuffledAnswersArray = possibleAnswersArray.sort(shuffleAnswers)
    setPossibleAnswers(shuffledAnswersArray)
  }, [questions, questionNumber, correctAnswer, incorrectAnswers])
  
  const handleSlide = () => {
    setTimeout(() => {
      setQuestionNumber(questionNumber + 1)
    }, 2000)
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
      // ! VICTORY GIF HERE
      setScore(score + 1)
      handleSlide()
    } else {
      console.log('INCORRECT')
      handleSlide()
      // ! LOSS GIF HERE
    }
  }

  if (!questions) return <p className="wrapper">loading...</p>
  if (questionNumber < 10) {
    return (
      <div className="wrapper">
        {questions.map((question, index) => {
          if (questionNumber === index) {
            return  <div key={index}> 
              <p>{index + 1}/10</p>
              <p>score: {score}</p>
              <div>
                <div>
                  <hr />
                  <h2>{question.question}</h2>
                  <hr />
                  {/* <h4>Correct Answer: {question.correctAnswer}</h4> */}
                  <div className="button-grid">
                    {possibleAnswers.map((choice, index) => {
                      return <button 
                        key={index} 
                        onClick={handleAnswerSelection}
                        className="button"
                      > {choice} </button>
                    })}
                  </div>
                </div>
              </div>
            </div>
          }
        })}
      </div>
    )
  } else {
    return (
      <ResultsShow score={score} />
    )
  }
}

export default QuizShow