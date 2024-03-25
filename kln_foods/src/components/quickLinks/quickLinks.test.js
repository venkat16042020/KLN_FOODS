import React from "react";
import { shallow } from "enzyme";
import QuickLinks from "./quickLinks";

describe("QuickLinks", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<QuickLinks />);
    expect(wrapper).toMatchSnapshot();
  });
});
