import {
    LIST_MOVIES,
    EDIT_MOVIE,
    VIEW_MOVIE,
    ADD_MOVIE_SUCCESS,
    ADD_MOVIE_FAILURE,
    ADD_MOVIE_STARTED,
    DELETE_MOVIE
} from '../actions/types';

export const listMovies = movies => {
    console.log('movies', movies);
    return {
        type: LIST_MOVIES,
        payload: {
            movies
        }
    }
}

export const editMovie = movie => {
    return {
        type: EDIT_MOVIE,
        payload: {
            id: movie.id
        }
    }
}

export const viewMovie = movie => ({
    type: VIEW_MOVIE,
    payload: {
        id: movie.id
    }
})

export const addMovieSuccess = movie => ({
    type: ADD_MOVIE_SUCCESS,
    payload: {
        ...movie
    }
});

export const addMovieFailure = error => ({
    type: ADD_MOVIE_FAILURE,
    payload: {
        error
    }
});

export const addMovieStarted = () => ({
    type: ADD_MOVIE_STARTED
});

export const deleteMovie = movies => {
    console.log('movies', movies);
    return {
        type: DELETE_MOVIE,
        payload: {
            movies
        }
    }
}