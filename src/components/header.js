import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div>
      <header>
        <div className="flexbox-container">
          <Link to="/" className="logo">
            <span />
          </Link>
          <nav>
            <Link to="/teams">Teams</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default header;
