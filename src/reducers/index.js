import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import moviesReducer from './movie-reducer';
import moviesLoadedReducer from './movie-loaded';

const allReducers = combineReducers({
    moviesReducer: moviesReducer,
    isMoviesLoaded : moviesLoadedReducer,
    form: formReducer
})

export default allReducers;