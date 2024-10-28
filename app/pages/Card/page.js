"use client";
import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import ScrollToTop from "@/app/component/ScrollToTop/page";

const Card = () => {
  // Example course data
  const courses = [
    {
      title: "Web Development Bootcamp",
      details:
        "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
      image: "/image/card.jpeg", // Replace with actual image path
      price: 5000,
      discount: 50, 
    },
    {
      title: "Advanced JavaScript Course",
      details:
        "Deep dive into JavaScript concepts, ES6+, and advanced patterns.",
      image: "/image/card.jpeg", // Replace with actual image path
      price: 6000,
      discount: 60, // Discounted amount
    },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <h2>Your Cart</h2>
        </div>

        <div className={styles.cardContent}>
          <div className={styles.cardRowHeader}>
            <p className={styles.courseImage}>Course</p>
            <p className={styles.courseDetails}>Details</p>
            <p className={styles.coursePrice}>Price</p>
            <p className={styles.courseDiscount}>Discount</p>
            <p className={styles.courseTotal}>Total</p>
          </div>

          {/* Mapping over the courses array */}
          {courses.map((course, index) => {
            const totalPrice = course.price - course.discount;
            return (
              <div className={styles.cardRow} key={index}>
                <div className={styles.courseImage}>
                  <Image
                    src={course.image}
                    width={200}
                    height={200}
                    alt={`Course Image for ${course.title}`}
                  />
                </div>
                <p className={styles.courseDetails}>{course.details}</p>
                <p className={styles.coursePrice}>₹{course.price}</p>
                <p className={styles.courseDiscount}>₹{course.discount}</p>
                <p className={styles.courseTotal}>₹{totalPrice}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default Card;
