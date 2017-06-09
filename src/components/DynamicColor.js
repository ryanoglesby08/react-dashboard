import React from "react";

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

export default DynamicColor;
