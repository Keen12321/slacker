import io from 'socket.io-client'
import store from '../store'
import {api} from '../components/Authentication'

const socket = io.connect('http://10.68.0.189:3001')

export function getMessages1() {
	api.get('/api/chat1').then(data => {
		store.dispatch({
			type: 'PRELOAD_1',
			payload: data
		})
	})
}

socket.on('/chat1', (data) => {
	store.dispatch({
		type:  'MESSAGE_1',
		payload: data
	})
})

export function sendForm1(message) {
	const timestamp = new Date().toLocaleDateString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('/chat1', {
		username: api.getProfile().username,
		image: api.getProfile().image,
		message: message,
		timestamp: timestamp
	})
}



export function getMessages2() {
	api.get('/api/chat2').then(data => {
		store.dispatch({
			type: 'PRELOAD_2',
			payload: data
		})
	})
}

socket.on('/chat2', (data) => {
	store.dispatch({
		type: 'MESSAGE_2',
		payload: data
	})
})

export function sendForm2(message) {
	const timestamp = new Date().toLocaleDateString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('/chat2', {
		username: api.getProfile().username,
		image: api.getProfile().image,
		message: message,
		timestamp: timestamp
	})
}



export function getMessages3() {
	api.get('/api/chat3').then(data => {
		store.dispatch({
			type: 'PRELOAD_3',
			payload: data
		})
	})
}

socket.on('/chat3', (data) => {
	store.dispatch({
		type: 'MESSAGE_3',
		payload: data
	})
})

export function sendForm3(message) {
	const timestamp = new Date().toLocaleDateString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
	socket.emit('/chat3', {
		username: api.getProfile().username,
		image: api.getProfile().image,
		message: message,
		timestamp: timestamp
	})
}





export function register(username) {
	api.post('/api/register', username).then(data => {

	})
}