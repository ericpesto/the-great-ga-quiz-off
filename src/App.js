import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import QuizShow from './components/QuizShow'
import Home from './components/Home'
import ResultsShow from './components/ResultsShow'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quiz/:category">
          <QuizShow />
        </Route>
        <Route path="/quiz/results">
          <ResultsShow />
        </Route>
      </Switch>
    </BrowserRouter>

  )

}

export default App
