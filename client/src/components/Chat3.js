import React, { Component } from 'react'
import {getMessages3, sendForm3} from '../actions/chatActions'
import {withAuth} from './Authentication'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Chat3 extends Component {
	state = {
		text: ''
	}

	componentDidMount() {
		getMessages3()
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
  	e.preventDefault()
		sendForm3(this.state.text)
		this.setState({
			text: '',
		})
	}

	logout = (e) => {
		this.props.signout()
	}

 	render() {
   	return (
   		<div className="chatMainContainer">
 				<div className="changeRoom">
 					<button className="logoutButton" onClick={this.logout}>Logout</button>
 					<Link className="chatRoomLink" to="/chat1">Chat Room 1</Link>
 					<Link className="chatRoomLink" to="/chat2">Chat Room 2</Link>
 					<Link className="chatRoomLink" to="/chat3">Chat Room 3</Link>
 				</div>
	 			<div className="chatContainer">
	 				<div className="messageContainer">
	 					{this.props.messages.map((data, i) => (
							<div key={`message-${i}`} className="message">
								<div>{data.username}</div>
								<div>{data.timestamp}</div>
								<div>{data.message}</div>
							</div>
	 					))}
	 				</div>
	 				<form className="inputContainer" onSubmit={this.handleSubmit}>
	 					<input className="messageBox" type="text" name="text" onChange={this.handleChange} value={this.state.text} />
	 					<input type="submit" className="messageSubmit" value="Submit"/>
	 				</form>
	 			</div>
 			</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		messages: appState.chatReducer.messages3
	}
}

export default withAuth(connect(mapStateToProps)(Chat3))