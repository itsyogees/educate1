import React from "react";
import styles from "./Business.module.scss";

import Image from 'next/image';

import { PiCertificateBold } from "react-icons/pi";
import { FaPeopleLine } from "react-icons/fa6";
import ScrollToTop from "@/app/component/ScrollToTop/page";


const plan = [
  { id: 1, head:"100 days plan",info:" The design should prioritize the needs, goals, and preferences of users. A user-friendly interface" },
  { id: 2, head:"100 days plan",info:" The design should prioritize the needs, goals, and preferences of users. A user-friendly interface" },
  { id: 3, head:"100 days plan",info:" The design should prioritize the needs, goals, and preferences of users. A user-friendly interface" },
  { id: 4, head:"100 days plan",info:" The design should prioritize the needs, goals, and preferences of users. A user-friendly interface" },
  { id: 5, head:"100 days plan",info:" The design should prioritize the needs, goals, and preferences of users. A user-friendly interface" },
  { id: 6, head:"100 days plan",info:" The design should prioritize the needs, goals, and preferences of users. A user-friendly interface" }
 ];


const Business= () => {
    return(
        <>
        
    <div className={styles.businessContainer}>

      <div className={styles.businessHome}>

          <div className={styles.businessContent}>
            <h3>We Are <span>Increasing Business</span> Success with IT Courses</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore dolore.adipiscing elitseddo eiusmod tempor consectetur adipiscing elit, sed incididuntut labore dolore.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore dolore.
            adipiscing elitseddo eiusmod tempor consectetur adipiscing elit, sed incididuntut labore dolore.
            </p>

            <div className={styles.businessDetails}>
              <div className={styles.businessCompany}>
                <div className={styles.icon}>
                  <PiCertificateBold />
                </div>
                <div className={styles.info}>
                  <h4>Certified Company</h4>
                  <p>Best Provide Skill Services</p>
                </div>
              </div>

              <div className={styles.businessTeam}>
                <div className={styles.icon}>
                  <FaPeopleLine />
                </div>
                <div className={styles.info}>
                  <h4>Expert Team</h4>
                  <p>100% Expert Team</p>
                </div>
              </div>
            </div>

          </div>


          <div className={styles.businessImg}>
            <Image 
              src="/image/d3.png" 
              alt="about image" 
              width={500} 
              height={500} 
            />
          </div>

        </div>

        <div className={styles.planCards}>
                
                <h3>We Are <span>Increasing Business</span></h3>
                <h3>Success with IT Courses</h3>

                <div className={styles.planRow}>
                    {plan.map((plan) => (

                        <div key={plan.id} className={styles.planCol}>
                            <div className={styles.planCard}>
                                <div className={styles.planHead}>
                                   <h4>{plan.head}</h4>
                                </div>
                                <div className={styles.planDetails}>
                                    <p>{plan.info}</p>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
       



    </div>
        <ScrollToTop/>
        </>
    )
}

export default Business;