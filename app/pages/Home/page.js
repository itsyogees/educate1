"use client";
import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { FaChartLine, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ScrollToTop from "@/app/component/ScrollToTop/page"; 
import axios from "axios";
import Loading from "../Loading/page";

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleCardClick = (title) => {
    setSelectedCard(title);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };
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
    {
      img: "/image/img2.png",
      amt: "₹5000",
      rating: 3.5,
      title:
        "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    },
  ];

  const newsData = [
    {
      imageSrc: "/image/news.png",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore...",
      author: "AFFRIN",
      date: "JANUARY 23, 2023",
    },
    {
      imageSrc: "/image/news1.jpeg",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore...",
      author: "JOHN DOE",
      date: "FEBRUARY 10, 2023",
    },
  ];
  const aboutData = [
    {
      percentage: "112%",
      label: "Students",
      description: "Lorem ipsum consectetur adipiscing elit",
    },
    {
      percentage: "80%",
      label: "Students",
      description: "Lorem ipsum consectetur adipiscing elit",
    },
    {
      percentage: "95%",
      label: "Students",
      description: "Lorem ipsum consectetur adipiscing elit",
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
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex < cards.length - cardsPerView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData); 
  };

  const eventData = [
    {
      imageSrc: "/image/event1.jpeg",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore...",
      author: "AFFRIN",
      date: "JANUARY 23, 2023",
    },
    {
      imageSrc: "/image/event2.jpeg",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore...",
      author: "JOHN DOE",
      date: "FEBRUARY 10, 2023",
    },
    {
      imageSrc: "/image/event3.jpeg",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore...",
      author: "JOHN DOE",
      date: "FEBRUARY 10, 2023",
    },
  ];
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore.",
      image: "/image/testimonial1.png",
      name: "Diane Rosenberg",
      role: "Student",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore.",
      image: "/image/testimonial2.png",
      name: "Diane Rosenberg",
      role: "Student",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore.",
      image: "/image/testimonial3.png",
      name: "Diane Rosenberg",
      role: "Student",
    },
  ];

  const id = 1;

  const [homedata, setHomeData] = useState({});

  const fetchDataHome = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/public/homePageSection1/getOne/1`
      );
      setHomeData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching the API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataHome();
  }, []);

  const [cardDatas, setCardDatas] = useState({});
  const fetchCardData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/public/homePageSection2/getOne/1`
      );
      setCardDatas(response.data);
      console.log(response.data, "fsdfsdfsd");
    } catch (error) {
      console.error("Error fetching card data:", error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  const [sectionData, setSectionData] = useState({});
  const fetchSectionData = async () => {
    try {
      setLoading(true);
      const response = await  axios.get(
        `http://localhost:8080/api/public/homePageSection3/getOne/1`
      ); 
      console.log("Fetched sectionData :", response.data);
      setSectionData(response.data);
    } catch (error) {
      console.error("Error fetching the data:", error);
    }finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSectionData();
  }, []);
  const [sectionEducationData, setSectionEducationData] = useState({});

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await  axios.get(
          `http://localhost:8080/api/public/homePageSection4/getOne/1`
        );
        console.log("Fetched sectionData :", response.data); 
        setSectionEducationData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }finally {
        setLoading(false);
      }
    };
    
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className={styles.main}>
       {loading ? (
      <Loading /> // Display loading spinner when loading
    ) : (
       <div className={styles.mainContainer}>
      <div className={styles.home}>
      
        <div className={styles.homeContainer}>
          <div className={styles.homeContainerDiv}>
            <h2 className={styles.title}>{homedata.title}</h2>
            <p className={styles.subTitle}>{homedata.subTitle}</p>
            <p className={styles.shortDescription}>
              {homedata.shortDescription}
            </p>
            <div className={styles.homeBtn}>
              <button className={styles.btn}>Join Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeContent}>
        <div className={styles.homeContentContainer}>
          <div className={styles.homeCard}>
            <div className={styles.homeCardContent}>
              <h2>Courses</h2>
              <p className={styles.program1}>{cardDatas.program1}</p>
              <button className={styles.readbtn}>
                <Link href="/pages/Business">Read More</Link>
              </button>
            </div>
          </div>

          <div className={styles.homeCard}>
            <div className={styles.homeCardContent}>
              <h2>Graduate</h2>
              <p className={styles.program1}>{cardDatas.program2}</p>
              <button className={styles.readbtn}>
                <Link href="/pages/Business">Read More</Link>
              </button>
            </div>
          </div>

          <div className={styles.homeCard}>
            <div className={styles.homeCardContent}>
              <h2>Programs</h2>
              <p className={styles.program1}>{cardDatas.program3}</p>
              <button className={styles.readbtn}>
                <Link href="/pages/Business">Read More</Link>
              </button>
            </div>
          </div>

          <div className={styles.card2}>
            <h3>YOUR ARE WELCOME</h3>
            <p>{cardDatas.buzzTitle}</p>
            <button className={styles.findbtn}>{cardDatas.button} </button>
          </div>
        </div>
      </div>
      <div className={styles.homeWelcome}>
        <div className={styles.homeWelcomeContent}>
          <h2 className={styles.title}>{sectionData.title}</h2>
          <p>{sectionData.shortDescription}</p>
          <ul className={styles.bulletPoints}>
            <li>{sectionData.bulletPoint1}</li>
            <li>{sectionData.bulletPoint2}</li>
            <li>{sectionData.bulletPoint3}</li>
            <li>{sectionData.bulletPoint4}</li>
          </ul>
        </div>
        <div className={styles.homeWelcomeContent}>
          {/* Display the image if the imageUrl is available */}

          <Image
            src="/image/video.png"
             
            width={300}
            height={300}
          />
        </div>
        <div className={styles.homeWelcomeContent}>
          <p className={styles.bold}>{sectionData.subTitle}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore dolore. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
            adipiscing elit, sed incididunt ut labore dolore.
          </p>
        </div>
      </div>
      <div className={styles.homeEducaiton}>
        <div className={styles.educationContents}>
          <div className={styles.educationContent}>
            <p className={styles.educationHead}>
              {sectionEducationData.header}
            </p>
            <p className={styles.educationHContent}>
              {sectionEducationData.subHeader}
            </p>
          </div>
          <div className={`${styles.educationContent} ${styles.center}`}>
            <p className={styles.educationHPara}>
              {sectionEducationData.shortDescription}
            </p>
          </div>
        </div>

        <div className={styles.educationCards}>
          <div
            className={styles.educationCard}
            onClick={() => handleCardClick(sectionEducationData.title1)}
          >
            <div className={styles.educationCardContainer}>
              <h2>{sectionEducationData.title1}</h2>
              <p>{sectionEducationData.title1Description}</p>
            </div>
          </div>
          <div
            className={styles.educationCard}
            onClick={() => handleCardClick(sectionEducationData.title2)}
          >
            <div className={styles.educationCardContainer}>
              <h2>{sectionEducationData.title2}</h2>
              <p>{sectionEducationData.title2Description}</p>
            </div>
          </div>
          <div
            className={styles.educationCard}
            onClick={() => handleCardClick(sectionEducationData.title3)}
          >
            <div className={styles.educationCardContainer}>
              <h2>{sectionEducationData.title3}</h2>
              <p>{sectionEducationData.title3Description}</p>
            </div>
          </div>
          <div
            className={styles.educationCard}
            onClick={() => handleCardClick(sectionEducationData.title4)}
          >
            <div className={styles.educationCardContainer}>
              <h2>{sectionEducationData.title4}</h2>
              <p>{sectionEducationData.title4Description}</p>
            </div>
          </div>
        </div>

        {selectedCard && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <span className={styles.closeButton} onClick={closeModal}>
                &times;
              </span>
              <h2>{selectedCard}</h2>
              <p>{sectionEducationData.shortDescription}</p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.mainCard}>
        <div className={styles.cardContainer}>
          <button
            className={`${styles.navButton} ${styles.prev}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <AiOutlineLeft />
          </button>

          <div className={styles.cardSlider}>
            <div className={styles.cardSilderHead}>
              <h2>Latest Courses</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
                sed do eiusmod tempor incididunt ut labore dolore.
              </p>
            </div>
            <div
              className={styles.cardWrapper}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {cards.map((card, index) => (
                <div key={index} className={styles.cardItem}>
                  <a href="#cardlink" className={styles.cardLink}>
                    <Image
                      src={card.img}
                      
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
                      <button className={styles.amtBtn}>Add to Cart</button>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navButton} ${styles.next}`}
            onClick={nextSlide}
            disabled={currentIndex >= cards.length - cardsPerView}
          >
            <AiOutlineRight />
          </button>
        </div>
        <div className={styles.cardBtn}>
          <button className={styles.btnCoures}>
            <Link href='/pages/Courses'>
            All Courses
            </Link>
           </button>
        </div>
      </div>

      <div className={styles.news}>
        <div className={styles.newsBannerHead}>
          <div className={styles.margin}>
            <h2>UPCOMING EDUCATION NEWS</h2>
            <p>
              Discover our Top School <br /> Certified Created News
            </p>
          </div>
        </div>
        <div className={styles.newsContainer}>
          <div className={styles.newsContents}>
            {newsData.map((newsItem, index) => (
              <div key={index} className={styles.newsContent}>
                {/* Dynamic Image */}
                <div className={styles.newsImage}>
                  <Image
                    src={newsItem.imageSrc}
                    width={250}
                    height={250}
                  />
                </div>

                <div className={styles.newsText}>
                  <div className={styles.textHead}>
                    <p>{newsItem.author}</p>
                    <p>{newsItem.date}</p>
                  </div>
                  <div className={styles.textContent}>
                    {/* Dynamic Title */}
                    <h2>{newsItem.title}</h2>

                    {/* Dynamic Description */}
                    <p>{newsItem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.newsAbout}>
            <div className={styles.newsAboutHead}>
              <h2>About Education Platform</h2>
            </div>
            <div className={styles.newsAboutContents}>
              {aboutData.map((item, index) => (
                <div key={index} className={styles.newsAboutContent}>
                  {/* Dynamic percentage */}
                  <h2>{item.percentage}</h2>

                  {/* Dynamic label */}
                  <p className={styles.headLabel}>{item.label}</p>

                  {/* Dynamic description */}
                  <p className={styles.headDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeRegister}>
        <div className={styles.homeRegisterContainer}>
          <div className={styles.homeRegisterForm}>
            <div className={styles.registerFormHead}>
              <h2>Online Registration</h2>
            </div>
            <div className={styles.registerForm}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <button type="submit">SEND</button>
                </div>
              </form>
            </div>
          </div>

          <div className={styles.homeEvents}>
            <div className={styles.homeEventsHead}>
              <h2>Our Events</h2>
            </div>
            <div className={styles.homeEventContents}>
              <div className={styles.homeEventContent}>
                {eventData.map((newsItem, index) => (
                  <div key={index} className={styles.homeEventCont}>
                    {/* Dynamic Image */}
                    <div className={styles.newsImage}>
                      <Image
                        src={newsItem.imageSrc}
                        width={110}
                        height={110}
                        alt={newsItem.title}
                      />
                    </div>

                    <div className={styles.newsText}>
                      <div className={styles.textHead}>
                        <p>{newsItem.author}</p>
                        <p>{newsItem.date}</p>
                      </div>
                      <div className={styles.textContent}>
                        {/* Dynamic Title */}
                        <h2>{newsItem.title}</h2>

                        {/* Dynamic Description */}
                        <p>{newsItem.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeTestimonials}>
        <div className={styles.testimonialsHead}>
          <h2>TESTIMONIALS</h2>
          <p>Explore the students experience</p>
        </div>
        <div className={styles.homeTestimonialsContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.homeTestimonialsContent}>
              <p className={styles.testQuote}>“{testimonial.quote}”</p>
              <Image
                src={testimonial.image}
                width={110}
                height={110}
                alt={testimonial.name}
              />
              <p className={styles.testName}>{testimonial.name}</p>
              <p className={styles.testRole}>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.homeAdmission}>
        <div className={styles.homeAdmissionContainer}>
          <div className={styles.admissionText}>
            <h2>Rolling Admissions now open</h2>
            <p>Get in touch with us to discuss it:</p>
            <button>
              <FaPhone />
              +91 12345 67890
            </button>
          </div>
          <div className={styles.admissionImg}>
            <Image src="/image/admission.png" width={200} height={200} />
          </div>
        </div>
      </div>
      </div>
      )}
      <ScrollToTop />
    </div>
  );
};

export default Home;
