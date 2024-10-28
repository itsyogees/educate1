"use client";

import styles from "./ProfilePage.module.scss";

import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FaBars, FaTimes, FaCog, FaSignOutAlt } from 'react-icons/fa'; 
import { MdDashboard } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { MdOutlineAssignment } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";

const ProfilePage = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(false); 
  const router = useRouter(); 
  const [content, setContent] = useState(<h2>Welcome to Your Profile</h2>); 

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
    switch (router.pathname) {
      case '/component/ProfilePage/Dashboard':
        setContent(<h2>Dashboard Content</h2>);
        break;
      case '/component/ProfilePage/MyCourses':
        setContent(<h2>My Courses Content</h2>);
        break;
      case '/component/ProfilePage/Assignments':
        setContent(<h2>Assignments Content</h2>);
        break;
      case '/component/ProfilePage/DashReviews':
        setContent(<h2>Reviews Content</h2>);
        break;
      case '/component/ProfilePage/Settings':
        setContent(<h2>Settings Content</h2>);
        break;
      case '/component/SignIn':
        setContent(<h2>Signing Out...</h2>);
        break;
      default:
        setContent(<h2>Welcome to Your Profile</h2>);
        break;
    }
  }, [router.pathname]); 

  return (
    <div className={styles.ProfilePage}>
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
          <h1>Profile Page</h1>
        </div>
        <div className={styles.content}>
          {/* Render the dynamic content */}
          {content}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
