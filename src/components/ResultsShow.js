import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

const ResultsShow = (props) => {
  const [message, setMessage] = useState('')
  console.log(props)
  const score = props.score
  const name = props.location.state

  useEffect(() => {
    if (score >= 3) {
      setMessage(`Ouch. Better luck next time ${name}`)
    }
  
    if (score > 3 && score <= 6) {
      setMessage(`Not bad ${name}, but also not great`)
    }
  
    if (score > 7) {
      setMessage(`Nice one ${name}`)
    }
  
    if (score === 10) {
      setMessage(`Wow ${name}, nerd status`)
    }
  }, [])
  

  console.log('message', message)



  // ! DISPLAY PERSONALISED COMMENT BASED On SCORE


  // const displayScore = () => {
  // //   // let startScore = 0
  // //   // startScore += 1
    

  // }
  // displayScore()

  // personalizedComment = () => {
  //   if (scoreCount === 1, 2, 3) {
  //     return '{name}, you definitely need more practice, better chance next time'
  //   } else if (scoreCount === 4, 5, 6, 7) {
  //     return '{name}, Your ok…just ok lol'
  //   } else {
  //     return 
  //       '{name}, you are the bomb!!'
      
  //   }
  // }

  return (
    <>
      <h1>Results</h1>
      <p>Score: {score} </p>
      <p>{message}</p>
      <Link to="/">PLAY AGAIN</Link>
    </>
  )
}

export default withRouter(ResultsShow)