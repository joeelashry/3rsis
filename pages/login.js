// pages/login.js
import Link from 'next/link';
import LoginForm from './components/auth/LoginForm';
import styles from '@/styles/auth.module.css'; // Adjust this path if necessary


const LoginPage = () => {
    return (
        <div className={styles.authContainer}>
            <h1>Login to Access Your Dashboard</h1>
            <LoginForm />
            <p>
                Do not have an account? 
                <Link href="/signup">
                    Sign up here
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
