// pages/bots/BotsPage.js
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import AddBotForm from './components/AddBotForm';
import FetchBotsList from './components/FetchBotsList';
import styles from '../styles/botsPage.module.css';
import React from 'react';


const BotsPage = () => {
    const refreshBots = () => {
        // This can be implemented to trigger a refresh in FetchBotsList
    };

    return (
        <Layout>
            <div className={styles.container}>
                <Sidebar />
                <main className={styles.content}>
                    <h1 className={styles.h1}>Bots Page</h1>
                    <section className={styles.bot}>
                        <AddBotForm onAdd={refreshBots} />
                        <FetchBotsList />
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export default BotsPage;
