// components/AnalysisPage.js
import React from 'react';
import Sidebar from './components/Sidebar';


const AnalysisPage = () => {
    return (
        <div className="container">
            <Sidebar />
            <main className="content">
                <h1>Analysis Page</h1>
                <p>Analytics such as message counts and other statistics will be shown here.</p>
                {/* TODO: Connect to backend to fetch and display analytics */}
            </main>
        </div>
    );
};

export default AnalysisPage;
