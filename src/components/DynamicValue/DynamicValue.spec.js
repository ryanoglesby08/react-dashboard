import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import DynamicValue from "./DynamicValue";
import PercentChange from "./PercentChange/PercentChange";
import Tile from "../../Tile/Tile";
import TileHeader from "../../Tile/TileHeader";
import TileBody from "../../Tile/TileBody";
import TileFooter from "../../Tile/TileFooter";
import LastUpdated from "../../LastUpdated/LastUpdated";

describe("DynamicValue", () => {
  chai.use(chaiEnzyme());

  const defaultProps = {
    title: "The title",
  };
  const doShallow = (overrides = {}) => shallow(<DynamicValue {...defaultProps} {...overrides} />);

  it("is a Tile", () => {
    const dynamicValue = doShallow();

    expect(dynamicValue).to.have.type(Tile);
  });

  it("shows the title in the header", () => {
    const dynamicValue = doShallow({title: "Some title"});

    expect(dynamicValue.find(TileHeader).dive()).to.have.text("Some title");
  });

  it("shows the value in the body", () => {
    const dynamicValue = doShallow({value: 100});

    expect(dynamicValue.find(TileBody).dive()).to.contain.text("100");
  });

  it("shows the percent change in the body only when specified", () => {
    let dynamicValue = doShallow({value: 100});
    expect(dynamicValue.find(TileBody).dive()).to.contain(<PercentChange value={100} />);

    dynamicValue = doShallow({value: 100, showChange: false});
    expect(dynamicValue.find(TileBody).dive()).not.to.contain.descendants(PercentChange);
  });

  it("shows the last updated time in the footer", () => {
    const updatedAt = new Date();
    const dynamicValue = doShallow({updatedAt: updatedAt});

    expect(dynamicValue.find(TileFooter).dive()).to.contain(<LastUpdated at={updatedAt}/>);
  });
});
