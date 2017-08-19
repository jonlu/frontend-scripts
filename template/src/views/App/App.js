import React, { Component } from 'react'
import Header from 'components/Header'
import { Link } from 'react-router-dom'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div styleName='App'>
        <Header />
        <h3>Welcome to a new standard in boilerplates.</h3>
        <Link to='/Example'>Redux Example</Link>
      </div>
    )
  }
}

export default App
