import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

import QuestionSlide from './QuestionSlide'

const QuizShow = () => {
  const [questions, setQuestions] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  

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

  //console.log(questions)

  // every time the user clock a next button the question number state inceases by 1, this tking them to the next question in the array.

  const handleSlide = () => {
    setQuestionNumber(questionNumber + 1)
    //if questionNumber > 10 , useHistroy to push ResultsShow
    if (questionNumber >= 9) {
      history.push('/quiz/results')
    }
  }

  console.log('questionNumber', questionNumber)



  return (
    <>
      <h2>QuizShow</h2>
      {questions.map((question, index) => {
        //pass through props?
        console.log('index', index)
        if (questionNumber === index) {
          return  <> 
            <p>{index + 1}/10</p>
            <QuestionSlide key={index} {...question} />
          </>
        }
      })}
      <button onClick={handleSlide}>NEXT Q</button>
    </>
  )
}

export default QuizShow