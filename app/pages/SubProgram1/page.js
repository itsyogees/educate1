"use client";

import React, { useState } from "react"; 
import styles from "./SubProgram1.module.scss";
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";

const SubProgram1 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const questions = [
        {
            question: "Lorem ipsum dolor sit amet",
            answer: "Lorem ipsum dolor sit amet"
        },
        {
            question: "Lorem ipsum dolor sit amet",
            answer: "Lorem ipsum dolor sit amet"
        },
        {
            question: "Lorem ipsum dolor sit amet",
            answer: "Lorem ipsum dolor sit amet"
        },
        {
            question: "Lorem ipsum dolor sit amet",
            answer: "Lorem ipsum dolor sit amet"
        },
        // Add other questions as needed
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.SubProgram1}>
            <div className={styles.SubProgramBanner}>
                <img src="/image/program1.jpg" alt="Program Banner" />
            </div>
            <div className={styles.SubProgramHead}>
                <h2>DISCOVER:</h2>
                <p>Start Early</p>
                <span>for guided exploration</span>
            </div>
            <div className={styles.SubProgramContent}>
                <h1>About the program</h1>
                <p>Personal Mentorship Program for 9th graders</p>
                <div className={styles.SubProgramSubContent}>
                    <p>
                        Our objective with 9th-grade students is to focus on the breadth and depth. 
                        We provide exposure to a wide spectrum of ideas, identify their areas of 
                        interest through structured intellectual exploration, and understand their capacity to excel.
                    </p>
                </div>
            </div>
            <div className={styles.SubProgramQuest}>
                <div className={styles.questionsContainer}>
                    {questions.map((item, index) => (
                        <div key={index} className={styles.question}>
                            <button onClick={() => toggleFAQ(index)}>
                                <span>{item.question}</span>
                                {/* Conditionally render IoArrowDownCircleOutline or IoArrowUpCircleOutline */}
                                {activeIndex === index ? (
                                    <IoArrowUpCircleOutline className={styles.arrow} />
                                ) : (
                                    <IoArrowDownCircleOutline className={styles.arrow} />
                                )}
                            </button>
                            <p className={`${styles.answer} ${activeIndex === index ? styles.show : ''}`}>
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubProgram1;
