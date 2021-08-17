import {combineReducers} from 'redux-immutable'
import {fromJS} from 'immutable'
import text from './text'
import colors from './colors'
import hover from './hover'

import renderCount from './renderCount'
import fetchedData from './fetches'

export const initialState = fromJS({
  text: {},
  colors: {
    user1: 'blue',
    user2: 'orange'
  },
  hover: null,
  renderCount: {},
  fetchedData: []
})

const rootReducer = combineReducers(
  {text, colors, hover, renderCount, fetchedData},
  initialState
)

export default rootReducer
