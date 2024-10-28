"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice"; 
import styles from "./SignIn.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize useRouter
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!identifier || !password) {
      if (!identifier) setEmailError("Please fill out the email field.");
      if (!password) setPasswordError("Please fill out the password field.");
      return;
    }

    // Check credentials
    if (identifier === "user@gmail.com" && password === "password") {
      console.log("Signing in with:", { identifier, password });
      dispatch(setUser({ email: identifier, name: "User Name", image: "/path/to/profile-image.png" }));
      setIdentifier("");
      setPassword("");
      router.push("/"); // Redirect to home page after successful sign-in
    } else {
      if (identifier !== "user@gmail.com") {
        setEmailError("Invalid email");
      }
      if (password !== "password") {
        setPasswordError("Invalid password");
      }
    }
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinForm}>
        <h3>Welcome</h3>
        <form onSubmit={handleSignin}>
          <div className={styles.signinInputs}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={identifier}
              required
              onChange={(e) => {
                setIdentifier(e.target.value);
                if (emailError) setEmailError(""); 
              }}
              pattern="\S+@\S+\.\S+"
              title="Please enter a valid email address."
            />
            {emailError && <p className={styles.errorMessage}>{emailError}</p>}
          </div>

          <div className={styles.signinInputs}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordContainer}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError(""); 
                }}
                minLength="6"
                title="Password must be at least 6 characters long."
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
            <div className={styles.forgotPassword}>
              <span>Forgot Password?</span>
            </div>
          </div>

          <div className={styles.btns}>
            <button type="submit" className={styles.signinBtn}>
              Sign in
            </button>
            <p>Or</p>
            <button type="button" className={styles.googleBtn}>
              <FcGoogle className={styles.googleIcon} />
              Login with Google
            </button>
            <h5>
              Don't have an account?{" "}
              <Link href="/component/Signup">
                <span>Sign Up</span>
              </Link>
            </h5>
          </div>
        </form>
      </div>

      <div className={styles.signinImg}>
        <div className={styles.logoImg}>
          <Image src="/image/SignInLogo.png" alt="logo" width={100} height={100} />
        </div>
        <div className={styles.logoImg1}>
          <Image src="/image/rb_757.png" alt="Sign In" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
