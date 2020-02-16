import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header/';
import Footer from '../footer/';
import './view-movie.css';

const ViewMovie = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { id } = useParams();
    const movies = useSelector(state => state.moviesReducer.movies);
    const [movie] = movies.filter(movie => movie._id === id);
    const {rating, isWatched, genres, _id, name, released_on, disk, userId, __v} = {...movie};
    
    //console.log('movie = ', rating, isWatched, genres, _id, name, released_on, disk, userId, __v);

    return (
        <div className="wrapper">
            <Header />
            <main>
                <h2>Movie: {name}</h2>
                <p>rating: {rating}</p>
                <p>isWatched: {JSON.stringify(isWatched)}</p>
                <p>genres: {JSON.stringify(genres)}</p>
                <p>_id: {_id}</p>
                <p>name: {name}</p>
                <p>relesed_on: {released_on}</p>
                <p>disk: {disk}</p>
                <p>userId: {userId}</p>
                <p>__v: {__v}</p>
            </main>
            <Footer />
        </div>
    );
}

export default ViewMovie;