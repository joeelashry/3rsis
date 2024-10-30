// pages/whatsapp.js
import { useState } from 'react';
import styles from '../styles/whatsapp.module.css';
import Layout from './components/Layout';

const WhatsAppPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        access_token: '',
        phone_number_id: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({ ...errors, [name]: '' }); // Clear errors on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsSubmitting(true);
        try {
            const jwtToken = localStorage.getItem('access'); // Assumes the JWT is stored under this key
            const response = await fetch('https://api.juren.tech/whatsapp-numbers/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}` // Include JWT token here
                },
                body: JSON.stringify({
                    name: formData.name,
                    number: formData.number,
                    access_token: formData.access_token,
                    phone_number_id: formData.phone_number_id
                })
            });
            const data = await response.json();

            if (response.ok) {
                setMessage({ text: 'Data stored successfully!', type: 'success' });
                setFormData({ name: '', number: '', access_token: '', phone_number_id: '' });
            } else {
                setMessage({ text: data.message || 'An error occurred.', type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'An error occurred while sending data.', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.whatsappForm}>
                    <h1 className={styles.h1}>WhatsApp Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                aria-invalid={!!errors.name}
                                aria-describedby="nameError"
                                required
                            />
                            {errors.name && <p id="nameError" className={styles.errorText}>{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="number">Phone Number:</label>
                            <input
                                type="text"
                                id="number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                placeholder="010xxxxxxxx"
                                className={styles.input}
                                aria-invalid={!!errors.number}
                                aria-describedby="numberError"
                                required
                            />
                            {errors.number && <p id="numberError" className={styles.errorText}>{errors.number}</p>}
                        </div>
                        <div>
                            <label htmlFor="access_token">Access Token:</label>
                            <input
                                type="text"
                                id="access_token"
                                name="access_token"
                                value={formData.access_token}
                                onChange={handleChange}
                                className={styles.input}
                                aria-invalid={!!errors.access_token}
                                aria-describedby="accessTokenError"
                                required
                            />
                            {errors.access_token && <p id="accessTokenError" className={styles.errorText}>{errors.access_token}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone_number_id">Phone Number ID:</label>
                            <input
                                type="text"
                                id="phone_number_id"
                                name="phone_number_id"
                                value={formData.phone_number_id}
                                onChange={handleChange}
                                className={styles.input}
                                aria-invalid={!!errors.phone_number_id}
                                aria-describedby="phoneIdError"
                                required
                            />
                            {errors.phone_number_id && <p id="phoneIdError" className={styles.errorText}>{errors.phone_number_id}</p>}
                        </div>
                        <button type="submit" className={styles.button} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Save WhatsApp Bot Info'}
                        </button>
                    </form>
                    {message && (
                        <p className={`${styles.message} ${message.type === 'success' ? styles.successText : styles.errorText}`}>
                            {message.text}
                        </p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default WhatsAppPage;
