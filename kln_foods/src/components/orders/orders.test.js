import React from "react";
import { shallow } from "enzyme";
import Orders from "./orders";

describe("Orders", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Orders />);
    expect(wrapper).toMatchSnapshot();
  });
});
