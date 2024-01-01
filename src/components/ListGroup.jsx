import { useContext } from "react";
import ListItem from "./ListItem";
import FeedbackContex from "../context/FeedbackContext";


const ListGroup = () => {
    const {feedbacks} = useContext(FeedbackContex);

    return (
        <ul className="list-group my-2">
            {
                feedbacks.map((feedback) => (<ListItem key={feedback.id} feedback={feedback} />))
            }
        </ul>
    )
}
export default ListGroup;