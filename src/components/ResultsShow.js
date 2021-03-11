import React from 'react'
import { Link } from 'react-router-dom'

const ResultsShow = (props) => {
  console.log(props)


  // ! DISPLAY SCORE
  // ! DISPLAY PERSONALISED COMMENT
  // ! PLAY AGAIN BUTTON

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
      <p>Score: {props.score} </p>
      <p>PERSONALISED MESSAGE</p>
      <Link to="/">PLAY AGAIN</Link>
    </>
  )
}

export default ResultsShow