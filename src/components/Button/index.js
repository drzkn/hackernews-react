import React from "react";
import PropTypes from "prop-types";
import "./index.css";

import withLoading from "../withLoading";

const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

Button.PropTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.element
};

Button.defaultProps = {
  className: ""
};

export const ButtonWithLoading = withLoading(Button);

export default Button;
