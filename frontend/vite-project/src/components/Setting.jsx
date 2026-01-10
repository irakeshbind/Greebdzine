import { useState } from "react";
import Car1 from "../assets/car1.png";
const Toggle = ({ checked, onChange }) => {
  return (
    <button
      onClick={onChange}
      className={`toggle ${checked ? "toggle-on" : "toggle-off"}`}
    >
      <span className={`toggle-thumb ${checked ? "thumb-on" : ""}`} />
    </button>
  );
};

const Setting = () => {
  const [settings, setSettings] = useState({
    followEmail: true,
    answerEmail: false,
    mentionEmail: true,
    newLaunches: false,
    monthlyUpdates: false,
    newsletter: true,
    // weeklyMails: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bkt">
      <div className="setting-conatiner">
        <div className="settings-page">
          <div className="settings-container">
            <h1 className="title">Platform Settings</h1>

            {/* Account */}
            <div className="section">
              <h2 className="section-title">Account</h2>

              {[
                ["followEmail", "Email me when someone follows me"],
                ["answerEmail", "Email me when someone answers my comment"],
                ["mentionEmail", "Email me when someone mentions me"],
              ].map(([key, label]) => (
                <div className="setting-row" key={key}>
                  <Toggle
                    checked={settings[key]}
                    onChange={() => handleToggle(key)}
                  />
                  <span className="label">{label}</span>
                </div>
              ))}
            </div>

            {/* Application */}
            <div className="section">
              <h2 className="section-title">Application</h2>

              {[
                ["newLaunches", "New launches"],
                ["monthlyUpdates", "Monthly product updates"],
                ["newsletter", "Subscribe to newsletter"],
              ].map(([key, label]) => (
                <div className="setting-row" key={key}>
                  <Toggle
                    checked={settings[key]}
                    onChange={() => handleToggle(key)}
                  />
                  <span className="label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="van-cart">
        <div className="mkt">
          <div className="product-h6">
            <h6>Product</h6>
            <p className="arch-text">Architects design houses</p>

            <img className="car-image" src={Car1} />

            <p className="vechicle-p">Vehicle #1</p>
            <p className="wasp-ps">WASP</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button className="btn-text">info</button>
          </div>
        </div>

        <div className="mkt">
          <div className="product-h6">
            <h6>Product</h6>
            <p>Architects design houses</p>

            <img className="car-image" src={Car1} />

            <p className="vechicle-p">Vehicle #1</p>
            <p className="wasp-ps">WASP</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
              <button className="btn-text">info</button>
          </div>
        </div>
        <div className="mkt">
          <div className="product-h6">
            <h6>Product</h6>
            <p>Architects design houses</p>

            <img className="car-image" src={Car1} />

            <p className="vechicle-p">Vehicle #1</p>
            <p className="wasp-ps">WASP</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
              <button className="btn-text">info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
