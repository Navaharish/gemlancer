import LoginButton from "./G_login";
import LogoutButton from "./G_logout";
import '../components/Main_form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Password:', password);
        // Navigate to Profession page after form submission
        // navigate('/'); // Ensure this matches your route
    };

    return (
        <div className="form">
            <div className='form_title'>
                <h1>Welcome to GEMLANCER</h1>
                <h4>LOGIN IN YOUR ACCOUNT</h4>
            </div>
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                <p style={{ textAlign: 'center', margin: '5px' }}>or</p>
                <div className="form_btn">
                    <LoginButton />
                    {/* <LogoutButton /> */}
                </div>
            </form>
        </div>
    )
}

export default App;