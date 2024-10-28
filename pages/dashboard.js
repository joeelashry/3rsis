// pages/dashboard.js
import Link from 'next/link'; // Importing Link for navigation
import withAuth from './components/withAuth';
import styles from '../styles/dashboard.module.css'; // Importing a CSS module for styles

const DashboardPage = () => {
    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.welcomeMessage}>Welcome to Your Dashboard!</h1>
            <p className={styles.description}>
                Explore your features and manage your settings.
            </p>
            <div className={styles.linkContainer}>
                <Link href="/login" className={styles.link}>
                    Log In
                </Link>
                <Link href="/signup" className={styles.link}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default withAuth(DashboardPage);
