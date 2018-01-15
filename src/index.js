const redux = require('redux')

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

module.exports = initialState => redux.createStore(root, initialState)