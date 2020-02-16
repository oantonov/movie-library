import React from 'react'

const ViewButton = () => {
    return (
        <button>View</button>
    )
}

const EditButton = () => {
    return (
        <button>Edit</button>
    )
}

const DeleteButton = () => {
    return (
        <button>Delete</button>
    )
}

const Movie = (text) => (
  <li>
    {text}
    <ViewButton />
    <EditButton />
    <DeleteButton/>
  </li>
)

export default Movie