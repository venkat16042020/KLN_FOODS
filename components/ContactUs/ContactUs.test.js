import React from "react";
import { shallow } from "enzyme";
import ContactUs from "./ContactUs";

describe("ContactUs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ContactUs />);
    expect(wrapper).toMatchSnapshot();
  });
});
