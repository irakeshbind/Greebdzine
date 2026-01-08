import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, Check } from "lucide-react";
import img1 from "../assets/MOPTro 1.jpg";
import apple from "../assets/aapple.png";
import vector from "../assets/vector.png";
import facebook from "../assets/facebook.png";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log({ name, email, password, rememberMe });
  };
  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <img className="signup-image" src={img1} />
      </div>

      <div className="register-container">
        <div className="register-header">
          <h1>Welcome!</h1>
          <p>
            Use these awesome forms to login or create new accounts in your
            project for free.
          </p>
        </div>

        <div className="register-card">
          <div className="gg">
            <h2 className="register-with">Register with</h2>
          </div>
          <div className="social-buttons">
            <button className="social-btn">
              <img className="vector-img" src={facebook} />
            </button>
            <button className="social-btn">
              {" "}
              <img className="vector-img" src={apple} />
            </button>
            <button className="social-btn">
              <img className="vector-img" src={vector} />
            </button>
          </div>
          <span className="or-text">or</span>

          {/* Form */}

          <form>
            <div className="form-group">
              <label>Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Input full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Input full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Input full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
              Sign up
            </button>
          </form>
          <p className="signin-text">
            Already have an account? <a href="#">Sign In</a>
          </p>
        </div>
        {/* Footer */}
        <footer className="register-footer">
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

export default Signup;
