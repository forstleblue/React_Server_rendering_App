import { combineReducers } from 'redux'
const initialState = null

const reducerAction = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const reducers = combineReducers({
  reducerAction,
})

export default reducers
