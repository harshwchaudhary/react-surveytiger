import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
  return (
    <div>
      <Link to="/create">
        <div>
          <button className="landing-page-button">Create Survey</button>
        </div>
      </Link>
      <div>
        <button className="landing-page-button">Take Survey</button>
      </div>
    </div>
  );
};

export default LandingPage;
