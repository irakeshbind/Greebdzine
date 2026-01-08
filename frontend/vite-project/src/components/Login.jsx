import React, { useState } from "react";
import img1 from "../assets/MOPTro 1.jpg";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

import dashbaord from '../assets/dashboard.png'
import profile from '../assets/profile.png'
import signup from '../assets/signup.png'
import signin from '../assets/signin.png'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="signup-wrapper">
      <div className="flext-top">
             <img className="" src={dashbaord} /> <p>Dashbaoard</p>
            <img className="" src={profile} /> <p>Profile</p>
             <img className="" src={signup} /> 
             <p>Sign up</p>
             <img className="" src={signin} /> 
              <p>Sign in</p>
            </div>
      <div className="signup-left">
        <img className="signup-image" src={img1} alt="Login visual" />
      </div>

      <div className="register-container">
        <div className="register-header">
          <h1>Nice to see you!</h1>
          <p>Enter your email and password to sign in</p>
        </div>

        <div className="">
          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="remember-row">
              <div
                className={`checkbox ${rememberMe ? "checked" : ""}`}
                onClick={() => setRememberMe(!rememberMe)}
              >
                {rememberMe && <Check size={14} />}
              </div>
              <span>Remember me</span>
            </div>

            <button type="submit" className="signup-btn">
              Sign In
            </button>
          </form>

          <p className="signin-text">
            Don’t have an account?
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>

        <footer className="login-footer">
          <p>© 2025, Greendome Technologies Pvt Ltd</p>
          <div className="footer-links">
            <a href="#">Marketplace</a>
            <a href="#">Blog</a>
            <a href="#">Location</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;





