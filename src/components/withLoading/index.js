import React from "react";
import "./index.css";

const Loading = () => (
  <div>
    <i className="fas fa-spinner" />
  </div>
);

const withLoading = Component => ({ isLoading, ...rest }) =>
  isLoading ? <Loading /> : <Component {...rest} />;

export default withLoading;
