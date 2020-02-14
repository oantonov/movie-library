import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './main.css';

function Main() { 
    const isLoaded = useSelector(state => state.isMoviesLoaded);
//    console.log('@', movies);
    const numOfMovies = 0;

    console.log('###', isLoaded);

    return (
        <main>
            <h2>Movie List (main)</h2>
            { isLoaded ? <p className="error">There is no Internet!</p> : '' }
            { numOfMovies === 0 ? <p className="error">No movies found</p> : <MovieList/> }
        </main>
    )
}

const MovieList = () => {
    return (
        <ul>
            <li> Movie name [<a href="http://google.com">delete</a>]</li>
        </ul>
    )
}

export default Main;
