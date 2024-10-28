"use client";
import React, { useEffect, useState } from "react";
import styles from "./Courses.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaChartLine, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import ScrollToTop from "@/app/component/ScrollToTop/page";
import Link from "next/link";
import Loading from "../Loading/page";
const Courses = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  
  const router = useRouter();
  const handleMoveDetails = () => {
    router.push("/pages/Courses/CoursesDetails");
  };

  // States for toggling each dropdown's visibility
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isInstructorsOpen, setIsInstructorsOpen] = useState(false);
  const [isPricesOpen, setIsPricesOpen] = useState(false);
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isDuarationOpen, setIsDuarationOpen] = useState(false);

  const handleToggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  // Toggle functions for each dropdown
  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
    setIsRatingOpen(false); // Close other dropdowns
    setIsInstructorsOpen(false);
    setIsPricesOpen(false);
    setIsLevelOpen(false);
    setIsLanguageOpen(false);
  };

  const toggleRating = () => {
    setIsRatingOpen((prev) => !prev);
    setIsCategoryOpen(false); // Close other dropdowns
    setIsInstructorsOpen(false);
    setIsPricesOpen(false);
    setIsLanguageOpen(false);
    setIsLevelOpen(false);
  };

  const toggleInstructors = () => {
    setIsInstructorsOpen((prev) => !prev);
    setIsCategoryOpen(false); // Close other dropdowns
    setIsRatingOpen(false);
    setIsPricesOpen(false);
    setIsLanguageOpen(false);
    setIsLevelOpen(false);
  };
  const togglePrices = () => {
    setIsInstructorsOpen(false);
    setIsCategoryOpen(false); // Close other dropdowns
    setIsRatingOpen(false);
    setIsPricesOpen((prev) => !prev);
    setIsLanguageOpen(false);
    setIsLevelOpen(false);
  };
  const toggleLevel = () => {
    setIsInstructorsOpen(false);
    setIsCategoryOpen(false); // Close other dropdowns
    setIsRatingOpen(false);
    setIsPricesOpen(false);
    setIsLevelOpen((prev) => !prev);
    setIsLanguageOpen(false);
  };
  const toggleLanguage = () => {
    setIsInstructorsOpen(false);
    setIsCategoryOpen(false); // Close other dropdowns
    setIsRatingOpen(false);
    setIsPricesOpen(false);
    setIsLevelOpen(false);
    setIsLanguageOpen((prev) => !prev);
  };
  const toggleDuaration = () => {
    setIsInstructorsOpen(false);
    setIsCategoryOpen(false); // Close other dropdowns
    setIsRatingOpen(false);
    setIsPricesOpen(false);
    setIsLevelOpen(false);
    setIsLanguageOpen(false);
    setIsDuarationOpen((prev) => !prev);
  };
  const cards = [
    {
      img: "/image/img1.jpg",
      price: "₹5000",
      rating: 4.5,
      courseLevel: "BEGINNER",
      language: "Tamil",
      title:
        "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    },
    {
      img: "/image/img2.png",
      price: "₹5000",
      rating: 4.0,
      courseLevel: "BEGINNER",
      language: "Tamil",
      title:
        "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    },
    {
      img: "/image/img3.jpg",
      price: "₹5000",
      rating: 3,
      courseLevel: "BEGINNER",
      language: "Tamil",
      title:
        "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    },
    {
      img: "/image/img1.jpg",
      price: "₹5000",
      rating: 4.0,
      courseLevel: "BEGINNER",
      language: "Tamil",
      title:
        "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    },
    {
      img: "/image/img2.png",
      price: "₹5000",
      rating: 3.5,
      courseLevel: "BEGINNER",
      language: "Tamil",
      title:
        "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    },
    {
      img: "/image/img3.jpg",
      price: "₹5000",
      rating: 3,
      courseLevel: "BEGINNER",
      language: "Tamil",
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
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/public/course/getAll");
      const data = await res.json();
      setCourses(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className={styles.courses}>
        {loading ? (
      <Loading/> // Display loading spinner when loading
    ) : (
      <div className={styles.coursesContainer}>
        <div className={styles.coursesHead}>
          <h2>
            Explore <span>courses we </span> think <br /> you’ll be interested
            in.
          </h2>
          <button className={styles.toggleButton} onClick={handleToggleFilter}>
            {isFilterVisible ? "Hide Filter" : "Show Filter"}
          </button>
        </div>
        <div className={styles.coursesContent}>
          <div
            className={`${styles.coursesFilter} ${
              isFilterVisible ? styles.visible : styles.hidden
            }`}
          >
            {/* Filters */}
            <div className={styles.filterGroup}>
              <label onClick={toggleCategory} htmlFor="category">
                Category{" "}
                <span>
                  {isCategoryOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </label>
              {isCategoryOpen && (
                <div className={styles.customSelect}>
                  <ul className={styles.dropdown}>
                    <li>
                      <label>
                        <input type="checkbox" value="development" />
                        Development
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="design" />
                        Design
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="business" />
                        Business
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.filterGroup}>
              <label onClick={toggleRating} htmlFor="rating">
                Rating{" "}
                <span>
                  {isRatingOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </label>
              {isRatingOpen && (
                <div className={styles.customSelect}>
                  <ul className={styles.dropdown}>
                    <li>
                      <label>
                        <input type="checkbox" value="5stars" />5 Stars
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="4stars" />4 Stars
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="3stars" />3 Stars
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.filterGroup}>
              <label onClick={toggleInstructors} htmlFor="instructors">
                Instructors{" "}
                <span>
                  {isInstructorsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </label>
              {isInstructorsOpen && (
                <div className={styles.customSelect}>
                  <ul className={styles.dropdown}>
                    <li>
                      <label>
                        <input type="checkbox" value="john-doe" />
                        John Doe
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="jane-smith" />
                        Jane Smith
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="mark-jones" />
                        Mark Jones
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.filterGroup}>
              <label onClick={togglePrices} htmlFor="price">
                Price{" "}
                <span>
                  {isPricesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </label>
              {isPricesOpen && (
                <div className={styles.customSelect}>
                  <ul className={styles.dropdown}>
                    <li>
                      <label>
                        <input type="checkbox" value="100" />
                        100
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="200" />
                        200
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="300" />
                        300
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.filterGroup}>
              <label onClick={toggleLevel} htmlFor="level">
                Level{" "}
                <span>
                  {isLevelOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </label>
              {isLevelOpen && (
                <div className={styles.customSelect}>
                  <ul className={styles.dropdown}>
                    <li>
                      <label>
                        <input type="checkbox" value="easy" />
                        Easy
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="medium" />
                        Medium
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="hard" />
                        Hard
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.filterGroup}>
              <label onClick={toggleLanguage} htmlFor="language">
                Languages{" "}
                <span>
                  {isLanguageOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </label>
              {isLanguageOpen && (
                <div className={styles.customSelect}>
                  <ul className={styles.dropdown}>
                    <li>
                      <label>
                        <input type="checkbox" value="tamil" />
                        Tamil
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="english" />
                        English
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.filterGroup}>
              <label onClick={toggleDuaration} htmlFor="duaration">
                Duaration{" "}
                <span>
                  {isDuarationOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </label>
              {isDuarationOpen && (
                <div className={styles.customSelect}>
                  <ul className={styles.dropdown}>
                    <li>
                      <label>
                        <input type="checkbox" value="1-hours" />
                        1hrs
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="2-hours" />
                        2hrs
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" value="3-hours" />
                        3hrs
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className={styles.coursesCards}>
            <div className={styles.coursesCardsHead}>
              <p>Showing 43 total results</p>
              <div className={styles.coursesCardsFilter}>
                <p>Sort By:</p>
                <select name="" id="">
                  <option value="">Default</option>
                </select>
              </div>
            </div>

            <div className={styles.coursesCardsContent}>
              {courses.map((card, index) => (
                <div key={index} className={styles.cardItem}>
                  <Link href="/pages/Courses/CoursesDetails" className={styles.cardLink}>
                    <img src="/image/img1.jpg" className={styles.cardImage} />

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
                        {card.courseLevel}
                      </p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.amount}>
                      <p>{card.isPaid ? `₹${card.price}` : "Free"}</p>
                      <button className={styles.amtBtn}>Add to Cart</button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {/* {courses.map((course) => (
              <div key={course.id} className="course-card">
                <img src={course.thumbnailImgUrl} alt={course.title} />
                <h2>{course.title}</h2>
                <p>{course.shortDescription}</p>
                <p>{course.description}</p>
                <p>Duration: {course.duration}</p>
                <p>Level: {course.courseLevel}</p>
                <p>Language: {course.language}</p>
                <p>Price: {course.isPaid ? `₹${course.price}` : "Free"}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
       )}
      <ScrollToTop />
    </div>
  );
};

export default Courses;
