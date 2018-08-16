import React, { Component } from 'react'
import {sendForm1} from '../actions/chatActions'
import {connect} from 'react-redux'

class Chat extends Component {
	state = {
		text: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleForm = (e) => {
		e.preventDefault()
		sendForm1(this.state.text)
		this.setState({
			text: ''
		})
	}

 	render() {
   	return (
 			<div className="chatContainer">
 				<div className="messageContainer">
 					{this.props.message.map(data => (
						<div className="message">{data.message}</div>
 					))}
 				</div>
 				<form className="inputContainer" onSubmit={this.handleForm}>
 					<input className="inputBox" type="text" name="text" onChange={this.handleChange} value={this.state.text} />
 					<input type="submit" className="inputSubmit" value="Submit"/>
 				</form>
 			</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		message: appState.message
	}
}

export default connect(mapStateToProps)(Chat)