import React from "react";
import { shallow } from "enzyme";
import Videos from "./videos";

describe("Videos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Videos />);
    expect(wrapper).toMatchSnapshot();
  });
});
