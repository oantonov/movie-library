import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import moviesReducer from './movie-reducer';

const allReducers = combineReducers({
    moviesReducer,
    form: formReducer
})

export default allReducers;