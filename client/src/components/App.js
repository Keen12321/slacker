import React from 'react'
import '../styles/App.css'
import store from '../store'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import { Authentication, AuthRoute } from './Authentication'

import Login from './Login'
import Register from './Register'
import Chat1 from './Chat1'
import Chat2 from './Chat2'
import Chat3 from './Chat3'

const App = props => (
  <Provider store = {store}>
  	<Router>
      <Authentication
        redirectUrl='/login'
        defaultRedirect='/'
      >
    		<div className="mainContainer">
    			<Route exact path="/" render={() => (
            <Redirect to="/login" />
          )} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <AuthRoute path="/chat1" component={Chat1} />
          <AuthRoute path="/chat2" component={Chat2} />
          <AuthRoute path="/chat3" component={Chat3} />
    		</div>
      </Authentication>
  	</Router>
  </Provider>
)

export default App
