"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from "./Verify.module.scss";

const Verify = () => {
    const [code, setCode] = useState(Array(6).fill(''));
    const [timer, setTimer] = useState(120); // 2 minutes in seconds
    const [isCodeVerified, setIsCodeVerified] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleInputChange = (index, value) => {
        if (isNaN(value) || value.length > 1) return; // Allow only single digits
        const newCode = [...code];
        newCode[index] = value;

        // Move focus to the next input
        if (value) {
            if (index < 5) {
                inputRefs.current[index + 1].focus();
            }
        } else {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }

        setCode(newCode);
    };

    const handleVerify = () => {
        if (code.every(val => val !== '')) { // Check if all inputs are filled
            const fullCode = code.join('');
            console.log('Code Verified:', fullCode);
            setCode(Array(6).fill('')); // Clear the inputs after verification
            setIsCodeVerified(true);
        } else {
            console.log('Please fill all inputs.');
        }
    };

    const handleResend = () => {
        console.log('Resend button clicked');
        setCode(Array(6).fill(''));
        setTimer(120); // Reset timer
        setIsCodeVerified(false);
    };

    return (
        <div className={styles.verifyContainer}>
            <div className={styles.verifyMail}>
                <div className={styles.verificationBox}>
                    <h3>Code Verification</h3>
                    
                        <p>Enter OTP(One TIme Password) send to user@gmail.com</p>
                      
                    <div className={styles.inputContainer}>
                       
                        {code.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                maxLength="1"
                                ref={el => inputRefs.current[index] = el}
                                className={styles.verificationInput}
                            />
                        ))}
                    </div>
                    <p className={styles.verifyTime}>{Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)}</p>
                </div>

                <div className={styles.btns}>
                    <button
                        type="button"
                        className={styles.verifyBtn}
                        onClick={handleVerify}
                        disabled={isCodeVerified || timer <= 0}
                    >
                        Verify the code
                    </button>
                    <button
                        type="button"
                        className={styles.resendBtn}
                        onClick={handleResend}
                        disabled={timer > 0}
                    >
                        Resend the code
                    </button>
                </div>
            </div>

            <div className={styles.verifyImg}>
                {/* <img src="image/verify.jpg" alt="Sign In" /> */}
                <div className={styles.logoImg}>
                    {/* <img src="image/logo2.png" alt="logo" /> */}
                </div>
            </div>
        </div>
    );
};

export default Verify;
