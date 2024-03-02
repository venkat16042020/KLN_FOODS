import React from "react";
import { shallow } from "enzyme";
import Admin from "./admin";

describe("Admin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Admin />);
    expect(wrapper).toMatchSnapshot();
  });
});
