import {combineReducers} from 'redux-immutable'
import {fromJS} from 'immutable'
import text from './text'
import colors from './colors'
import hover from './hover'

import renderCount from './renderCount'

export const initialState = fromJS({
  text: {},
  colors: {
    user1: 'blue',
    user2: 'orange'
  },
  hover: null,
  renderCount: {}
})

const rootReducer = combineReducers(
  {text, colors, hover, renderCount},
  initialState
)

export default rootReducer
