import React from 'react'
import styles from "./RelatedCourses.module.scss"
import { FaPhone } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import Image from 'next/image';

import { FaChartLine, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const RelatedCourses = () => {
    const cards = [
        {
          img: "/image/img1.jpg",
          amt: "₹5000",
          rating: 4.5,
          title:
            "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
        },
        {
          img: "/image/img2.png",
          amt: "₹5000",
          rating: 4.0,
          title:
            "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
        },
        {
          img: "/image/img3.jpg",
          amt: "₹5000",
          rating: 3,
          title:
            "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
        },
        {
          img: "/image/img1.jpg",
          amt: "₹5000",
          rating: 4.0,
          title:
            "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
        },
       
      ];
      const getStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];
    
        for (let i = 0; i < fullStars; i++) {
          stars.push(<FaStar key={i} />);
        }
    
        if (halfStar) {
          stars.push(<FaStarHalfAlt key="half" />);
        }
    
        while (stars.length < 5) {
          stars.push(<FaRegStar key={stars.length} />);
        }
    
        return stars;
      };
  return (
    <div className={styles.RelatedCourses}>
        <div className={styles.RelatedCoursesContainer}>
            <div className={styles.RelatedCoursesHead}>
                <p>More Similar Courses</p>
                <h2>Related Courses</h2>
            </div>
            <div className={styles.RelatedCoursesContent}>
            {cards.map((card, index) => (
                <div key={index} className={styles.cardItem}>
                  <a href="#cardlink" className={styles.cardLink}>
                    <Image
                      src={card.img}
                      alt="Card"
                      width={300}
                      height={200}
                      className={styles.cardImage}
                    />
                    <div className={styles.sliderCard}>
                      <div className={styles.stars}>
                        {getStars(card.rating)}
                      </div>
                      <h2 className={styles.cardTitle}>{card.title}</h2>
                    </div>
                    <div className={styles.cardDoc}>
                      <p>
                        <FaFileAlt />
                        View Details
                      </p>
                      <p>
                        <FaChartLine />
                        Beginner
                      </p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.amount}>
                      <p>{card.amt}</p>
                      <button className={styles.amtBtn}>Add to Card</button>
                    </div>
                  </a>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default RelatedCourses