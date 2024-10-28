"use client";

import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import { FaPhone, FaMapLocation } from "react-icons/fa6";
import ScrollToTop from "@/app/component/ScrollToTop/page";

const details = [
    { id: 1, img: "/image/contactImg2.png", icon: <CiMail />, info: "educationplatform@gmail.com" },
    { id: 2, img: "/image/contactImg2.png", icon: <FaPhone />, info: "+91 12345 67890" },
    { id: 3, img: "/image/contactImg2.png", icon: <FaMapLocation />, info: "123 Anna Salai street, North Side of Ganapathy Temple, Tamil Nadu." },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        message: "",
    });

    const [error, setError] = useState(""); // State for error messages
    const [success, setSuccess] = useState(""); // State for success messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(""); // Clear error on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, gender, message } = formData;

        // Validation checks
        if (!name || !email || !phone || !gender || !message) {
            setError("Please fill in all fields.");
            return;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            setError("Phone number must be 10 digits.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // If all validations pass
        console.log("Form submitted", formData);
        setSuccess("Your message has been sent successfully!");
        setError(""); // Clear error message

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            gender: "",
            message: "",
        });
    };

    return (
        <div className={styles.contactContainer}>
            <h2>
                <span>Contact</span> Us
            </h2>
            <div className={styles.contactImg}></div>

            <div className={styles.contactCards}>
                <div className={styles.contactRow}>
                    {details.map((detail) => (
                        <div key={detail.id} className={styles.contactCol}>
                            <div className={styles.contactCard}>
                                <div className={styles.contactHead}>
                                    <img src={detail.img} alt={`Contact ${detail.id}`} />
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4>{detail.icon}</h4>
                                    <p>{detail.info}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.contactForm}>
                <h3>Send Us a Mail</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputs}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputs}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <div className={styles.inputs}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone no"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    pattern="\d{10}" // Matches exactly 10 digits
                                    title="Please enter a valid 10-digit phone number."
                                />
                            </div>
                            <div className={styles.inputs}>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                    style={{color: "grey"}}
                                >
                                    <option value="" disabled>Select Your Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.textArea}>
                            <textarea
                                name="message"
                                placeholder="Text Here"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.submitButton}>
                            <button type="submit">
                                Send Mail
                            </button>
                        </div>

                        {error && <p className={styles.errorMessage}>{error}</p>}
                        {success && <p className={styles.successMessage}>{success}</p>}
                    </div>
                </form>
            </div>
            <ScrollToTop/>
        </div>
    );
};

export default Contact;
