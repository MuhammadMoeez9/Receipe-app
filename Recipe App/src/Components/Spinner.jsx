
import React from "react";
import "./Spinner.css"; // Import your spinner styles

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Spinner;
