import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import { clients } from '../assets/DataBase/fakeDatabase'; // Import the fake database
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import user icon

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = clients.filter(client =>
            client.name.toLowerCase().includes(term) ||
            client.email.toLowerCase().includes(term)
        );
        setFilteredClients(filtered);
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h2>Menu</h2>
                <ul>
                    <li>Home</li>
                    <li>Tasks</li>
                    <li>Reports</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div className="main-content">
                <div className="top-bar">
                    <input
                        type="text"
                        placeholder="Search Clients..."
                        className="search-bar"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="client-profile">
                        <FontAwesomeIcon icon={faUser} className="profile-icon" />
                        <p>Client Profile</p>
                        <p>{filteredClients.length > 0 ? filteredClients[0].name : 'No Client Selected'}</p>
                    </div>
                </div>
                <div className="content-area">
                    <h1>Welcome to the Dashboard!</h1>
                    <h3>Client List:</h3>
                    <div className="client-list">
                        {filteredClients.map(client => (
                            <div key={client.id} className="client-card">
                                <h4>{client.name}</h4>
                                <p>Email: {client.email}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;