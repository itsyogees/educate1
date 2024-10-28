"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector for user state
import styles from "./CoursesDetails.module.scss";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import ScrollToTop from "@/app/component/ScrollToTop/page";
import RelatedCourses from "../../RelatedCourses/page";
import Link from 'next/link'; // Import Link for navigation

const CoursesDetails = () => {
  const user = useSelector((state) => state.user.userInfo); // Access user state
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const questions = [
    {
      id: 1,
      title: "Introduction to Web Development",
      duration: "4 hours",
      lessons: [
        { title: "Introduction and Setup", duration: "30 mins", isPreview: true },
        { title: "Overview of Web Technologies", duration: "40 mins", isPreview: false },
        { title: "Setting Up a Development Environment", duration: "50 mins", isPreview: false },
        { title: "Basic HTML and CSS", duration: "60 mins", isPreview: false },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      duration: "12 hours",
      lessons: [
        { title: "HTML Fundamentals", duration: "1 hour", isPreview: true },
        { title: "CSS Essentials", duration: "1 hour 30 mins", isPreview: false },
        { title: "Responsive Web Design", duration: "2 hours", isPreview: false },
        { title: "JavaScript Basics", duration: "1 hour 30 mins", isPreview: false },
        { title: "Working with DOM", duration: "2 hours", isPreview: false },
        { title: "Introduction to React", duration: "3 hours", isPreview: true },
        { title: "State Management with Redux", duration: "1 hour", isPreview: false },
      ],
    },
    // Additional course content...
  ];

  const reviews = [
    {
      id: 1,
      userName: "Elisa Joe",
      date: "Nov 9, 2023",
      rating: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor elit, sed do eiusmod tempor ut labore Lorem ipsum dolor sit eiusmod tempor ut labore Lorem",
      profileImage: "/image/reviewProfile.png"
    },
    {
      id: 2,
      userName: "John Doe",
      date: "Oct 15, 2023",
      rating: 4,
      content: "Another review content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum.",
      profileImage: "/image/reviewProfile.png"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.coursesDetails}>
      <div className={styles.coursesDetailsBanner}></div>
      <div className={styles.coursesDetailsContainer}>
        <div className={styles.coursesDetailsContents}>
          <div className={styles.coursesDetailsHead}>
            <p>Web Development</p>
            <h2>Full Stack Web Development</h2>
          </div>
          <div className={styles.coursesDetailsContent}>
            <p>
              A comprehensive course that covers the fundamentals and advanced
              concepts of web development, from front-end to back-end
              technologies.
            </p>
          </div>
          <div className={styles.coursesDetailsBtn}>
            {user ? (
              <button>Buy Now</button> // Button when signed in
            ) : (
              <Link href="/component/SignIn">
                <button className={styles.buyButton}>Buy Now</button> 
              </Link>
            )}
          </div>
        </div>
        <div className={styles.coursesDetailsCard}>
          <img src="/image/coures1.jpeg" width={200} height={200} />
          <div className={styles.cardInfo}>
            <p className={styles.cardInfo1}>Free</p>
            <p className={styles.cardInfo2}>$99.00 Free50% off</p>
          </div>
          <div className={styles.infoBtns}>
            <button>
              <RiShoppingCartLine />
              Add Cart
            </button>
            <button>
              <FaRegHeart />
              Add Watchlist
            </button>
          </div>
          <div className={styles.shortInfo}>
            <h2>Short Info</h2>
            <div className={styles.shortInfoContents}>
              <div className={styles.shortInfoContainer}>
                <div className={styles.shortInfoContent}>
                  <label htmlFor="">Enrolled </label>
                  <span>:</span>
                  <p>32 students</p>
                </div>
                <div className={styles.shortInfoContent}>
                  <label htmlFor="">Duration </label>
                  <span>:</span>
                  <p>29 hours</p>
                </div>
                <div className={styles.shortInfoContent}>
                  <label htmlFor="">Level </label>
                  <span>:</span>
                  <p>Beginner</p>
                </div>
                <div className={styles.shortInfoContent}>
                  <label htmlFor="">Chapters </label>
                  <span>:</span>
                  <p>32 students</p>
                </div>
              </div>
            </div>
            <div className={styles.shortInfoBtn}>
              <button>
                <FaShare /> Share
              </button>
            </div>
          </div>
        </div>

        <div className={styles.couresCards}>
          <div className={styles.heroTabsContainer}>
            <div className={styles.heroTabs}>
              {["Overview", "Course Content", "Instructor", "Review"].map(
                (section, index) => (
                  <div
                    key={index}
                    className={`${styles.tab} ${
                      activeTab === index + 1 ? styles.active : ""
                    }`}
                    onClick={() => handleTabClick(index + 1)}
                  >
                    {section}
                  </div>
                )
              )}
            </div>
          </div>
          <div className={styles.heroPageContent}>
            {activeTab === 1 && (
              <div className={styles.heroTabsCard}>
                <div className={styles.heroPageTest}>
                  <h2>Web Development Course Overview</h2>
                  <p>
                    The "Full Stack Web Development" course is designed to
                    provide comprehensive training on building modern web
                    applications, covering both front-end and back-end
                    technologies. This course is ideal for aspiring web
                    developers who want to master skills in creating dynamic,
                    responsive, and feature-rich websites.
                  </p>
                </div>
                <div className={styles.heroPageTest}>
                  <h2>Course Objectives:</h2>
                  <ul>
                    <li>
                      Equip learners with a strong foundation in front-end
                      development using HTML, CSS, JavaScript, and React.
                    </li>
                    <li>
                      Introduce back-end development concepts with Node.js,
                      Express.js, and MongoDB.
                    </li>
                    <li>
                      Cover essential topics like RESTful API development,
                      authentication, and authorization.
                    </li>
                    <li>
                      Provide hands-on experience through a full-fledged project
                      that integrates front-end and back-end technologies.
                    </li>
                    <li>
                      Prepare learners for real-world challenges with industry
                      best practices, testing, and deployment.
                    </li>
                  </ul>
                </div>
                <div className={styles.heroPageTest}>
                  <h2>Key Features:</h2>
                  <ol>
                    <li>
                      <span>Interactive Lessons:</span> Includes step-by-step
                      tutorials, coding challenges, and project-based learning
                      to reinforce concepts.
                    </li>
                    <li>
                      <span>Industry-Standard Tools and Frameworks:</span>
                      Covers React, Redux, Node.js, Express.js, and MongoDB.
                    </li>
                    <li>
                      <span>Real-World Projects:</span> Students build complete
                      applications, from setup and planning to deployment.
                    </li>
                    <li>
                      <span>Expert Instructors:</span> Experienced professionals
                      guide you through the learning journey.
                    </li>
                    <li>
                      <span>Preview Lessons:</span> Free preview lessons are
                      available for select topics to help students get a taste
                      of the course content.
                    </li>
                  </ol>
                </div>
                <div className={styles.heroPageTest}>
                  <h2>Course Content Highlights:</h2>
                  <ul>
                    <li>
                      <span>Introduction to Web Development:</span> Learn about
                      web technologies and set up a development environment.
                    </li>
                    <li>
                      <span>Frontend Development:</span> Master HTML, CSS, and
                      JavaScript fundamentals, along with advanced topics like
                      React and Redux.
                    </li>
                    <li>
                      <span>Backend Development:</span> Explore server-side
                      programming, build RESTful APIs, and manage databases with
                      MongoDB.
                    </li>
                    <li>
                      <span>Full Stack Project:</span> Implement a capstone
                      project that brings together both front-end and back-end
                      skills.
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className={styles.heroTabsCard}>
                <h2>Course Content : </h2>
                <div className={styles.questionsContainer}>
                  {questions.map((item, index) => (
                    <div key={index} className={styles.question}>
                      <p className={styles.just} onClick={() => toggleFAQ(index)}>
                        <div className={styles.heroCardHead}>
                          <p>{item.title}</p>
                          <span>{item.duration} to Complete</span>
                        </div>
                        <MdKeyboardArrowDown
                          className={`${styles.arrow} ${
                            activeIndex === index ? styles.rotate : ""
                          }`}
                        />
                      </p>
                      {activeIndex === index && (
                        <div className={styles.lessonsContainer}>
                          {item.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className={styles.lesson}>
                              <div className={styles.allLesson}>
                                <p>{lesson.title}</p>
                                <div className={styles.allLessonContent}>
                                  <p>{lesson.duration}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className={styles.heroTabsCard}>
                <h2>Instructor</h2>
                <div className={styles.instructor}>
                  <div className={styles.instructorContainer}>
                    <img src="/image/instrutor.png" width={150} height={150} />
                    <div className={styles.instructorContent}>
                      <h2>Anisha Begam</h2>
                      <p>President of Sales</p>
                    </div>
                  </div>
                  <div className={styles.instructorText}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis rerum, qui recusandae animi excepturi consectetur quia illo modi cupiditate numquam mollitia accusantium aspernatur, amet magnam repellendus, fugiat consequuntur! Id.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolor veniam quas id minus culpa non accusantium facilis sit tempore!</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 4 && (
              <div className={styles.heroTabsCard}>
                <div className={styles.reviewContainer}>
                  <h3>Reviews</h3>
                  {reviews.map((review, index) => (
                    <div key={review.id}>
                      <div className={styles.reviewContent}>
                        <div className={styles.reviewProfile}>
                          <img src={review.profileImage} width={55} height={90} />
                        </div>
                        <div className={styles.reviewDetails}>
                          <div className={styles.userName}>
                            <h4>{review.userName}</h4>
                            <p>{review.date}</p>
                          </div>
                          <div className={styles.reviewRating}>
                            <div className={styles.reviewStars}>
                              {[...Array(review.rating)].map((_, starIndex) => (
                                <MdStarRate key={starIndex} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.reviewData}>
                        <p>{review.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <RelatedCourses />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default CoursesDetails;
