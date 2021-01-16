import { createStore } from 'redux'

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
    case 'SET_NUMBER':
      return {
        ...state,
        number: action.payload,
      }
  }
}

const store = createStore(reducer)

export default store
