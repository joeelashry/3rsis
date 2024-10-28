// components/ChatsPage.js
import React from 'react';
import Sidebar from './components/Sidebar';

const ChatsPage = () => {
    return (
        <div className="container">
            <Sidebar />
            <main className="content">
                <h1>Chats Page</h1>
                <p>List of chats handled by your bots will be displayed here.</p>
                {/* TODO: Connect to backend to fetch and display chats */}
            </main>
        </div>
    );
};

export default ChatsPage;
