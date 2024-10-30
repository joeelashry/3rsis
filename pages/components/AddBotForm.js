// components/AddBotForm.js
import React, { useState } from 'react';
import styles from '@/styles/botsPage.module.css';

const AddBotForm = ({ onAdd }) => {
    const [botName, setBotName] = useState('');
    const [botDescription, setBotDescription] = useState('');
    const [extraInfo, setExtraInfo] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const jwtToken = localStorage.getItem('access'); // Make sure this matches
            const response = await fetch('https://api.juren.tech/openaibots/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`, // Correctly format the Bearer token
                },
                body: JSON.stringify({ name: botName, instructions: botDescription, extra_info: extraInfo }),
            });

            if (response.ok) {
                setMessage('Bot registered successfully!');
                setBotName('');
                setBotDescription('');
                setExtraInfo('');
                onAdd(); // Trigger a refresh in FetchBotsList
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Failed to register bot. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred while registering the bot.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>Bot Name:</label>
                <input
                    type="text"
                    value={botName}
                    onChange={(e) => setBotName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea
                    value={botDescription}
                    onChange={(e) => setBotDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div>
                <label>Extra Info:</label>
                <textarea
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Register Bot</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default AddBotForm;
