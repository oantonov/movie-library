import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
//import apiReducer from './api-reducer';
import moviesReducer from './movie-reducer';

const allReducers = combineReducers({
    //apiReducer,
    moviesReducer,
    form: formReducer
})

export default allReducers;