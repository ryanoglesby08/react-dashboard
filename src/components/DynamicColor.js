import React from "react";
import PropTypes from "prop-types";

import Tile from "../Tile/Tile";
import TileBody from "../Tile/TileBody";
import TileFooter from "../Tile/TileFooter";

const TileLayout = Tile.extend`
  background-color: ${({bgColor}) => bgColor};
`;

const DynamicColor = ({title, color, updatedAt}) => (
  <TileLayout bgColor={color}>
    <TileBody>{title}</TileBody>
    <TileFooter>
      {updatedAt && `Last updated: ${updatedAt.toLocaleString()}`}
    </TileFooter>
  </TileLayout>
);
DynamicColor.connectedProp = "color";
DynamicColor.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  updatedAt: PropTypes.instanceOf(Date)
};

export default DynamicColor;
