import React from "react";
import { shallow } from "enzyme";
import Signin from "./signin";

describe("Signin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Signin />);
    expect(wrapper).toMatchSnapshot();
  });
});
