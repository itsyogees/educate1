
"use client";

import styles from "./Assigments.module.scss";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes, FaCog, FaSignOutAlt } from 'react-icons/fa'; 
import { MdDashboard } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { MdOutlineAssignment } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";

const Assignments = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(false);
  const router = useRouter();
  const [content, setContent] = useState(<h2>Welcome to Your Dashboard</h2>);
  
  const user = useSelector((state) => state.user.userInfo);
  
  useEffect(() => {
    if (!user) {
      router.push("/component/SignIn"); 
    }
  }, [user, router]);

  if (!user) {
    return null; 
  }

  useEffect(() => {
    // Update content based on the current path
    switch (router.pathname) {
      case '/component/Dashboard':
        setContent(<h2>Assignments Content</h2>);
        break;
      // Add additional cases as needed for other routes
      default:
        setContent(<h2>Welcome to Your Assignments</h2>);
        break;
    }
  }, [router.pathname]); 

  return (
    <div className={styles.Dashboard}>
      {/* Sidenav */}
      <div className={`${styles.sidenav} ${isSidenavOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <h2>MyLogo</h2>
        </div>
        <nav className={styles.navLinks}>
          <div className={styles.spacer}>
            <Link href="/component/ProfilePage/Dashboard"><MdDashboard /> Dashboard</Link>
            <Link href="/component/ProfilePage/MyCourses"><FaPeopleLine /> My Courses</Link>
            <Link href="/component/ProfilePage/Assignments"><MdOutlineAssignment /> Assignments</Link>
            <Link href="/component/ProfilePage/DashReviews"><FaRegCommentDots /> Reviews</Link>
          </div>
          <div className={styles.spacer}>
            <Link href="/component/ProfilePage/Settings"><FaCog /> Settings</Link>
            <Link href="/pages/Home"><FaSignOutAlt /> Logout</Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <button className={styles.hamburger} onClick={() => setSidenavOpen(!isSidenavOpen)}>
            {isSidenavOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1>Assignments</h1>
        </div>
        <div className={styles.content}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Assignments;
