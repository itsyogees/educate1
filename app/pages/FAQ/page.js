
"use client"

import React, { useState } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md'; 
import styles from "./Faq.module.scss";
import ScrollToTop from "@/app/component/ScrollToTop/page";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },

        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        
    ];

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <div className={styles.questionContainer}>
                <div className={styles.qaBg}>
                <div className={styles.qnImg}></div>
                </div>
                
                <div className={styles.qnHead}>
                    <h3>Frequently Asked <span>Questions</span></h3>
                    <p>Questions you might ask about product and services</p>
                </div>
            </div>

            <div className={styles.questionsContainer}>
                {questions.map((item, index) => (
                    <div key={index} className={styles.question}>
                        <button onClick={() => toggleFAQ(index)}>
                            <span>{item.question}</span>
                            <MdKeyboardArrowDown className={`${styles.arrow} ${activeIndex === index ? styles.rotate : ''}`} />
                        </button>
                        <p className={`${styles.answer} ${activeIndex === index ? styles.show : ''}`}>{item.answer}</p>
                    </div>
                ))}
            </div>
            <ScrollToTop/>
        </div>
    );
};

export default Faq;
