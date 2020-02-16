import {
    LIST_MOVIES,
    EDIT_MOVIE,
    VIEW_MOVIE,
    ADD_MOVIE_SUCCESS,
    ADD_MOVIE_FAILURE,
    ADD_MOVIE_STARTED,
    DELETE_MOVIE
} from '../actions/types';

const initialState = {
    loading: false,
    movies: [],
    error: null
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_MOVIES:
            return {
                ...state,
                loading: true,
                movies: action.payload.movies
            };
        case ADD_MOVIE_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                movies: [...state.movies, action.payload]
            };
        case ADD_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case DELETE_MOVIE:
            return {
                ...state,
                loading: true,
                movies: action.payload.movies
            };
        default:
            return state;
    }
}

// const movieReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_MOVIE':
//             return [
//                 ...state,
//                 {
//                     rating: action.rating,
//                     isWatched: action.isWatched,
//                     genres: action.genres,
//                     _id: action.id,
//                     name: action.newMovie,
//                     released_on: Date.now(),
//                     disk: action.disk,
//                     userId: "5e30287b23fc620004f8451",
//                     "__v": 0
//                 }
//             ]
//         default:
//             return state
//     }
// }

export default moviesReducer