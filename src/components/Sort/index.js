// import classNames from "classnames";
import React from "react";
import "./index.css";

import Button from "../Button/";

const Sort = ({ sortKey, activeSortKey, onSort, children }) => {
  // const sortClass = classNames("button-inline", {
  //   "button-active": sortKey === activeSortKey
  // });

  return (
    <Button onClick={() => onSort(sortKey)} className="button-inline">
      {children}
    </Button>
  );
};

export default Sort;
