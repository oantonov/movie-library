import React from 'react';
import Header from '../header/';
import Main from '../main/';
import Footer from '../footer/';
import { API, HEADER_OBJ } from '../../credentials';


const Homepage = () => {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

const newMovie = {
    "rating": 0,
    "isWatched": false,
    "genres": [
        "DRAMA"
    ],
    "name": "JOKER",
    "released_on": Date.now(),
    "disk": "New disk"
}

// const newMovie = {
//     "rating": 11,
//     "isWatched": false,
//     "genres": [
//         "COMEDY"
//     ],
//     "_id": "5e41133423aa5b00043c2b19",
//     "name": "Comedy Name",
//     "released_on": "03/03/2020",
//     "disk": "New disk",
//     "userId": "5e30287b23fc620004f8451",
//     "__v": 0
// }

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: { HEADER_OBJ },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

// postData(API, newMovie)
//     .then((data) => {
//         console.log(data); // JSON data parsed by `response.json()` call
//     });

// async function deleteData(url = '') {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'DELETE', // *GET, POST, PUT, DELETE, etc.            
//         headers: { HEADER_OBJ }
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
// }

// deleteData(API +'/5e42efad90db530004856f86')
//     .then((data) => {
//         console.log(data); // JSON data parsed by `response.json()` call
//     });

export default Homepage;