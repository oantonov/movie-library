const api = 'https://afternoon-chamber-67331.herokuapp.com/movies';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzAyODdiMjNmYzYyMDAwNGY4NDUxNyIsImlhdCI6MTU4MTMyMjM5OCwiZXhwIjoxNTgxOTI3MTk4fQ.OOLvI7oYP4B6VIRTNhlouC2t7SrvlttSVujNg-0qWik';
const header_obj = {
    'x-access-token': token,
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

let newMovie = {
    "rating": 11,
    "isWatched": false,
    "genres": [
        "COMEDY"
    ],
    "_id": "5e41133423aa5b00043c2b19",
    "name": "Comedy Name",
    "released_on": "03/03/2020",
    "disk": "New disk",
    "userId": "5e30287b23fc620004f8451",
    "__v": 0
}

function makeFunc() {
    var count = 0;
    function countUp() {
      count ++;
      return count;
    }
    return countUp;
  };
  
  var myFunc = makeFunc();
  
 
const callAPI = async () => {
    const response = await fetch(api, { headers: header_obj });
    const responseJSON =  await response.json();
    return responseJSON
}

const movieLoader = (res) => {
    console.log(res.then((data) => data));
}

const apiReducer = (state = false, action) => {
    switch (action.type) {
        case 'LIST':
            return 3

        // callAPI(state).then((res, state) => {
        //     // JSON data parsed by `response.json()` call
        //     if (res.status === 'success' && res.data.movies.length) {
        //         console.log('movies', res.data.movies);
        //         console.log('movies.length', res.data.movies.length);
        //     }
        // })
        // return state

        // return (() => {
        //     callAPI(api).then((res) => {
        //         // JSON data parsed by `response.json()` call
        //         if (res.status == 'success' && res.data.movies.length) {
        //             console.log('movies', res.data.movies); 
        //             console.log('movies.length', res.data.movies.length);
        //             console.log(state);
        //         }
        //     });
        //     return state
        // })()

        case 'CREATE':
            return callAPI(api, {
                method: 'POST',
                headers: header_obj,
                body: JSON.stringify(action.data)
            });
        case 'EDIT':
            return callAPI(api, {
                method: 'PUT',
                headers: header_obj,
                body: JSON.stringify(action.data)
            });
        case 'DELETE':
            return callAPI(api + '/' + action.id, {
                method: 'DELETE',
                headers: header_obj
            });
        default:
            return state;
    }
}

export default apiReducer;
