import React, { useState, useEffect } from 'react';
import '../components/Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedEmployment, setSelectedEmployment] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false); 
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


   

    const navigate = useNavigate();

   

    const handleEmailChange = (event) => {
    const { value } = event.target;

    setEmail(value);

    if (emailPattern.test(value)) {
        setEmailError('Please enter a valid email address.');
    } else {
        setEmailError('');
    }

    // Clear the login failed message
    setLoginFailed(false);
    setLoginMessage('');
};

  
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const registrationData = JSON.parse(localStorage.getItem('registrationData'));
        if (
            registrationData &&
            email === registrationData.email &&
            password === registrationData.password 
        ) {
            // Successful login
            setLoginMessage('Login successful!');
            setLoginInProgress(true); // Set login in progress
            setTimeout(() => {
                setLoginInProgress(false); // Set login completed
                setLoginSuccess(true); // Set login success state
                navigate('/addImage');
            }, 3000); // Navigate after 3 seconds
        } else {
            setLoginMessage('Login failed. Please check your credentials.');
        }
    };
    


   
    return (
        <div className='container-root'>
            <div className='imageDiv'>
                <img className='image' src="https://i.pinimg.com/564x/d6/24/f9/d624f90758d7058c2ab0de4709caf03d.jpg" alt="" />
            </div>
            <div className='login'>
                <form onSubmit={handleSubmit} className='loginform' action="action_page.php" method="post">
                    <div className="email-input">
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            value={email}
                            onChange={handleEmailChange}
                            type="email"
                            placeholder="Enter Mail id"
                            name="email"
                            id='email'
                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            required
                        />
                        {/* {emailError && <p className="error-message">{emailError}</p>} */}
                        {loginFailed && <p className="login-failed">Login Failed. Please check your credentials.</p>}
                        {/* {emailError === '' && email !== '' && <p className="error-message">Please enter a valid email address.</p>} */}

                        <label htmlFor="password"><b>Password</b></label>
                        <div className='password-input'>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter Password"
                                name="password"
                                id='password'
                                minLength="7"
                                required
                            />
                            <span
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>


                      
                        {loginSuccess && <p className="login-success">Login Successful!</p>}

                        {loginInProgress ? (
                            <div className="loading-spinner"></div> // Display buffering GIF while login in progress
                        ) : (
                            <button type="submit">Login</button> // Display login button when not in progress
                        )}
                        <div className="login-message">
                            {loginMessage === 'Login successful!' ? (
                                <p className="login-success">{loginMessage}</p>
                            ) : (
                                <p className="login-failed">{loginMessage}</p>
                            )}
                        </div>
                        <div className='reg'>
                            <span className="psw">Didn't have an account?<Link to="/register"> Register</Link></span>
                        </div>
                        <div className="forgot">
                            <span className="psw">Forgot <Link to="/forgot-pswd">password?</Link></span>
                        </div>
                    </div>
                </form>
            </div>
          
        </div>

        
    );
}

export default Login;