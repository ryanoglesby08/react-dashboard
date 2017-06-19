import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import LastUpdated from "./LastUpdated";

describe("LastUpdated", () => {
  chai.use(chaiEnzyme());

  it("shows the formatted date", () => {
    const time = new Date(2017, 6, 19);
    const lastUpdated = shallow(<LastUpdated at={time} />);

    expect(lastUpdated).to.have.text("Last updated 7/19/2017, 12:00:00 AM");
  });

  it("shows nothing if no time is specified", () => {
    const lastUpdated = shallow(<LastUpdated />);

    expect(lastUpdated).to.be.blank();
  });
});
