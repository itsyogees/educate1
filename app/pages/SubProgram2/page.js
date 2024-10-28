"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./SubProgram2.module.scss";

const Content = () => {
    const [flippedCardId, setFlippedCardId] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    const cardDetails = [
        { 
            id: 1,
            title: "Empowering Learners",
            information: "At our educational platform, we believe in empowering every learner with the tools they need to succeed. Our courses are designed to be inclusive, engaging, and accessible to all."
        },
        {
            id: 2,
            title: " Diverse Course ",
            information: "Explore a wide range of courses across various fields, tailored to meet your interests and goals. From professional development to personal enrichment, we have something for everyone.", 
        },
        {
            id: 3,
            title: "Expert Instructors",
            information: "Learn from experienced professionals who are passionate about teaching and sharing their knowledge. Our instructors bring real-world experience and insights to the classroom."
        },
        {
            id: 4,
            title: " Interactive Learning ",
            information: "Engage in a dynamic learning experience that goes beyond traditional methods. Our platform features interactive tools, discussions, and collaborative projects to enhance your understanding.", 
        },
        {
            id: 5,
            title: " Flexible Learning",
            information: "Life can be busy, which is why we offer flexible learning options that fit your schedule. Access our courses anytime, anywhere, allowing you to learn at your own pace.", 
        },
        {
            id: 6,
            title: "Community Support",
            information: "Join a vibrant community of learners who are just as passionate about education as you are. Our platform fosters connections and encourages collaboration through forums and group discussions.", 
        },
    ];

    // Function to handle card click
    const handleCardClick = (card) => {
        // If the clicked card is already flipped, show the larger screen
        if (flippedCardId === card.id) {
            setSelectedCard(card);
        } else {
            setFlippedCardId(card.id); // Flip the card
        }
    };

    const closeSelectedCard = () => {
        setSelectedCard(null); // Close the larger view
        setFlippedCardId(null); // Reset flipped card state
    };

    return (
        <div className={styles.contentContainer}>
            <div className={styles.contentImg}>
                <img src="/image/events.jpeg" width={200} height={200} alt="Events" />
            </div>
            
            <h3>Your Path to Personalized and Engaging Learning</h3>
            <div className={styles.contentDetails}>
                <div className={styles.contentIntroduction}>
                    <p>
                        We believe that education should be accessible, engaging, and tailored to every learner's unique needs.
                        Our platform brings together a vast range of courses, expert instructors, and interactive learning tools designed to empower you on your educational journey.
                        Whether you're a student, professional, or lifelong learner, we provide the resources to help you achieve your goals.
                    </p>
                </div>
                <div className={styles.contentData}>
                    <p>
                        Our platform allows you to engage directly with expert instructors, participate in vibrant discussions, and collaborate with peers from around the world. 
                        You will also receive exclusive access to members-only content, special offers, and timely notifications on new course launches and updates. 
                        Whether you are advancing your career, mastering a new skill, or exploring personal interests, registration ensures you get the most out of your learning journey with us.
                    </p>
                    <button>Register Now</button>
                </div>
            </div>

            {/* Flip Cards */}
            <div className={styles.flipCards}>
                <div className={styles.cardGrid}>
                    {cardDetails.map((card) => (
                        <div 
                            key={card.id} 
                            className={styles.contentcontainer} 
                            onClick={() => handleCardClick(card)}
                        >
                            <div className={`${styles.cards} ${flippedCardId === card.id ? styles.flipped : ''}`}>
                                <div className={styles.frontCard}>
                                    <img 
                                        //src="/image/news.png" 
                                        src="/image/video.png" 
                                        width={100}
                                        height={100}
                                        alt="Card Front"
                                    />
                                </div>
                                <div className={styles.backCard}>
                                    <h1>{card.title}</h1>
                                    <p>{card.information}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Display selected card information in larger format */}
            {selectedCard && (
                <div className={styles.selectedCard}>
                    <h1>{selectedCard.title}</h1>
                    <p>{selectedCard.information}</p>
                    <button onClick={closeSelectedCard}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Content;