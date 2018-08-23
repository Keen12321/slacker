const initialState = {
	name: '',
	messages1: [],
	messages2: [],
	messages3: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'PRELOAD_1':
			return {...state, messages1:action.payload}
		case 'MESSAGE_1':
			return {...state, messages1:[action.payload,...state.messages1]}
		case 'PRELOAD_2':
			return {...state, messages2:action.payload}
		case 'MESSAGE_2':
			return {...state, messages2:[action.payload,...state.messages2]}
		case 'PRELOAD_3':
			return {...state, messages3: action.payload}
		case 'MESSAGE_3':
			return {...state, messages3:[action.payload,...state.messages3]}
		default:
			return state
	}
}