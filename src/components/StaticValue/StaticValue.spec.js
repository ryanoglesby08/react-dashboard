import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import StaticValue from "./StaticValue";
import Tile from "../../Tile/Tile";
import TileBody from "../../Tile/TileBody";

describe("StaticValue", () => {
  chai.use(chaiEnzyme());

  it("is a Tile", () => {
    const staticValue = shallow(<StaticValue>Some value</StaticValue>);

    expect(staticValue).to.have.type(Tile);
  });

  it("shows the value in the body", () => {
    const staticValue = shallow(<StaticValue>Some value</StaticValue>);

    expect(staticValue.find(TileBody).dive()).to.have.text("Some value");
  });
});
