import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import QuizShow from './components/QuizShow'
import Home from './components/Home'

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
      </Switch>
    </BrowserRouter>

  )

}

export default App
