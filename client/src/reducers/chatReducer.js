const initialState = {
	name: '',
	message: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'MESSAGE_1':
			return {...state, message:[action.payload,...state.message]}
		default:
			return state
	}
}