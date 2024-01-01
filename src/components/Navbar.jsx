import React, { useContext } from 'react'
import FeedbackContex from '../context/FeedbackContext'

function Navbar() {

    const { darkMode, changeTheme } = useContext(FeedbackContex);

    return (
        <>
            <nav className={darkMode ? "navbar bg-dark" : "navbar bg-danger"}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-warning">Feedback-App-Reducer</span>
                    <span><button className='mb-0 text-warning bg-dark border border-warning' onClick={changeTheme}>{darkMode ? "Light Mode" : "Dark Mode"}</button></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar