import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { listMovies } from './actions';
import allReducers from './reducers';
import { API, HEADER_OBJ } from './credentials';
import thunk from 'redux-thunk';
import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

axios.get(API, { headers: HEADER_OBJ })
    .then(res => res.data.data.movies)
    .then(
        data => store.dispatch(listMovies(data))
    )
    .catch(err => console.error(err.message));

serviceWorker.unregister();