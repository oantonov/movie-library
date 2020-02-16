import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import Movie from '../movie';
import { API, HEADER_OBJ } from '../../credentials';
import './main.css';
import {
    createMovie,
    editMovie,
    viewMovie,
    deleteMovie
} from '../../actions';

const Main = () => {
    const isLoaded = useSelector(state => state.moviesReducer.loading);
    const movies = useSelector(state => state.moviesReducer.movies);

    if (isLoaded) {
        console.log('isLoaded', isLoaded);
        console.log('movies', movies);
    }

    return (
        <main>
            <h2>Movie List (main)</h2>
            {isLoaded ? <MovieList movies={movies} /> : <p className="error">No movies found</p>}
        </main>
    )
}

const MovieList = (props) => {
    const movies = props.movies;
    const moviesList = movies.map((movie) =>
        <li key={movie._id}>
            <span className="movie-title">
                {movie.name} / {movie._id}
            </span>
            <div className="button-actions">
                <ViewButton id={movie._id} />
                <button onClick={dispatchEditMovie} data-key={movie._id}>Edit</button>
                <DeleteButton id={movie._id} />
            </div>
        </li>
    )

    return (
        <ul>{moviesList} </ul>
    )
}

const ViewButton = (props) => {
    const key = props.id;
    const dispatch = useDispatch();
    const dispatchViewMovie = (e) => {
        e.preventDefault();
        const id = e.target.dataset.key;
        console.log('view id', `${API}/${id}`);
        axios.delete(`${API}/${id}`, {
            headers: { HEADER_OBJ }
        });
    }
    return (
        <button onClick={dispatchViewMovie} data-key={key}>View</button>
    )
}

const EditButton = (props) => {
    const key = props.id;
    return (
        <button onClick={dispatchEditMovie} data-key={key}>Edit</button>
    )
}

const DeleteButton = (props) => {
    const key = props.id;
    const dispatch = useDispatch();
    const dispatchViewMovie = (e) => {
        e.preventDefault();
        const id = e.target.dataset.key;
        console.log('view id', `${API}/${id}`);
        axios.delete(API + '/' + id,
            { headers: HEADER_OBJ })
            .then((data) => {
                console.log(data); 
                dispatch(deleteMovie());
            });
    }
    return (
        <button onClick={dispatchViewMovie} data-key={key}>Delete</button>
    )
}

const dispatchEditMovie = (e) => {
    e.preventDefault();
    const id = e.target.dataset.key;
    console.log('edit id', id);
}

// MovieList.propTypes = {
//     movie: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//     }).isRequired).isRequired
// }

export default Main;
