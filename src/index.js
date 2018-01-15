const redux = require('redux')
const mocks = require('../mocks')
const root = (state = [], action) => {
	switch (action.type) {
	
	case 'THUMB_UP': {
		return state.map(current => {
			if (current.id === action.id) {
				return {...current, votes: current.votes + 1}
			}
			return current
		})
	}

	default: 
		return state
	}
}
const store = redux.createStore(root, mocks)

store.subscribe(() => {console.log(store.getState())})

store.dispatch({
	type: 'THUMB_UP',
	id: 'b5e558f0-999b-40b7-b387-4f60fa421815'
})
