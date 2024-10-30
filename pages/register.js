import Link from 'next/link';
import withAuth from './components/withAuth';
import Layout from './components/Layout';
import styles from '@/styles/dashboard.module.css';

const dashboard = () => {
    return (
        <Layout> {/* Wrap content in Layout for sidebar */}
            <div className={styles.dashboardContainer}>
                <h1 className={styles.welcomeMessage}>Welcome to Your Dashboard!</h1>
                <p className={styles.description}>
                    Explore your features and manage your settings.
                </p>
                <div className={styles.linkContainer}>
                    <Link href="/login" className={styles.link}>Log In</Link>
                    <Link href="/signup" className={styles.link}>Sign Up</Link>
                </div>
            </div>
        </Layout>
    );
};

export default withAuth(DashboardPage);
