import React, { useEffect, useState } from 'react'
import axios from 'axios'

import QuestionSlide from './QuestionSlide'

const QuizShow = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://trivia.willfry.co.uk/api/questions?categories=food_and_drink&limit=10')
      setQuestions(response.data)
    }
    getData()
  }, [])

  console.log(questions)

  return (
    <>
      <h2>QuizShow</h2>
      {questions.map((question, index) => {
        //pass through props?
        console.log(question)
        return <QuestionSlide key={index} {...question} />
      })}
    </>
  )
}

export default QuizShow