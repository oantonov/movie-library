import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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

    // if (isLoaded) {
    //     console.log('isLoaded', isLoaded);
    //     console.log('movies', movies);
    // }

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
                <strong>{movie.name}</strong> <small>id: {movie._id}</small>
            </span>
            <div className="button-actions">
                <ViewButton id={movie._id} />
                <EditButton id={movie._id} />
                <DeleteButton id={movie._id} />
            </div>
        </li>
    )

    return (
        <ul>{moviesList}</ul>
    )
}

const ViewButton = (props) => {
    const key = props.id;
    const path = `/movie/${key}`;
    // const dispatch = useDispatch();
    return (
        <Link to={path}>
            <button data-key={key}>View</button>
        </Link>
    )
}

const EditButton = (props) => {
    const key = props.id;
    const path = `/movie/edit/${key}`;
    return (
        <Link to={path}>
            <button data-key={key}>Edit</button>
        </Link>
    )
}

const DeleteButton = (props) => {
    const key = props.id;
    // const dispatch = useDispatch();
    const dispatchDeleteMovie = (e) => {
        e.preventDefault();
        const id = e.target.dataset.key;
        console.log('view id', `${API}/${id}`);
        axios.delete(API + '/' + id,
            { headers: HEADER_OBJ })
            .then((data) => {
                console.log(data);
                // dispatch(deleteMovie());
                // TODO: update movielist
            });
    }
    return (
        <button onClick={dispatchDeleteMovie} data-key={key}>Delete</button>
    )
}

const dispatchEditMovie = (e) => {
    e.preventDefault();
    const id = e.target.dataset.key;
    console.log('edit id', id);
}

export default Main;
