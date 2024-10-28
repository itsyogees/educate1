"use client";

import React, { useState, useRef  } from "react";
import styles from './CareerView.module.scss'
import ScrollToTop from '@/app/component/ScrollToTop/page'
import { CgImage } from "react-icons/cg";

const CareerView = () => {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        dob: "",
        address: "",
        phone: "",
        resume: null,
      });
    
  const [errors, setErrors] = useState({});
    const handleApplyClick = () => {
        setShowForm(true); // This will cause the form to render
    
        // Delay scrolling until the form is rendered
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            console.log("Scrolling to form", formRef.current);
          } else {
            console.log("Form not found");
          }
        }, 200); // Wait a bit to ensure the form has rendered
      };
      
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
    
        // Basic validation
        for (const key in formData) {
          if (!formData[key] && key !== "resume") {
            newErrors[key] = "This field is required";
          }
        }
    
        if (!formData.resume) {
          newErrors.resume = "Resume is required";
        }
    
        if (Object.keys(newErrors).length) {
          setErrors(newErrors);
          return;
        }
    
        console.log("Form data submitted:", formData);
      };
  return (
    <div className={styles.CareerView}>
        
      <div className={styles.careerDescriptionContainer}>
        <div className={styles.careerImage}> </div>

        <div className={styles.descriptionData}>
          <div className={styles.descriptionHead}>
            <h3>Job Description</h3>
          </div>
          <div className={styles.descriptionBtn}>
            <button onClick={handleApplyClick}>Apply</button>
          </div>
        </div>

        <div className={styles.descriptionContent}>
          <p>
            {" "}
            <span>User-Centered Design (UCD):</span> The design should
            prioritize the needs, goals, and preferences of users. A
            user-friendly interface improves the overall experience and keeps
            visitors engaged.
          </p>

          <p>
            {" "}
            <span>Simplicity :</span> Effective web design avoids clutter and
            ensures that users can easily navigate the site. Simplicity often
            means clean layouts, readable fonts, and intuitive navigation.
          </p>

          <p>
            {" "}
            <span>Consistency :</span> Maintaining uniform design elements
            (fonts, colors, button styles, etc.) throughout the site creates a
            cohesive look and feel, enhancing the user experience.
          </p>

          <p>
            {" "}
            <span>Responsive Design :</span> Modern websites must work across
            multiple devices—desktops, tablets, and mobile phones. Responsive
            design ensures that the website layout adjusts to fit different
            screen sizes.
          </p>

          <p>
            {" "}
            <span>Accessibility :</span> Websites should be designed to
            accommodate all users, including those with disabilities.
            Accessibility standards ensure that sites can be navigated by screen
            readers, and content is understandable for users with visual or
            hearing impairments.
          </p>
        </div>

        <div className={styles.descriptionDetails}>
          <h3>Design Software:</h3>
          <p>
            {" "}
            <span>Adobe XD, Figma, Sketch:</span> These tools are used for
            creating wireframes, mockups, and prototypes. They provide designers
            with an environment to experiment with layouts and UI elements.
          </p>

          <p>
            {" "}
            <span>Photoshop, Illustrator:</span> Graphics design software used
            to create and edit visual elements such as logos, icons, and custom
            images.
          </p>

          <h3>Website Builders and Content Management Systems (CMS):</h3>

          <p>
            <span>WordPress, Wix, Squarespace</span> CMS platforms that offer
            pre-built themes and templates for easy web design and content
            management.
          </p>

          <p>
            <span>Webflow :</span> A no-code tool that combines visual design
            with the power of HTML/CSS.
          </p>
        </div>
      </div>
      
      {showForm && (
        <div ref={formRef} className={styles.formContainer}>
          <h3>Application Form</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <div className={styles.inputs}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <span className={styles.errorMessage}>{errors.name}</span>
                )}
              </div>
              <div className={styles.inputs}>
                <label>Email Id</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.inputs}>
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <span className={styles.errorMessage}>{errors.gender}</span>
                )}
              </div>
              <div className={styles.inputs}>
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
                {errors.dob && (
                  <span className={styles.errorMessage}>{errors.dob}</span>
                )}
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.inputs}>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                {errors.address && (
                  <span className={styles.errorMessage}>{errors.address}</span>
                )}
              </div>
              <div className={styles.inputs}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && (
                  <span className={styles.errorMessage}>{errors.phone}</span>
                )}
              </div>
            </div>

            <   div className={styles.fileUpload}>
              <h3>Upload Your Resume</h3>
              <div className={styles.fileUploadContainer}>
                <div className={styles.fileUploadContent}>
                  <CgImage />
                  <p>Drag or Browse</p>
                  <p className={styles.fileSizeInfo}>PNG, PDF (max 5MB)</p>
                </div>
                <input
                  type="file"
                  accept=".pdf,.png"
                  onChange={(e) =>
                    setFormData({ ...formData, resume: e.target.files[0] })
                  }
                />
              </div>
            </div>

            <div className={styles.submitBtn}>
              <button type="submit">Submit Application</button>
            </div>
          </form>
        </div>
      )}
      <ScrollToTop/>
    </div>
  )
}

export default CareerView