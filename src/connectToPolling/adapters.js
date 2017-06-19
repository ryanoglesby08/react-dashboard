import React from "react";
import PropTypes from "prop-types";

import DynamicColor from "../components/DynamicColor/DynamicColor";
import DynamicValue from "../components/DynamicValue/DynamicValue";

export const DynamicColorAdapter = ({value, ...rest}) => <DynamicColor {...rest} color={value} />;
DynamicColorAdapter.propTypes = {
  value: PropTypes.string
};
export const DynamicValueAdapter = ({value, ...rest}) => <DynamicValue {...rest} value={value} />;
DynamicValueAdapter.propTypes = {
  value: PropTypes.number
};
