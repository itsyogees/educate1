"use client";

import React, { useState } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../redux/userSlice"; 

import { FaBars, FaTimes } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleLogout = () => {
    dispatch(clearUser());
    setIsUserDropdownOpen(false); // Close dropdown on logout
  };

  return (
    <div className={styles.navbarMain}>
      <div className={styles.navbarContainer}>
        <nav className={styles.navbar}>
          <div className={styles.navIcons}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src="/image/Component 1.png" alt="Logo" width={200} height={65} />
              </Link>
            </div>

            <div className={styles.menuToggle} onClick={toggleMenu}>
              {!isMenuOpen ? <FaBars className={styles.icon} /> : <FaTimes className={styles.icon} />}
            </div>

            <ul className={`${styles.navItems} ${isMenuOpen ? styles.active : ""}`}>
              <li><Link href="/">Home</Link></li>
              <li className={styles.hasDropdown}>About  <IoIosArrowDown />
                <ul className={styles.dropdown}>
                  <li><Link href="/pages/About">About Us</Link></li>
                  <li><Link href="/pages/Events">Event</Link></li>
                  <li><Link href="/pages/Contact">Contact</Link></li>
                </ul>
              </li>
              <li className={styles.hasDropdown}>Courses  <IoIosArrowDown />
                <ul className={styles.dropdown}>
                  <li><Link href="/pages/SubProgram1">SubProgram1</Link></li>
                  <li><Link href="/pages/SubProgram2">SubProgram2</Link></li>
                  <li><Link href="/pages/SubProgram3">SubProgram3</Link></li>
                  <li><Link href="/pages/Courses">SubProgram4</Link></li>
                  <li><Link href="/pages/SubProgram1">SubProgram5</Link></li>
                </ul>
              </li>
              <li><Link href="/pages/Blog">Blog</Link></li>
              <li><Link href="/pages/Career">Careers</Link></li>
            </ul>
          </div>

          <div className={styles.userSection}>
            {user ? (
              <div className={styles.navIconsUpdate}>
                <FiHeart />
                <IoSearchSharp />
                <Link href="/pages/Card">
                  <FaCartShopping />
                </Link>
                <p>{user.name}</p>
                <Image src="/image/userProfile.png" alt="profileImg" width={30} height={32} />
                <div 
                  className={styles.dropdownComponent} 
                  onMouseEnter={() => setIsUserDropdownOpen(true)} 
                  onMouseLeave={() => setIsUserDropdownOpen(false)}
                >
                  <IoIosArrowDown />
                  {isUserDropdownOpen && (
                    <ul className={styles.userDropdownList}>
                      <li><Link href="/component/ProfilePage">Dashboard</Link></li>
                      <li onClick={handleLogout}>
                        <Link href="/">Logout</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <div className={styles.navIconBefore}>
                <FiHeart />
                <IoSearchSharp />
                <div className={styles.signinDiv}>
                  <Link href="/component/SignIn">
                    <CgProfile />
                    <p className={styles.signInText}>Sign In</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
