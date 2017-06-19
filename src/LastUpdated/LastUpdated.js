import React from "react";
import PropTypes from "prop-types";

const LastUpdated = ({at}) => {
  if (!at) {
    return null;
  }

  return <span>Last updated {at.toLocaleString()}</span>;
};
LastUpdated.propTypes = {
  at: PropTypes.instanceOf(Date)
};

export default LastUpdated;
