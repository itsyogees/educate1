"use client";

import React, { useState } from 'react';
import styles from "./Signup.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();

        // Clear any existing errors
        setErrors({});

        // Check if all fields are filled
        if (!firstName || !lastName || !identifier || !phone || !password || !confirmPassword) {
            setErrors({ general: "All fields are required." });
            return;
        }

        // Password check
        if (password !== confirmPassword) {
            setErrors({ confirmPasswordError: "Passwords do not match." });
            return;
        }

        console.log("Signing up...", { firstName, lastName, identifier, phone, password });

        // Clear the inputs
        setFirstName('');
        setLastName('');
        setIdentifier('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setErrors({});
    };

    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupForm}>
                <h3>Let's get started</h3>
                <form onSubmit={handleSignup}>

                    <div className={styles.signupInputs}>
                        <label htmlFor="firstName">First Name <span className={styles.required}>*</span></label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className={styles.signupInputs}>
                        <label htmlFor="lastName">Last Name <span className={styles.required}>*</span></label>
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            required
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className={styles.signupInputs}>
                        <label htmlFor="email">Email <span className={styles.required}>*</span></label>
                        <input
                            id="email"
                            type="email"
                            value={identifier}
                            required
                            onChange={(e) => setIdentifier(e.target.value)}
                            pattern="\S+@\S+\.\S+"
                            title="Please enter a valid email address."
                        />
                    </div>

                    <div className={styles.signupInputs}>
                        <label htmlFor="phone">Phone <span className={styles.required}>*</span></label>
                        <input
                            id="phone"
                            type="text"
                            value={phone}
                            required
                            onChange={(e) => setPhone(e.target.value)}
                            pattern="^\d{10}$"
                            title="Please enter a valid 10-digit phone number."
                        />
                    </div>

                    <div className={styles.signupInputs}>
                        <label htmlFor="password">Password <span className={styles.required}>*</span></label>
                        <div className={styles.passwordContainer}>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                minLength="6"
                                title="Password must be at least 6 characters long."
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                    </div>

                    <div className={styles.signupInputs}>
                        <label htmlFor="confirmPassword">Confirm Password <span className={styles.required}>*</span></label>
                        <div className={styles.passwordContainer}>
                            <input
                                id="confirmPassword"
                                type={showPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                title="Please confirm your password."
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {errors.confirmPasswordError && <p className={styles.errorMessage}>{errors.confirmPasswordError}</p>}
                    </div>

                    {errors.general && <p className={styles.errorMessage}>{errors.general}</p>}

                    <div className={styles.btns}>
                        <button type="submit" className={styles.signupBtn}>Sign Up</button>
                        <h5>Already have an account?  <Link href='/component/SignIn'><span>Sign in</span></Link></h5>
                    </div>
                </form>
            </div>

            <div className={styles.signupImg}>
                <Image src="/image/signup.jpg" alt="Sign Up" width={100} height={100}/>
                <div className={styles.logoImg}>
                    <Image src="/image/logo2.png" alt="logo" width={100} height={100} />
                
                </div>
            </div>
        </div>
    );
}

export default Signup;
