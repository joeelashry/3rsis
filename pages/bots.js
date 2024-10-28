// components/BotsPage.js
import React from 'react';
import Sidebar from './components/Sidebar';

const BotsPage = () => {
    return (
        <div className="container">
            <Sidebar />
            <main className="content">
                <h1>Bots Page</h1>
                <form>
                    <div>
                        <label htmlFor="botName">Bot Name:</label>
                        <input type="text" id="botName" name="botName" required />
                    </div>
                    <div>
                        <label htmlFor="botDescription">Description:</label>
                        <textarea id="botDescription" name="botDescription" required></textarea>
                    </div>
                    <button type="submit">Register Bot</button>
                </form>
                {/* TODO: Connect to backend for bot registration */}
            </main>
        </div>
    );
};

export default BotsPage;
