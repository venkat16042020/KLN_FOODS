import React from "react";
import { shallow } from "enzyme";
import Help from "./help";

describe("Help", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Help />);
    expect(wrapper).toMatchSnapshot();
  });
});
