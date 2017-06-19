import React from "react";
import PropTypes from "prop-types";

import Tile from "../../Tile/Tile";
import TileBody from "../../Tile/TileBody";
import TileFooter from "../../Tile/TileFooter";
import LastUpdated from "../../LastUpdated/LastUpdated";

const TileWithBgColor = Tile.extend`
  background-color: ${({bgColor}) => bgColor};
`;

const DynamicColor = ({title, color, updatedAt}) => (
  <TileWithBgColor bgColor={color}>
    <TileBody>{title}</TileBody>
    <TileFooter>
      <LastUpdated at={updatedAt}/>
    </TileFooter>
  </TileWithBgColor>
);
DynamicColor.connectedProp = "color";
DynamicColor.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  updatedAt: PropTypes.instanceOf(Date)
};

export default DynamicColor;
