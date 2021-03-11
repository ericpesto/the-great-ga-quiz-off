import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

const ResultsShow = (props) => {
  const [message, setMessage] = useState('')
  console.log(props)
  const score = props.score
  const name = props.location.state

  useEffect(() => {
    if (score >= 3) {
      setMessage(`Ouch... ${name}`)
    }
  
    if (score > 3 && score <= 6) {
      setMessage(`Not bad ${name}, better luck next time`)
    }
  
    if (score > 7) {
      setMessage(`Nice one ${name}`)
    }
  
    if (score === 10) {
      setMessage(`Wow ${name}, nerd status`)
    }
  }, [])
  

  console.log('message', message)

  return (
    <div className="wrapper">
      <h1>Results</h1>
      <p>Score: {score} </p>
      <p>{message}</p>
      <Link to="/">PLAY AGAIN</Link>
    </div>
  )
}

export default withRouter(ResultsShow)