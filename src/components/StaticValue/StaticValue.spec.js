import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow, render} from "enzyme";

import React from "react";

import StaticValue from "./StaticValue";
import Tile from "../../Tile/Tile";

describe("StaticValue", () => {
  chai.use(chaiEnzyme());

  it("is a Tile", () => {
    const staticValue = shallow(<StaticValue>Some value</StaticValue>);

    expect(staticValue).to.have.type(Tile);
  });

  it("shows the value", () => {
    const staticValue = render(<StaticValue>Some value</StaticValue>);

    expect(staticValue).to.have.text("Some value");
  });
});
