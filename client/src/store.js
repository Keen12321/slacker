import {createStore} from 'redux'

import chatReducer from './reducers/chatReducer'

export default createStore(chatReducer)