import React, { useState } from 'react';
import './ForgotPswd.css'; // Correct the import statement

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); // Change resetMessage to message

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleResetPassword = (event) => {
        event.preventDefault();

        // Implement the logic to send a password reset link to the provided email
        // You can use APIs, services, or other methods for sending reset links
        
        setMessage('Password reset link sent to your email.');
        setEmail('');
    };

    return (
        <div className="forgot-password-container">
            <h2 className="forgot-password-title">Forgot Password</h2>
            {/* Input field */}
            <input
                className="forgot-password-input"
                type="email"
                placeholder="Enter your email"
                value={email} // Add value and onChange
                onChange={handleEmailChange}
            />
            {/* Reset button */}
            <button className="forgot-password-button" type="submit" onClick={handleResetPassword}>
                Reset Password
            </button>
            {/* Reset message */}
            {message && <p className="reset-message">{message}</p>} {/* Change resetMessage to message */}
        </div>
    );
};

export default ForgotPassword;
