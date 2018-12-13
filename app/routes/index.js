import { Router, Route } from 'react-router-dom'
import React from 'react'
import { createBrowserHistory } from 'history'
import Home from './Home'

// eslint-disable-next-line
export default store => {
  const history = createBrowserHistory()
  const routes = (
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  )

  return routes
}
