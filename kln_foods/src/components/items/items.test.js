import React from "react";
import { shallow } from "enzyme";
import Items from "./items";

describe("Items", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Items />);
    expect(wrapper).toMatchSnapshot();
  });
});
