"use client";

import React, { useState, useEffect } from "react";
import styles from "./Blog.module.scss";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { VscEye } from "react-icons/vsc";
import { FiMessageSquare } from "react-icons/fi";
import ScrollToTop from "@/app/component/ScrollToTop/page";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "../Loading/page";

const articles = [
  {
    id: 1,
    image: "/image/article1.png",
    title: "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
  
];

const reviews = [
  {
    name: "Elisa Joe",
    date: "Nov 9, 2023",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "John Doe",
    date: "Oct 12, 2023",
    rating: 4,
    comment: "Sed do eiusmod tempor incididunt ut labore...",
  },
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const fetchBlockData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/api/public/blog/getAll");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  useEffect(() => {
    fetchBlockData();
  }, []);
  const handleBlogClick = (id) => {
    console.log("Blog ID:", id); // Log the ID to console
    router.push(`/pages/Blog/BlogView?id=${id}`);
  };
  return (
    <div className={styles.blogContainer}>
        {loading ? (
        <Loading /> // Display loading spinner when loading
      ) : (
      <div className={styles.articlesContainer}>
        <h2>Blog</h2>
        <h4>Recently Added Articles</h4>
        {/* 
        {blogs.length > 0 && (
          <div>
            <h4>Fetched Blogs</h4>
            {blogs.map((blog) => (
              <p key={blog.id}>{blog.title}</p>
            ))}
          </div>
        )} */}
         {blogs.length > 0 && (
        <div className={styles.articleRow}>
         {blogs.map((blog) => (
        <div
        key={blog.id}
        className={styles.articleClick}
        onClick={() => handleBlogClick(blog.id)} // Call function with blog ID
      >
              <div className={styles.articleCol}>
                <div className={styles.articleCard}>
                  <div className={styles.articleImg}>
                    <img src="/image/article1.png" alt={blog.title} />
                  </div>
                  <div className={styles.articleDetails}>
                    <h3>{blog.title}</h3>
                    <h5>By {blog.shortDescription}</h5>
                    <p>Last updated on</p>
                    <div className={styles.articleIcons}>
                      <p>Nov 9, 2023</p>
                      <h6>
                        <span>
                          <VscEye />
                        </span>
                        38.8K
                      </h6>
                      <h5>
                        <span>
                          <FiMessageSquare />
                        </span>
                        4
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
 )}
      <ScrollToTop />
    </div>
  );
};

export default Blog;
