import React, { Component } from 'react'
import {register} from '../actions/chatActions'

class Register extends Component {
	state = {
		username: '',
		password: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		register({
			username: this.state.username,
			password: this.state.password
		})
		this.props.history.push('/chat1')
	}

 	render() {
   	return (
   		<div>
   			<div className="nameTitle">Slacker</div>
 				<form className="inputContainer" onSubmit={this.handleForm}>
 					<div className="inputField">
	 					<label htmlFor="username">Username</label>
	 					<input className="inputBox" type="text" name="username" onChange={this.handleChange} value={this.state.username} />
	 				</div>
	 				<div className="inputField">
	 					<label htmlFor="password">Password</label>
 						<input className="inputBox" type="password" name="password" onChange={this.handleChange} value={this.state.password} />
 					</div>
 					<input className="loginSubmit" type="submit" value="Submit" />
 				</form>
 			</div>
   	)
 	}
}

export default Register