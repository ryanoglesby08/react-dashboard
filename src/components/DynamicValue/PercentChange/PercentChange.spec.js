import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import {shallow} from "enzyme";

import React from "react";

import PercentChange from "./PercentChange";

describe("PercentChange", () => {
  chai.use(chaiEnzyme());

  it("shows nothing when there is no value to compare with", () => {
    const dynamicValue = shallow(<PercentChange value={10} />);

    expect(dynamicValue).to.be.blank();
  });

  it("shows the percent change when the value changes", () => {
    const dynamicValue = shallow(<PercentChange value={10} />);

    dynamicValue.setProps({value: 20});
    expect(dynamicValue.render()).to.contain.text("↑ 100%");

    dynamicValue.setProps({value: 10});
    expect(dynamicValue.render()).to.contain.text("↓ 50%");
  });

  it("shows nothing when there is no change", () => {
    const dynamicValue = shallow(<PercentChange value={10} />);

    dynamicValue.setProps({value: 10});
    expect(dynamicValue).to.be.blank();

    dynamicValue.setProps({value: null});
    expect(dynamicValue).to.be.blank();

    dynamicValue.setProps({value: undefined});
    expect(dynamicValue).to.be.blank();
  });
});
