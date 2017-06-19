import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import DynamicColor from "./DynamicColor";
import TileBody from "../../Tile/TileBody";
import TileFooter from "../../Tile/TileFooter";
import LastUpdated from "../../LastUpdated/LastUpdated";

describe("DynamicColor", () => {
  chai.use(chaiEnzyme());

  const defaultProps = {
    title: "The title",
  };
  const doShallow = (overrides = {}) => shallow(<DynamicColor {...defaultProps} {...overrides} />);

  // TODO: Need to be able to assert on an extended styled component
  it("is a Tile");

  // TODO: Need to be able to assert on the template literal of the styled component
  it("colors the tile");

  it("shows the title in the body", () => {
    const dynamicColor = doShallow({title: "Some title"});

    expect(dynamicColor.find(TileBody).dive()).to.have.text("Some title");
  });

  it("shows the last updated time in the footer", () => {
    const updatedAt = new Date();
    const dynamicColor = doShallow({updatedAt: updatedAt});

    expect(dynamicColor.find(TileFooter).dive()).to.contain(<LastUpdated at={updatedAt}/>);
  });
});
