import { createContext, useContext, useReducer, useState } from "react";
import FeedbackReducer from "./FeedbackReducer";


const FeedbackContex = createContext();

export const FeedbackProvider = ({ children }) => {

    const initialState = {
        feedbacks: [{ id: 1, rating: 5, review: "THIS IS REDUCER" }],
        edit: { feedback: {}, isEdit: false },
        darkMode: false,
    };

    const [state, dispatch] = useReducer(FeedbackReducer, initialState);

    
    // THEME
    const changeTheme = () => {
        if (state.darkMode) {
            dispatch({
                type: "LIGHT_MODE",
            });
        } else {
            dispatch({
                type: "DARK_MODE",
            });
        }
    };



    // DELETE
    const deleteFeedback = (id) => {
        dispatch({
            type: "DELETE",
            payload: id,
        });
    };

    // SAVE
    const saveFeedback = (rating, review) => {
        const newFeedback = {
            id: crypto.randomUUID(),
            rating,
            review,
        };

        dispatch({
            type: "SAVE",
            payload: newFeedback,
        });
    };

    // EDIT
    const editFeedback = (feedback) => {
        dispatch({
            type: "EDIT",
            payload: feedback,
        });
    };

    // UPDATE
    const updateFeedback = (updatedFeedback) => {
        dispatch({
            type: "UPDATE",
            payload: updatedFeedback,
        });
    };

    return (
        <FeedbackContex.Provider value={{ darkMode: state.darkMode, feedbacks: state.feedbacks, deleteFeedback, saveFeedback, edit: state.edit, editFeedback, updateFeedback, changeTheme }}>
            {children}
        </FeedbackContex.Provider>
    );
};

export default FeedbackContex;