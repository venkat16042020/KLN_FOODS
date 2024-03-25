import React from "react";
import { shallow } from "enzyme";
import Media from "./Media";

describe("Media", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Media />);
    expect(wrapper).toMatchSnapshot();
  });
});
