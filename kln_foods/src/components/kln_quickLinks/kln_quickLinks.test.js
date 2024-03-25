import React from "react";
import { shallow } from "enzyme";
import Kln_quickLinks from "./kln_quickLinks";

describe("Kln_quickLinks", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Kln_quickLinks />);
    expect(wrapper).toMatchSnapshot();
  });
});
