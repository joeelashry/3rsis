import { useState } from 'react';
import styles from '../styles/whatsapp.module.css';

const WhatsAppPage = () => {
    const [formData, setFormData] = useState({
        userName: '',
        phoneNumber: '',
        accessToken: '',
        phoneId: ''
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

    const validateForm = () => {
        let formErrors = {};
        const phoneNumberPattern = /^0(10|11|12)[0-9]{8}$/;

        if (!formData.userName.trim()) formErrors.userName = "User Name is required.";
        if (!phoneNumberPattern.test(formData.phoneNumber)) {
            formErrors.phoneNumber = "Phone number must start with 010, 011, or 012 and be followed by 8 digits.";
        }
        if (!formData.accessToken.trim()) formErrors.accessToken = "Access Token is required.";
        if (!formData.phoneId.trim()) formErrors.phoneId = "Phone ID is required.";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/whatsapp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if (response.ok) {
                setMessage({ text: 'Data stored successfully!', type: 'success' });
                setFormData({ userName: '', phoneNumber: '', accessToken: '', phoneId: '' });
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
        <div className="container">
            <h1>WhatsApp Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        aria-invalid={!!errors.userName}
                        aria-describedby="userNameError"
                        required
                    />
                    {errors.userName && <p id="userNameError" className="error-text">{errors.userName}</p>}
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="010xxxxxxxx"
                        aria-invalid={!!errors.phoneNumber}
                        aria-describedby="phoneNumberError"
                        required
                    />
                    {errors.phoneNumber && <p id="phoneNumberError" className="error-text">{errors.phoneNumber}</p>}
                </div>
                <div>
                    <label htmlFor="accessToken">Access Token:</label>
                    <input
                        type="text"
                        id="accessToken"
                        name="accessToken"
                        value={formData.accessToken}
                        onChange={handleChange}
                        aria-invalid={!!errors.accessToken}
                        aria-describedby="accessTokenError"
                        required
                    />
                    {errors.accessToken && <p id="accessTokenError" className="error-text">{errors.accessToken}</p>}
                </div>
                <div>
                    <label htmlFor="phoneId">Phone Number ID:</label>
                    <input
                        type="text"
                        id="phoneId"
                        name="phoneId"
                        value={formData.phoneId}
                        onChange={handleChange}
                        aria-invalid={!!errors.phoneId}
                        aria-describedby="phoneIdError"
                        required
                    />
                    {errors.phoneId && <p id="phoneIdError" className="error-text">{errors.phoneId}</p>}
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Save WhatsApp Bot Info'}
                </button>
            </form>
            {message && <p style={{ color: message.type === 'success' ? 'green' : 'red' }}>{message.text}</p>}
        </div>
    );
};

export default WhatsAppPage;
