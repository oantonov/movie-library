import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import Movie from '../movie';
import './main.css';
import axios from 'axios';
import {
    listMovies,
    createMovie,
    editMovie,
    viewMovie,
    deleteMovie
} from '../../actions';


function Main() {
    const isLoaded = useSelector(state => state.moviesReducer.loading);
    const dispatch = useDispatch();
    
    const movies = useSelector(state => state.moviesReducer.movies);    
    const numOfMovies = movies.length;

    if(isLoaded) {
        console.log('isLoaded', isLoaded);
        console.log('movies', movies);
        console.log('no of movies', movies.map(movie => movie));
    }
    
    return (
        <main>
            <h2>Movie List (main)</h2>
            {!isLoaded ? <p className="error">There is no Internet!</p> : ''}
            {numOfMovies === 0 ? <p className="error">No movies found</p> : <MovieList />}
        </main>
    )
}

const numbers = [1, 2, 3, 4, 5];

const MovieList = (numbers) => (
    <ul>
        {React.Children.map(number =>
            <Movie
                key={number}
                {...numbers}
            />
        )}
    </ul>
)

// MovieList.propTypes = {
//     movie: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//     }).isRequired).isRequired
// }

export default Main;
