const FeedbackReducer = (state, action) => {

    switch (action.type) {
        case "DELETE":
            return {
                ...state,
                feedbacks: state.feedbacks.filter((item) => item.id !== action.payload),
            }
        case "SAVE":
            return {
                ...state,
                feedbacks: [action.payload, ...state.feedbacks]
            }
        case "EDIT":
            return {
                ...state,
                edit: { feedback: action.payload, isEdit: true },
            }
        case "UPDATE":
            return {
                ...state,
                feedbacks: state.feedbacks.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                edit: { feedback: {}, isEdit: false },
            };
        case "LIGHT_MODE":
            return {
                ...state,
                darkMode: false,
            }
        case "DARK_MODE":
            return {
                ...state,
                darkMode: true,
            }

        default:
            return state;
    }
}

export default FeedbackReducer;