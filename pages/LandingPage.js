// pages/LandingPage.js
import Link from 'next/link';
import styles from '../styles/landingPage.module.css';

const LandingPage = () => {
    return (
        <div className={styles.landingContainer}>
            <header className={styles.header}>
                <h1>Welcome to sui</h1>
                <p>Discover how sui can transform your business.</p>
            </header>

            <section className={styles.aboutSection}>
                <h2>About Us</h2>
                <p>[Brief company description goes here.]</p>
            </section>

            <section className={styles.appSection}>
                <h2>About the Application</h2>
                <p>[Describe the application and its core features.]</p>
            </section>

            <section className={styles.statsSection}>
                <h2>Our Impact</h2>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <h3>100K+</h3>
                        <p>Active Users</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>95%</h3>
                        <p>Customer Satisfaction</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>50+</h3>
                        <p>Countries Reached</p>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <Link href="/dashboard" className={styles.startButton}>
                    Start Here
                </Link>
            </footer>
        </div>
    );
};

export default LandingPage;
