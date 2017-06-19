/* global Intl */

import React from "react";
import PropTypes from "prop-types";

const percentage = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return formatter.format(value);
};

const Percentage = ({children}) => (
  <span>{percentage(children)}</span>
);
Percentage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

export default Percentage;
