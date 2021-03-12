import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

const ResultsShow = (props) => {
  const [message, setMessage] = useState('Try Again?')
  console.log(props)
  const score = props.score
  const name = props.location.state

  console.log('name', name)
  console.log('score', score)
 
  
  // if (score >= 3) {
  //   setMessage(`Ouch... ${name}... try again?`)
  // }

  // if (score > 3 && score <= 6) {
  //   setMessage(`Not bad ${name}, but better luck next time...`)
  // }

  // if (score > 7) {
  //   setMessage(`Nice one ${name}! :)`)
  // }

  // if (score === 10) {
  //   setMessage(`Wow ${name}, nerd status`)
  // }

  // console.log('message->', message)
  

  useEffect(() => {

    if (score >= 3) {
      setMessage(`Ouch... ${name}... try again?`)
    }
  
    if (score > 3 && score <= 6) {
      setMessage(`Not bad ${name}, but better luck next time...`)
    }
  
    if (score > 7) {
      setMessage(`Nice one ${name}! :)`)
    }
  
    if (score === 10) {
      setMessage(`Wow ${name}, nerd status`)
    }

    console.log('message->', message)

  })
  

  
  return (
    <div id="results-background">
      <div className="wrapper">
        <div className="results-card">
          <div className="results-ui-wrapper">
            <h2>{message}</h2>
            <p id="final-score">Final Score: {score} </p>
            <hr />
            <Link className="button" id="start-button" to="/">PLAY AGAIN</Link>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default withRouter(ResultsShow)