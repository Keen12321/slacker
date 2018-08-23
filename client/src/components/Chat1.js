import React, { Component } from 'react'
import {getMessages1, sendForm1} from '../actions/chatActions'
import {withAuth} from './Authentication'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import EmojiPicker from 'emoji-picker-react'
import {emoji, EmojiConvertor} from 'emoji-js'

class Chat1 extends Component {
	state = {
		text: '',
		renderEmoji: false
	}

	componentDidMount() {
		getMessages1()
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
  	e.preventDefault()
		sendForm1(this.state.text)
		this.setState({
			text: '',
			renderEmoji: false
		})
	}

	toggleEmoji = (e) => {
		this.setState({
			renderEmoji: !this.state.renderEmoji
		})
	}

	getEmoji = (code, data) => {
		var emoji = new EmojiConvertor()
		var output = emoji.replace_colons(`:${data.name}:`)
		this.setState({
			text: this.state.text +' '+ output,
			renderEmoji: false
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
	 					<button className="emojiButton" type="button" onClick={this.toggleEmoji}>
	 						<i className="fa fa-smile-o"></i>
	 					</button>
	 					<input className="messageBox" type="text" name="text" onChange={this.handleChange} value={this.state.text} />
	 					<input type="submit" className="messageSubmit" value="Submit"/>
	 					<div>
	 						{this.state.renderEmoji ? <EmojiPicker onEmojiClick={this.getEmoji}/> : '' }
	 					</div>
	 				</form>
	 			</div>
 			</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		messages: appState.chatReducer.messages1
	}
}

export default withAuth(connect(mapStateToProps)(Chat1))