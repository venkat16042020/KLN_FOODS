import React from "react";
import { shallow } from "enzyme";
import Suggestions from "./suggestions";

describe("Suggestions", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Suggestions />);
    expect(wrapper).toMatchSnapshot();
  });
});
