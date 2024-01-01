import React, { useContext } from 'react'
import FeedbackContex from '../context/FeedbackContext'

function ListItem({ feedback }) {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContex);

    return (
        <li className="list-group-item rounded-0">
            <h1>Rating: {feedback.rating}</h1>
            <h6 className='display-6'> <span className='text-danger fs-3'>Review:</span> {feedback.review}</h6>
            <span className="float-end">
                <button className="btn btn-sm btn-warning rounded-0 mx-1" onClick={() => editFeedback(feedback)}>Edit</button>
                <button className="btn btn-sm btn-danger rounded-0" onClick={() => deleteFeedback(feedback.id)}>Delete</button>
            </span>
        </li>
    )
}

export default ListItem