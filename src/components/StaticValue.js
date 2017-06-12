import React from "react";
import PropTypes from "prop-types";

import Tile from "../Tile/Tile";
import TileBody from "../Tile/TileBody";

const StaticValue = ({children}) => (
  <Tile>
    <TileBody>{children}</TileBody>
  </Tile>
);
StaticValue.propTypes = {
  children: PropTypes.node
};

export default StaticValue;
