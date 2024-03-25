import React from "react";
import { shallow } from "enzyme";
import BuyProducts from "./BuyProducts";

describe("BuyProducts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BuyProducts />);
    expect(wrapper).toMatchSnapshot();
  });
});
