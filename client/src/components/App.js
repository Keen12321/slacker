import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'

import Chat from './Chat'

class App extends Component {
  render () {
    return (
      <Provider store = {store}>
      	<Router>
      		<div className="mainContainer">
      			<Route path="/" component={Chat} />
      		</div>
      	</Router>
      </Provider>
    )
  }
}

export default App
