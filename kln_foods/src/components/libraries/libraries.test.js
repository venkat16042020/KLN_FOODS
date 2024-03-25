import React from "react";
import { shallow } from "enzyme";
import Libraries from "./libraries";

describe("Libraries", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Libraries />);
    expect(wrapper).toMatchSnapshot();
  });
});
