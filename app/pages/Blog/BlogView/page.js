"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import styles from "./BlogView.module.scss";

const BlogViewComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/public/blog/getOne/${id}`);
          setBlog(response.data);
        } catch (error) {
          console.error("Error fetching blog data:", error);
        }
      };
      fetchBlog();
    }
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className={styles.principleContainer}>
      <div className={styles.blogImg}>
        {/* Optional Image component for blog image if required */}
      </div>

      <div className={styles.principleDetails}>
        <h1>{blog.title}</h1>
        <div className={styles.principleRating}>
          <h4>
            <span>
              <MdStarRate />
            </span>
            4.8
          </h4>
          <p>Feb 09, 2024</p>
        </div>
      </div>

      <div className={styles.principleContent}>
        <p>
          <span>User-Centered Design (UCD):</span> {blog.shortDescription}
        </p>
        {/* Additional content as per the blog data */}
      </div>
    </div>
  );
};

const BlogView = () => (
  <Suspense fallback={<p>Loading blog data...</p>}>
    <BlogViewComponent />
  </Suspense>
);

export default BlogView;
