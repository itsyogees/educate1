"use client";

import React, { useState } from 'react';
import styles from "./Forgot.module.scss";

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!email) {
            setError('Email is required.');
            return;
        }

        if (!emailPattern.test(email)) {
            setError('Please enter a valid Gmail address.');
            return;
        }

        console.log(email);
        setEmail('');
        setError('');
    };

    return (
        <div className={styles.forgotContainer}>
            <div className={styles.forgotForm}>
                <form onSubmit={handleSubmit}>
                    <h3>Forgot Password</h3>
                    <div className={styles.forgotInputs}>
                        <label htmlFor="email">Enter registered email ID to receive a link to reset the password</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="username@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                            title="Please enter a valid Gmail address."
                        />
                        {error && <span className={styles.error}>{error}</span>}
                    </div>
                    <div className={styles.btns}>
                        <button type="submit" className={styles.forgotBtn}>Request the code</button>
                        <button type="button" className={styles.cancelBtn} onClick={() => setEmail('')}>Cancel</button>
                    </div>
                </form>
            </div>
            <div className={styles.forgotImg}>
                {/* <img src="/image/forgot.jpg" alt="Forgot Password"/> */}
                <div className={styles.logoImg}>
                    {/* <img src="/image/logo2.png" alt="logo" /> */}
                </div>
            </div>
        </div>
    );
}

export default Forgot;
