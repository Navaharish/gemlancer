import React from 'react';
import Lottie from 'lottie-react'; // Ensure correct import for Lottie
import celebrationAnimation from '../assets/Animations/celebration.json';
import { useNavigate } from 'react-router-dom';
import './Completed_task.css'; // Import the CSS file for styling

const CompletedTask = () => {
    const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function
    const handleNext = () => {

        console.log("Next button clicked");
        navigate('/Dashboard')
    };

    return (
        <div className="completed-task-container">
            <h1 className="congratulations-title">Congratulations! Your Task is Completed!</h1>
            <div className="animation-container">
                <Lottie animationData={celebrationAnimation} loop={true} style={{ width: '300px', height: '300px' }} />
            </div>
            <button className="next-button" onClick={handleNext}>Next</button>
        </div>
    );
};

export default CompletedTask;