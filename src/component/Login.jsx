import React from "react";
import "./styles.css";

export default function Auth() {
    // const googleLogin = () => {
    //     window.location.href = "http://localhost:5000/auth/google";
    // };

    return (
        <div className="login-container">
            <h2>Welcome to Letter App</h2>
            <a href="http://localhost:5000/auth/google" className="login-button" > <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path fill="#4285F4" d="M44.5 20H24v8.3h11.7c-1.2 5-5.6 8.4-11.7 8.4-7 0-12.7-5.7-12.7-12.7S17 11.3 24 11.3c3.2 0 6.2 1.2 8.4 3.3l6.2-6.2C34.4 4.3 29.5 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11.3 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
</svg> Sign in with Google

                
            </a>
        </div>
    );
}
