import React from "react";
import { shallow } from "enzyme";
import Food_preparation from "./food_preparation";

describe("Food_preparation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Food_preparation />);
    expect(wrapper).toMatchSnapshot();
  });
});
