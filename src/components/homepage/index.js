import React from 'react';
import Header from '../header/';
import Main from '../main/';
import Footer from '../footer/';

const Homepage = () => {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    )
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

// getMoviesFromApi('https://afternoon-chamber-67331.herokuapp.com/movies')
//      .then((data) => {
//          if(data.status == 'success'){
//             console.log('###', data); // JSON data parsed by `response.json()` call
//             //console.log('###', isLoaded);
//             //dispatch(checkLoaded);
//          }
//      });

// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzAyODdiMjNmYzYyMDAwNGY4NDUxNyIsImlhdCI6MTU4MTMyMjM5OCwiZXhwIjoxNTgxOTI3MTk4fQ.OOLvI7oYP4B6VIRTNhlouC2t7SrvlttSVujNg-0qWik',
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://afternoon-chamber-67331.herokuapp.com/movies', newMovie)
//     .then((data) => {
//         console.log(data); // JSON data parsed by `response.json()` call
//     });

// async function deleteData(url = '') {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'DELETE', // *GET, POST, PUT, DELETE, etc.            
//         headers: {
//             'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzAyODdiMjNmYzYyMDAwNGY4NDUxNyIsImlhdCI6MTU4MTMyMjM5OCwiZXhwIjoxNTgxOTI3MTk4fQ.OOLvI7oYP4B6VIRTNhlouC2t7SrvlttSVujNg-0qWik',
//             'Content-Type': 'application/json'
//         }
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
// }

// deleteData('https://afternoon-chamber-67331.herokuapp.com/movies'+'/5e42efad90db530004856f86')
//     .then((data) => {
//         console.log(data); // JSON data parsed by `response.json()` call
//     });

export default Homepage;