import React, { useState } from 'react';
import './QuestionBox.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

import Login_img from '../assets/Login_form.png'
const QuestionBox = () => {
    const [githubLink, setGithubLink] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the GitHub link submission (you can add your own logic here)
        alert(`Submitted GitHub Link: ${githubLink}`);
        setGithubLink(''); // Clear the input after submission
        navigate('/completed-task')
    };

    return (
        <div className="question-box-container">
            <h1 className="question-title">Task 1</h1>
            <h2 className="question-text">Create the Login form as shown in the image</h2>
            <div className="result-image-container">
                <img
                    src={Login_img}
                    alt="Final Result Sample"
                    className="result-image"
                />
            </div>
            <form className="github-form" onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter your GitHub link"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    required
                    className="github-input"
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default QuestionBox;