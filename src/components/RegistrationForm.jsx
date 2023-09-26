import React, { useState } from 'react';

import img1 from '../assets/reg-img.jpg'
import '../components/RegistrationForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";




const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: '',
       
        showPassword: false,
    });
    const [registrationMessage, setRegistrationMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)

   



    const togglePasswordVisibility = () => {
        setFormData((prevData) => ({
            ...prevData,
            showPassword: !prevData.showPassword,
        }));
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (
            formData.Name === '' ||
            formData.email === '' ||
            formData.number === '' ||
            formData.password === '' ||
            formData.confirmPassword === ''
           
        ) {
            setRegistrationMessage('Please fill in all the required fields.');
            return;
        }
    
        if (formData.password !== formData.confirmPassword) {
            setRegistrationMessage('Passwords do not match');
            return;
        }
    
        // Store form data in local storage
        localStorage.setItem('registrationData', JSON.stringify(formData));
        setRegistrationMessage('Registration successful!');
        setFormData({
            Name: '',
            email: '',
            number: '',
            password: '',
            confirmPassword: '',
            
            showPassword: false,
        });
    
        // Show success alert
        await MySwal.fire({
            title: <strong>Registration Successful</strong>,
            html: <i></i>,
            icon: 'success',
        });
    };
    


    




    const handleUserTypeChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            userType: event.target.value,
        }));
    };


    return (


        <div className='reg-container'>
            <div className='imgdiv'>
                <img className='img' src={img1} />
            </div>

            <div className="regcont">


                {/* <h2>Registration Form</h2> */}
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        value={formData.Name}
                        onChange={handleInputChange}
                        onFocus={() => setRegistrationMessage('')} 
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setRegistrationMessage('')} 
                        required
                    />
                    <input
                        type="text"
                        name="number"
                        placeholder="mobile number"
                        value={formData.number}
                        onChange={handleInputChange}
                        onFocus={() => setRegistrationMessage('')} 
                        required
                    />
                    <div className='password-field'>
                        <input
                            type={formData.showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleInputChange}
                            onFocus={() => setRegistrationMessage('')} 
                            minLength='8'
                            required
                        />
                        <span
                            className='password-toggle'
                            type='button'
                            onClick={togglePasswordVisibility}
                            
                        >
                            <FontAwesomeIcon icon={formData.showPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>

                    <input
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onFocus={() => setRegistrationMessage('')} 
                        required
                        

                    />

                  


                    {/* <Link to={'/'}> */}
                        <button type="submit" onClick={async() => {
                            if (   formData.Name &&
                                formData.email &&
                                formData.number &&
                                formData.password &&
                                formData.confirmPassword &&
                                formData.otp ) {
                                    if (formData.password !== formData.confirmPassword) {
                                        setRegistrationMessage('Passwords do not match');
                                    } else {
                                        // Store form data in local storage
                                        localStorage.setItem('registrationData', JSON.stringify(formData));
                                        setRegistrationMessage('Registration successful!');
                                        navigate("/");
                                        await MySwal.fire({
                                            title: <strong>Registration Successful</strong>,
                                            html: <i></i>,
                                            icon: 'success'
                                        });
                                    }
                                }
                            }}
      
                           
                        >Register</button>

                    {/* </Link> */}



                    <span className="psw">Already have an account?<Link to="/"> Login</Link></span>




                    <div className={`registration-message ${formData.password !== formData.confirmPassword ? 'danger' : ''}${registrationMessage === 'Registration successful!' ? ' success' : ''}`}>
                        {registrationMessage}



                    </div>
                </form>
            </div>

        </div>
    );
};

export default RegistrationForm