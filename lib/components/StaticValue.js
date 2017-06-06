import React from "react";

import Tile from "../Tile/Tile";
import TileBody from "../Tile/TileBody";

const StaticValue = ({children}) => (
  <Tile>
    <TileBody>{children}</TileBody>
  </Tile>
);

export default StaticValue;
