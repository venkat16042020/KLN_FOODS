import React from "react";
import { shallow } from "enzyme";
import Bills from "./bills";

describe("Bills", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Bills />);
    expect(wrapper).toMatchSnapshot();
  });
});
