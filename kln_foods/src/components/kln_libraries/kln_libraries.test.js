import React from "react";
import { shallow } from "enzyme";
import Kln_libraries from "./kln_libraries";

describe("Kln_libraries", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Kln_libraries />);
    expect(wrapper).toMatchSnapshot();
  });
});
