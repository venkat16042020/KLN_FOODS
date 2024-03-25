import React from "react";
import { shallow } from "enzyme";
import Documentation from "./Documentation";

describe("Documentation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Documentation />);
    expect(wrapper).toMatchSnapshot();
  });
});
