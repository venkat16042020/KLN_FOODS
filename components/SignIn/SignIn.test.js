import React from "react";
import { shallow } from "enzyme";
import SignIn from "./SignIn";

describe("SignIn", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
  });
});
