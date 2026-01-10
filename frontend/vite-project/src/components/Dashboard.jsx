import React from "react";
import Home from "../assets/home.png";
import Cart from "../assets/cart.png";
import signup from "../assets/ds.png";
import dp from "../assets/dp.png";
import Sig from "../assets/sig.png";
import Frame from '../assets/frame.png'
import Team from '../assets/team.png'
import Pro from '../assets/pro.png'
import Teap from '../assets/teap.png'

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboar-header">
        <div className="dashbaord-text">
          <h3>MOPTro</h3>
        </div>
        <div className=" dashboard-text-wrapper">
          <div>
            <img className="dashoard-image" src={Home} />
            Dashboard
          </div>
        </div>
        <div className="pragrph-p">
          <div>
            <img className="dashoard-image-cart" src={Cart} />
            Tables
          </div>
        </div>

        <div>
          <div className="dd">
            <div>
              <h3>ACCOUNT PAGES</h3>
            </div>
            <div className="profile-p">
              <p className="profile-text-p">
                <img className="dashoard-image-cartd" src={dp} />
                Profile
              </p>
              <p>
                <img className="dashoard-image-cartp" src={Cart} />
                Sign in
              </p>
              <p>
                <img className="dashoard-image-cartg" src={signup} />
                Sign up
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* alug first */}
      <div className="profile-side">
        <div className="proflie-left-text">
          <div>
            <div className="profile-text-p">
              <p>Pages /<span className="span-text">Dashboard</span> </p>
            </div>

            <div className="profile-text-span">
              <p>Profile</p>
            </div>
          </div>
          <div>
            <div className="input-text">
              <input type="text" placeholder="Type here..." />
              <p>
                <img className="inpute-img" src={Sig} />
                Sign in
              </p>
              <p>
                <img className="" src={Sig} />
              </p>
              <p>
                <img className="" src={Sig} />
              </p>
            </div>
          </div>
        </div>

        {/* header 1 */}
        <div className="header-text">
        <div className="frame-text">
         <p> <img className="frame-img" src={Frame} /></p>
        <div className="frame-text-mark">
             <h5>Mark Johnson</h5>
         <p>mark@simmmple.com</p>
        </div>
        </div>
        <div className="">
            <div className="Team-text">
               <p className="over-text"> <img className="over-img" src={Team}/>OVERVIEW</p>
                <p><img className="over-img" src={Teap}/>TEAMS</p>
                <p><img className="over-img" src={Pro}/>PROJECTS</p>
            </div>

        </div>

      </div>

        {/* alug second */}
      <div className="main-header">
        <div className="main-header-right">
          <div className="main-text">
            <h5>MOPTro Informations</h5>
            <p>Hello, Mark Johnson! Your MOPTro is ready.</p>
          </div>
        </div>
        <div className="main-header-left">ff</div>
      </div>
      </div>
    

      
      
    </div>
  );
};

export default Dashboard;
