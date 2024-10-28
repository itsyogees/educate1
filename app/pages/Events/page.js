"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Events.module.scss";
import ScrollToTop from "@/app/component/ScrollToTop/page";
const Events = () => {
  const webDesignPrinciples= [
    {
      title: "User-Centered Design (UCD)",
      content: "The design should prioritize the needs, goals, and preferences of users. A user-friendly interface improves the overall experience and keeps visitors engaged."
    },
    {
      title: "Simplicity",
      content: "Simplicity ensures that users can easily navigate the site. It often means clean layouts, readable fonts, and intuitive navigation."
    },
    {
      title: "Consistency",
      content: "Maintaining uniform design elements (fonts, colors, button styles, etc.) throughout the site creates a cohesive look and feel, enhancing the user experience."
    },
    {
      title: "Responsive Design",
      content: "Modern websites must work across multiple devices—desktops, tablets, and mobile phones. Responsive design ensures that the website layout adjusts to fit different screen sizes."
    },
    {
      title: "Accessibility",
      content: "Websites should be designed to accommodate all users, including those with disabilities. Accessibility standards ensure that sites can be navigated by screen readers and are understandable for users with visual or hearing impairments."
    }
  ]
  const designSoftware = [
    {
      name: "Adobe XD, Figma, Sketch",
      description: "These tools are used for creating wireframes, mockups, and prototypes. They provide designers with an environment to experiment with layouts and UI elements."
    },
    {
      name: "Photoshop, Illustrator",
      description: "Graphics design software used to create and edit visual elements such as logos, icons, and custom images."
    }
  ]
  const cmsPlatforms = [
    {
      name: "WordPress, Wix, Squarespace",
      description: "CMS platforms that offer pre-built themes and templates for easy web design and content management."
    },
    {
      name: "Webflow",
      description: "A no-code tool that combines visual design with the power of HTML/CSS."
    }
  ]
  return (
    <div className={styles.events}>
      <div className={styles.eventsHead}>
        <h2>
          Introduction to Web Design: From Basics <br /> to Advanced - Explained
          in Tamil
        </h2>
      </div>
      <Image src="/image/events.jpeg" width={200} height={200} />
      <div className={styles.eventsContainer}>
        <div className={styles.eventsContainerHead}>
          <h2>Key Principles of Web Design</h2>
          <button className={styles.btns}>JOIN NOW</button>
        </div>
        <div className={styles.eventsContent}>
        {webDesignPrinciples.map((principle, index) => (
            <p key={index}>
              <span>{principle.title}:</span> {principle.content}
            </p>
          ))}
        </div>
        <div className={styles.eventsContainerHead}>
          <h2>Web Design Tools</h2>
        </div>
        <div className={styles.eventsContent}>
          <h2>Design Software:</h2>
         
          <ul>
            {designSoftware.map((tool, index) => (
              <li key={index}>
                <p>
                  <span>{tool.name}:</span> {tool.description}
                </p>
              </li>
            ))}
          </ul>
          <h2>Website Builders and Content Management Systems (CMS):</h2>
          <ul>
            {cmsPlatforms.map((platform, index) => (
              <li key={index}>
                <p>
                  <span>{platform.name}:</span> {platform.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default Events;
