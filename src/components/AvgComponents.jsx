import React, { useContext } from 'react'
import FeedbackContex from '../context/FeedbackContext';

function AvgComponents() {

    const { feedbacks } = useContext(FeedbackContex);
    const avg = feedbacks.reduce((p, c) => {
        return p + c.rating / feedbacks.length;
    }, 0);
    return (
        <span className='d-flex align-items-center justify-content-between'>
            <h6>Total Review:{feedbacks.length}</h6>
            <h6>Total Avg:{avg.toFixed(1)}</h6>
        </span>
    );
};


export default AvgComponents