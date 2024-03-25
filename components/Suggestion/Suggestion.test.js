import React from "react";
import { shallow } from "enzyme";
import Suggestion from "./Suggestion";

describe("Suggestion", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Suggestion />);
    expect(wrapper).toMatchSnapshot();
  });
});
