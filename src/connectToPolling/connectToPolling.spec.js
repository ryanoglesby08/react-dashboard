/* global setImmediate */

import {expect} from "chai";
import {mount} from "enzyme";

import React from "react";

import fetchMock from "fetch-mock";
import lolex from "lolex";

import connectToPolling from "./connectToPolling";

describe("connectToPolling", () => {
  const TestComponent = () => <div />;

  let clock,
      now = new Date();

  beforeEach(() => {
    clock = lolex.install(now, ["setInterval", "clearInterval", "Date"]);
  });

  afterEach(() => {
    fetchMock.restore();
    clock.uninstall();
  });

  it("polls the given url at the specified interval", () => {
    fetchMock.get("http://test.host", {});

    const Poller = connectToPolling("http://test.host", 1*1000, () => undefined)(TestComponent);

    mount(<Poller />);

    expect(fetchMock.called()).to.be.true;

    fetchMock.reset();
    clock.tick(1000);

    expect(fetchMock.called()).to.be.true;
  });

  it("maps a new value from the URL onto the component", (done) => {
    fetchMock.get("http://test.host", {value: "some value"});

    const Poller = connectToPolling("http://test.host", 1*1000, ({value}) => value)(TestComponent);

    const poller = mount(<Poller />);

    expect(poller).to.contain.descendants(TestComponent);

    fetchMock.flush().then(() => {
      setImmediate(() => {
        expect(poller.find(TestComponent)).to.have.prop("value", "some value");
        expect(poller.find(TestComponent)).to.have.prop("updatedAt").to.eql(now);
        done();
      });
    });
  });
});
