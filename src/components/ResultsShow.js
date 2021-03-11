import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

const ResultsShow = (props) => {
  const [message, setMessage] = useState('')
  console.log(props)
  const score = props.score
  const name = props.location.state

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
  }, [])
  

  console.log('message', message)

  return (
    <div className="wrapper">
      <div className="ui-wrapper">
        <h1>Results</h1>
        <p>Score: {score} </p>
        <p>{message}</p>
        <Link className="button" to="/">PLAY AGAIN</Link>
      </div>
    </div>
  )
}

export default withRouter(ResultsShow)