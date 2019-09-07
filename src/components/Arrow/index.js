import React from "react";
import "./index.css";

const Arrow = ({ isSortReverse }) => {
  return isSortReverse ? (
    <i className="fas fa-arrow-up" />
  ) : (
    <i className="fas fa-arrow-down" />
  );
};

export default Arrow;
