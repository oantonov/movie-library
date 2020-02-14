const api = 'https://afternoon-chamber-67331.herokuapp.com/movies';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzAyODdiMjNmYzYyMDAwNGY4NDUxNyIsImlhdCI6MTU4MTMyMjM5OCwiZXhwIjoxNTgxOTI3MTk4fQ.OOLvI7oYP4B6VIRTNhlouC2t7SrvlttSVujNg-0qWik';
const header_obj = {
    'x-access-token': token,
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

async function callAPI(api) {
    const response = await fetch(api, { headers: header_obj });
    return await response.json();
}

const moviesReducer = (state = false, action) => {
    switch (action.type) {
        case 'LIST':
            return (() => {
                callAPI(api).then((data) => {
                    if (data.status == 'success') {
                        console.log('movies', data.data.movies[0]); // JSON data parsed by `response.json()` call
                    }
                });
                return true
            })()
        // return state = ((state) => {
        //     callAPI(api).then((data) => {
        //         if (data.status == 'success') {
        //             state = data.data.movies[0]
        //             console.log('state', state); // JSON data parsed by `response.json()` call
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

export default moviesReducer;
