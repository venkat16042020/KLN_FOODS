import React from "react";
import { shallow } from "enzyme";
import Kln_documentation from "./kln_documentation";

describe("Kln_documentation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Kln_documentation />);
    expect(wrapper).toMatchSnapshot();
  });
});
