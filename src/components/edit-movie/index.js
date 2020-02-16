import React from 'react';
import { useParams } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header';
import Footer from '../footer';
import './edit-movie.css';

const validate = values => {
    const errors = {}
    if (!values.rating) {
        errors.rating = 'Required'
    } else if (values.rating.length > 2 && values.rating >= 99) {
        errors.username = 'Must be 2 characters max and < 99'
    }
    if (!values.isWatched) {
        errors.isWatched = 'Required'
    } else if (typeof values.isWatched !== "boolean") {
        errors.isWatched = 'It should be true or false'
    }
    if (!values.genres) {
        errors.genres = 'Required'
    }
    if (!values.name) {
        errors.name = 'Required'
    }
    return errors
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )

const CreateMovieForm = props => {

    const { handleSubmit, pristine, reset, submitting } = props
    const { id } = useParams();
    const movies = useSelector(state => state.moviesReducer.movies);
    const [movie] = movies.filter(movie => movie._id === id);
    console.log(id);
    const { rating, isWatched, genres, _id, name, released_on, disk, userId, __v } = { ...movie };

    return (
        <div className="wrapper">
            <Header />
            <form onSubmit={handleSubmit}>
                {id ? <h2>Edit -> {name}</h2> : ''}
                <Field name="rating" type="number" component={renderField} label="rating" />
                <Field name="isWatched" type="text" component={renderField} label="isWatched" />
                <Field name="genres" type="text" component={renderField} label="genres" />
                <Field name="_id" type="text" component={renderField} label="_id" />
                <Field name="name" type="text" component={renderField} label="name" />
                <Field name="released_on" type="text" component={renderField} label="released_on" />
                <Field name="disk" type="text" component={renderField} label="disk" />
                <Field name="userId" type="number" component={renderField} label="userID" />
                <Field name="__v" type="number" component={renderField} label="__v" />
                <div>
                    <button type="submit" disabled={submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default reduxForm({
    form: 'movieForm', // a unique identifier for this form
    validate // <--- validation function given to redux-form
})(CreateMovieForm)