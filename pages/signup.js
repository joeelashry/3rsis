// pages/signup.js
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SignupForm from './components/auth/SignupForm'; // Ensure the path is correct
import Link from 'next/link';
import styles from '@/styles/auth.module.css'; // Adjust this path if necessary

const SignupPage = () => {
    const access = useSelector((state) => state.access.value); // Use access instead of token
    const router = useRouter();

    useEffect(() => {
        if (access) {
            router.replace('/bots'); // Redirect if user is already logged in
        }
    }, [access, router]);

    return (
        <div className={styles.authContainer}>
            <h1>Create Your Account</h1>
            <SignupForm />
            <p>
                Already have an account? 
                <Link href="/login"> Log in here</Link>
            </p>
        </div>
    );
};

export default SignupPage;
