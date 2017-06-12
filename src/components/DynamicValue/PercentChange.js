import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Percentage from "../../Percentage";

const PercentChangeContainer = styled.p`
  font-size: .5em;
`;

const PercentChange = ({children}) => {
  const arrow = children < 0 ? String.fromCharCode(8595) : String.fromCharCode(8593);

  return (
    <PercentChangeContainer>
      {arrow} <Percentage>{Math.abs(children)}</Percentage>
    </PercentChangeContainer>
  );
};
PercentChange.propTypes = {
  children: PropTypes.node.isRequired
};

export default PercentChange;
