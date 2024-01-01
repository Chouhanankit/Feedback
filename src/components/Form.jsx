import React, { useContext, useEffect, useState } from 'react'
import FeedbackContex from '../context/FeedbackContext';

function Form() {

    const { saveFeedback, edit, updateFeedback } = useContext(FeedbackContex);
    const [rating, setRating] = useState("")
    const [review, setReview] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit.isEdit) {
            updateFeedback({
                id: edit.feedback.id,
                rating,
                review,
            });
        } else {
            saveFeedback(rating, review);
        }

        setRating(0);
        setReview("")
    }

    useEffect(() => {
        setRating(edit.feedback.rating);
        setReview(edit.feedback.review);
    }, [edit]);

    return (
        <>
            <form onSubmit={handleSubmit}>

                <select className="form-select rounded-0" onChange={(e) => setRating(e.target.value)} value={rating}>
                    <option defaultValue={0}>Please click your rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <textarea className="form-control rounded-0 my-3" placeholder="Leave a comment here" onChange={(e) => setReview(e.target.value)} value={review}></textarea>
                <button className='btn btn-success btn-sm w-100 rounded-0'>Submit</button>
            </form >
        </>
    )
}

export default Form