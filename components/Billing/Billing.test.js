import React from "react";
import { shallow } from "enzyme";
import Billing from "./Billing";

describe("Billing", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Billing />);
    expect(wrapper).toMatchSnapshot();
  });
});
