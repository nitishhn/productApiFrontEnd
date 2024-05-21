/* import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        WELCOME TO PRODUCT MANAGEMENT WEBSITE
      </h3>

      <div style={{ textAlign: "left", marginTop: "20px" }}>
        <Link to="/HomeDashBoard" className="btn btn-primary btn-lg">
          Products Dashboard
        </Link>
      </div>

      <div style={{ textAlign: "center" }}>
        <img
          src="https://www.masleyo.com/wp-content/uploads/2022/05/Product-Management.jpg"
          width="100%"
          height="500"
          alt="Alternate text"
        />
      </div>
      <div>
        <Link to="/About">About Us</Link>
      </div>

      <div>
        <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Homepage;

*

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div className="container">
      <h3 className="header">WELCOME TO PRODUCT MANAGEMENT WEBSITE</h3>

      <div>
        <Link to="/HomeDashBoard">Product Dashboard</Link>
      </div>

      <div>
        <Link to="/Login">Login</Link>
      </div>

      <div className="image-container">
        <img
          src="https://www.masleyo.com/wp-content/uploads/2022/05/Product-Management.jpg"
          width="100%"
          height="500"
          alt="Product Management"
        />
      </div>

      <div className="footer">
        <div>
          <Link to="/About" className="footer-link">
            About Us
          </Link>
        </div>

        <div>
          <Link to="/Contact" className="footer-link">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

*

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div className="container">
      <h3 className="header">WELCOME TO PRODUCT MANAGEMENT WEBSITE</h3>

      <div>
        <Link to="/HomeDashBoard">
          <button className="button">Product Dashboard</button>
        </Link>
      </div>

      <div>
        <Link to="/Login">
          <button className="button">Login</button>
        </Link>
      </div>

      <div className="image-container">
        <img
          src="https://www.masleyo.com/wp-content/uploads/2022/05/Product-Management.jpg"
          width="100%"
          height="500"
          alt="Product Management"
        />
      </div>

      <div className="footer">
        <div>
          <Link to="/About" className="footer-link">
            About Us
          </Link>
        </div>

        <div>
          <Link to="/Contact" className="footer-link">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

*/

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div className="container">
      <h3 className="header">WELCOME TO PRODUCT MANAGEMENT WEBSITE</h3>

      <div>
        <Link to="/HomeDashBoard">
          <button className="button">Product Dashboard</button>
        </Link>

        <Link to="/Login">
          <button className="button">Login</button>
        </Link>
      </div>

      <div className="image-container">
        <img
          src="https://www.masleyo.com/wp-content/uploads/2022/05/Product-Management.jpg"
          width="100%"
          height="500"
          alt="Product Management"
        />
      </div>

      <div className="footer">
        <div>
          <Link to="/About" className="footer-link">
            About Us
          </Link>

          <Link to="/Contact" className="footer-link">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
