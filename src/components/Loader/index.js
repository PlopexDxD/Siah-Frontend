import React from "react";
import './index.css'
export const Loader = () => {
  return (
    <div className="loader___container">
      <div className="loader___spinner">
        <div className="loader___dot"></div>
        <div className="loader___dot"></div>
        <div className="loader___dot"></div>
        <div className="loader___dot"></div>
        <div className="loader___dot"></div>
      </div>
    </div>
  );
};
