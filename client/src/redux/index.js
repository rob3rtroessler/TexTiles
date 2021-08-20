// import all reducers here
import keyWordFetch from './reducers/keyWordFetch'


import {createStore, combineReducers} from 'redux';

const allReducer = combineReducers({
    fetch: keyWordFetch
})

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

