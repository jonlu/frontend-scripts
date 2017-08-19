import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Example from './views/Example'
import App from './views/App'
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/example' component={Example} />
    </Switch>
  )
}

export default Routes
