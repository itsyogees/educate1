"use client";

import React, { useState } from 'react';
import styles from "./Password.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
        passwordError: '',
        confirmPasswordError: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        const newErrors = {};

        // Password validation
        if (password.length < 8) {
            newErrors.passwordError = "Password must be at least 8 characters long.";
            valid = false;
        } else if (!/[A-Z]/.test(password)) {
            newErrors.passwordError = "Password must contain at least one uppercase letter.";
            valid = false;
        } else if (!/[a-z]/.test(password)) {
            newErrors.passwordError = "Password must contain at least one lowercase letter.";
            valid = false;
        } else if (!/[0-9!@#$%^&*]/.test(password)) {
            newErrors.passwordError = "Password must contain at least one number or special character.";
            valid = false;
        } else {
            newErrors.passwordError = "";
        }

        // Confirm Password validation
        if (password !== confirmPassword) {
            newErrors.confirmPasswordError = "Passwords do not match.";
            valid = false;
        } else {
            newErrors.confirmPasswordError = "";
        }

        setErrors(newErrors);

        if (valid) {
            console.log("Creating New Password...", { password });

            // Clear the inputs
            setPassword('');
            setConfirmPassword('');
            setErrors({ 
                passwordError: '', 
                confirmPasswordError: '' 
            });
        }
    }

    return (
        <div className={styles.passwordContainer}>
            <div className={styles.passwordForm}>
                <form onSubmit={handleSubmit}>
                    <h3>Create New Password</h3>
                    <p>Your new password must be different from your old password.</p>

                    <div className={styles.passwordInputs}>
                        <div className={styles.passwordinputContainer}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                placeholder="Password"
                                className={errors.passwordError ? "input-error" : ""}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrors(prev => ({ ...prev, passwordError: "" }));
                                }}
                                required
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {errors.passwordError && <p className={styles.errorMessage}>{errors.passwordError}</p>}
                    </div>

                    <div className={styles.passwordInputs}>
                        <div className={styles.passwordinputContainer}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                className={errors.confirmPasswordError ? "input-error" : ""}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setErrors(prev => ({ ...prev, confirmPasswordError: "" }));
                                }}
                                required
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {errors.confirmPasswordError && <p className={styles.errorMessage}>{errors.confirmPasswordError}</p>}
                    </div>

                    <div className={styles.btns}>
                        <button type="submit" className={styles.submitBtn}>Submit</button>
                        <button type="button" className={styles.cancelBtn} onClick={() => {
                            setPassword('');
                            setConfirmPassword('');
                            setErrors({ 
                                passwordError: '', 
                                confirmPasswordError: '' 
                            });
                        }}>Cancel</button>
                    </div>
                </form>
            </div>
            <div className={styles.passwordImg}>
                {/* <img src="image/password.png" alt="password"/> */}
                <div className={styles.logoImg}>
                    {/* <img src="image/logo2.png" alt="logo" /> */}
                </div>
            </div>
        </div>
    );
}

export default Password;
