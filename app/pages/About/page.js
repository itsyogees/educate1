"use client"; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { PiCertificateBold } from "react-icons/pi";
import { FaPeopleLine, FaSquarePhone } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdCheckCircle } from 'react-icons/md';
import styles from "./About.module.scss";
import ScrollToTop from '@/app/component/ScrollToTop/page';
import Loading from '../Loading/page';

const About = () => {
  const cards = [
    { img: '/image/imgslide1.png', name: 'Elisa Peter', detail: 'Web Designer' },
    { img: '/image/imgslide2.png', name: 'Andrus', detail: 'Software Engineer' },
    { img: '/image/imgslide3.png', name: 'Elson Peter', detail: 'Web Designer' },
    { img: '/image/imgslide4.png', name: 'Lisa David', detail: 'Java Trainer' },
    { img: '/image/imgslide1.png', name: 'Elisa Peter', detail: 'Web Designer' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4); // default to 4

  
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 600) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    }
    return 4; // fallback for server-side rendering
  };
  const handleResize = () => {
    const newCardsPerView = getCardsPerView();
    setCardsPerView(newCardsPerView);

    // Reset currentIndex if it exceeds the new limit
    if (currentIndex >= cards.length - newCardsPerView) {
      setCurrentIndex(cards.length - newCardsPerView);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

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
  const [aboutData, setAboutData] = useState({});  
  const [aboutDetails, setAboutDetails] = useState({});  
  const [aboutFunction , setAboutFunction] = useState({});
 const [aboutLearner , setAboutLearner] = useState({});
  const [aboutPlatform , setAboutPlatform ] = useState({});
  const [loading, setLoading] = useState(true); 
  const Id = 1;  
  useEffect(() => {
    const fetchAboutDataSection1 = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/api/public/aboutPageSection1/getOne/${Id}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setAboutData(data);  
      } catch (error) {
        console.error('Error fetching about page section 1 data:', error);
      }finally {
        setLoading(false);
      }
    };

    fetchAboutDataSection1();
  }, [Id]);

 
  useEffect(() => {
    const fetchAboutDataSection2 = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/api/public/aboutPageSection2/getOne/${Id}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setAboutDetails(data); 
      } catch (error) {
        console.error('Error fetching about page section 2 data:', error);
      } finally {
        setLoading(false);  
      }
    };

    fetchAboutDataSection2();
  }, [Id]);
  useEffect(() => {
    const fetchAboutDataSection3 = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/api/public/aboutPageSection3/getOne/${2}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setAboutFunction(data);  
      } catch (error) {
        console.error('Error fetching about page section 2 data:', error);
      } finally {
        setLoading(false);  
      }
    };

    fetchAboutDataSection3();
  }, [2]);
  useEffect(() => {
    const fetchAboutDataSection5 = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/api/public/aboutPageSection5/getOne/${Id}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setAboutPlatform(data); // Store Section 2 data
      } catch (error) {
        console.error('Error fetching about page section 2 data:', error);
      } finally {
        setLoading(false); // Set loading to false when both are fetched
      }
    };

    fetchAboutDataSection5();
  }, [Id]);
  useEffect(() => {
    const fetchAboutDataSection4 = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/api/public/aboutPageSection4/getOne/${Id}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setAboutLearner(data); // Store Section 2 data
      } catch (error) {
        console.error('Error fetching about page section 2 data:', error);
      } finally {
        setLoading(false); // Set loading to false when both are fetched
      }
    };

    fetchAboutDataSection4();
  }, [Id]);
  // Handle the loading state


  // Handle the case where data is not available
  if (!aboutData || !aboutDetails) {
    return <p>No data available</p>;
  }
  return (
    <>
     {loading ? (
        <Loading /> // Display loading spinner when loading
      ) : (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <Image 
            src="/image/about.png" 
            alt="about image" 
            width={500} 
            height={500} 
          />
        </div>

        <div className={styles.aboutContent}>
        <h3 className={styles.title}>
          {aboutData.title} <span>Success with IT Courses</span>
        </h3>
        <p className={styles.subTitle}>{aboutData.subTitle}</p>
        <p className={styles.shortDescription}>
          {aboutData.shortDescription}
        </p>

          <div className={styles.aboutDetails}>
            <div className={styles.aboutCompany}>
              <div className={styles.icon}>
                <PiCertificateBold />
              </div>
              <div className={styles.info}>
                <h4>Certified Company</h4>
                <p>Best Provide Skill Services</p>
              </div>
            </div>

            <div className={styles.aboutTeam}>
              <div className={styles.icon}>
                <FaPeopleLine />
              </div>
              <div className={styles.info}>
                <h4>Expert Team</h4>
                <p>100% Expert Team</p>
              </div>
            </div>
          </div>

          <div className={styles.aboutDetails}>
            <div className={styles.aboutBtn}>
              <button>
                Explore More
                <IoIosArrowForward style={{ marginLeft: '8px' }} />
              </button>
            </div>

            <div className={styles.aboutContact}>
              <div className={styles.icon}>
                <FaSquarePhone />
              </div>
              <div className={styles.info}>
                <h4>Call Us On:</h4>
                <p>+91 12345 67890</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutDetailContainer}>
      <div className={styles.platformContainer}>
        <h3>Welcome to Education Platform</h3>
        <p>{aboutDetails.description}</p>  
      </div>

      <div className={styles.missionVisionContainer}>
          <div className={styles.mission}>
            <h3>Our Mission</h3>
            <p>{aboutDetails.ourMission}
            </p>
          </div>

          <div className={styles.vision}>
            <h3>Our Vision</h3>
            <p>
            {aboutDetails.ourVision}
            </p>
          </div>
        </div>
    </div>

      <div className={styles.approachContainer}>
        <div className={styles.approachImg}>
          <img 
            src="/image/about2.png" 
            alt="about image" 
          />
        </div>
        <div className={styles.approachDetails}>
          <h3>{aboutFunction.title}</h3>
          <p>{aboutFunction.description}
          </p>
        </div>
      </div>

      <div className={styles.functionContainer}>
        <div className={styles.functionContents}>
          <div className={styles.functionDetails}>
            <h3>{aboutLearner.title1}:</h3>
            <p>{aboutLearner.title1Description}.</p>
          </div>
          <div className={styles.functionDetails}>
            <h3>{aboutLearner.title2}:</h3>
            <p>{aboutLearner.title2Description}.</p>
          </div>
          <div className={styles.functionDetails}>
            <h3>{aboutLearner.title3}:</h3>
            <p>{aboutLearner.title3Description}.</p>
          </div>
          <div className={styles.functionDetails}>
            <h3>{aboutLearner.title4}:</h3>
            <p>{aboutLearner.title4Description}.</p>
          </div>
        </div>
        <div className={styles.functionImg}>
          <img
            src="/image/about3.png" 
            alt="about image" 
          />
        </div>
      </div>

      <div className={styles.capabilityContainer}>
        <h2>{aboutPlatform.title}</h2>
        <div className={styles.capabilityContent}>
          <div className={styles.tickIcon}>
            <MdCheckCircle />
          </div>
          <div className={styles.capabilityDetails}>
            <h3>{aboutPlatform.title1}</h3>
            <p>{aboutPlatform.title1Description}</p>
          </div>
          <div className={styles.tickIcon}>
            <MdCheckCircle />
          </div>
          <div className={styles.capabilityDetails}>
            <h3>{aboutPlatform.title2}</h3>
            <p>{aboutPlatform.title2Description}</p>
          </div>
        </div>

        <div className={styles.capabilityContent}>
          <div className={styles.tickIcon}>
            <MdCheckCircle />
          </div>
          <div className={styles.capabilityDetails}>
            <h3>{aboutPlatform.title3}</h3>
            <p>{aboutPlatform.title3Description}</p>
          </div>
          <div className={styles.tickIcon}>
            <MdCheckCircle />
          </div>
          <div className={styles.capabilityDetails}>
            <h3>{aboutPlatform.title4}</h3>
            <p>{aboutPlatform.title4Description}</p>
          </div>
        </div>
      </div>

      <div className={styles.teamContainer}>
        <h2>See Our Skilled Expert <span>Team</span></h2>
        <p>TEAM MEMBERS</p>

        <div className={styles.imageSliders}>
          <div className={styles.cardSliderContainer}>
            <button 
              className={styles.navButton} 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
            >
              <AiOutlineLeft />
            </button>
            
            <div className={styles.cardslider}>
              <div className={styles.cardWrapper} 
                  style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}>
                {cards.map((card, index) => (
                  <div key={index} className={styles.cardItem}>
                    <img src={card.img} alt="Card" className={styles.cardImages} />
                    <div className={styles.teamDetails}>
                      <h4>{card.name}</h4>
                      <p>{card.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className={styles.navButton} 
              onClick={nextSlide} 
              disabled={currentIndex >= cards.length - cardsPerView}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
      </div>
      )}
      <ScrollToTop/>
    </>
  );
};

export default About;
