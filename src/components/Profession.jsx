import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import './Profession.css'; // Import the CSS file for styling

const Profession = () => {
    const navigate = useNavigate(); // Create a history instance

    const professions = [
        { name: 'Web Development' },
        { name: 'Machine Learning' },
        { name: 'Graphic Design' },
        { name: 'Video Editing' },
    ];

    const handleProfessionClick = () => {
        navigate('/question-box'); // Navigate to QuestionBox when a profession is clicked
    };

    return (
        <div className="profession-container">
            <h1>Choose Your Profession</h1>
            <div className="profession-grid">
                {professions.map((profession, index) => (
                    <div
                        className="profession-box"
                        key={index}
                        onClick={handleProfessionClick}
                    >
                        {profession.name}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Profession;