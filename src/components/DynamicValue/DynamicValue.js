import React from "react";
import PropTypes from "prop-types";

import Tile from "../../Tile/Tile";
import TileHeader from "../../Tile/TileHeader";
import TileBody from "../../Tile/TileBody";
import TileFooter from "../../Tile/TileFooter";
import LastUpdated from "../../LastUpdated/LastUpdated";

import PercentChange from "./PercentChange/PercentChange";

const DynamicValue = ({title, value, updatedAt, showChange}) => (
  <Tile>
    <TileHeader>{title}</TileHeader>
    <TileBody>
      <p>{value}</p>
      {showChange && <PercentChange value={value}/>}
    </TileBody>
    <TileFooter>
      <LastUpdated at={updatedAt}/>
    </TileFooter>
  </Tile>
);
DynamicValue.connectedProp = "value";
DynamicValue.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  updatedAt: PropTypes.instanceOf(Date),
  showChange: PropTypes.bool.isRequired
};
DynamicValue.defaultProps = {
  showChange: true
};

export default DynamicValue;
