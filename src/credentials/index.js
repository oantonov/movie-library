export const API = 'https://afternoon-chamber-67331.herokuapp.com/movies';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzAyODdiMjNmYzYyMDAwNGY4NDUxNyIsImlhdCI6MTU4MTMyMjM5OCwiZXhwIjoxNTgxOTI3MTk4fQ.OOLvI7oYP4B6VIRTNhlouC2t7SrvlttSVujNg-0qWik';

export const HEADER_OBJ = {
    'x-access-token': TOKEN,
    'Content-Type': 'application/json',
    Accept: 'application/json'
}