import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '@/store/tokenSlice';
import { useRouter } from 'next/router';
import styles from '@/styles/auth.module.css'; // Adjust this path if necessary


export const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('https://distinctly-creative-starfish.ngrok-free.app/token/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Invalid login credentials');
            const { token } = await response.json();
            dispatch(setToken(token));           // Save token in Redux
            localStorage.setItem('authToken', token); // Save token in localStorage
            router.push('/bots');           // Redirect to protected route

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            <label>Email:</label>
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className={styles.inputField}
            />
            <label>Password:</label>
            <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
                className={styles.inputField}
            />
            <button type="submit" className={styles.submitButton}>Login</button>
            {error && <p className={styles.errorText}>{error}</p>}
        </form>
    );
};

export default LoginForm; // Ensure it's the default export
